import { useEffect, useRef } from "react";

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const layersRef = useRef([]);
  const prevDimensions = useRef({ width: 0, height: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const highlightedNode = useRef(null);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const getComputedStyles = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        lineColor: styles.getPropertyValue('--nn-line-color').trim(),
        lineWidth: parseFloat(styles.getPropertyValue('--nn-line-width')),
        lineGlowColor: styles.getPropertyValue('--nn-line-glow-color').trim() || 'rgba(247, 185, 72, 0.5)',
        lineGlowIntensity: parseFloat(styles.getPropertyValue('--nn-line-glow-intensity')),
        nodeColor: styles.getPropertyValue('--nn-node-color').trim(),
        nodeSize: parseFloat(styles.getPropertyValue('--nn-node-size')),
        dotColor: styles.getPropertyValue('--nn-dot-color').trim(),
        dotSize: parseFloat(styles.getPropertyValue('--nn-dot-size')),
        dotCount: parseInt(styles.getPropertyValue('--nn-dot-count')),
        dotSpeedMin: parseFloat(styles.getPropertyValue('--nn-dot-speed-min')),
        dotSpeedMax: parseFloat(styles.getPropertyValue('--nn-dot-speed-max')),
        canvasPadding: parseFloat(styles.getPropertyValue('--nn-canvas-padding')),
        scaleFactor: parseFloat(styles.getPropertyValue('--nn-scale-factor')),
      };
    };

    const initializeLayers = (width, height, scale) => {
      const centerX = width / 2;
      const centerY = height / 2;
      layersRef.current = [
        // Input layer: 3 nodes
        [
          { x: centerX - 150 * scale, y: centerY - 60 * scale },
          { x: centerX - 150 * scale, y: centerY },
          { x: centerX - 150 * scale, y: centerY + 60 * scale },
        ],
        // Hidden layer 1: 5 nodes
        [
          { x: centerX - 75 * scale, y: centerY - 90 * scale },
          { x: centerX - 75 * scale, y: centerY - 45 * scale },
          { x: centerX - 75 * scale, y: centerY },
          { x: centerX - 75 * scale, y: centerY + 45 * scale },
          { x: centerX - 75 * scale, y: centerY + 90 * scale },
        ],
        // Hidden layer 2: 3 nodes
        [
          { x: centerX, y: centerY - 60 * scale },
          { x: centerX, y: centerY },
          { x: centerX, y: centerY + 60 * scale },
        ],
        // Output layer: 1 node
        [{ x: centerX + 75 * scale, y: centerY }],
      ];
    };

    const resizeCanvas = () => {
      const config = getComputedStyles();
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      prevDimensions.current = { width: canvas.width, height: canvas.height };

      const width = canvas.width - config.canvasPadding * 2;
      const height = canvas.height - config.canvasPadding * 2;
      const scale = config.scaleFactor * Math.min(width / 300, height / 300);

      if (!layersRef.current.length || !prevDimensions.current.width) {
        initializeLayers(canvas.width, canvas.height, scale);
      } else {
        const scaleX = canvas.width / prevDimensions.current.width;
        const scaleY = canvas.height / prevDimensions.current.height;
        layersRef.current = layersRef.current.map((layer) =>
          layer.map((node) => ({
            x: node.x * scaleX,
            y: node.y * scaleY,
          }))
        );
        dots.current = dots.current.map((dot) => ({
          ...dot,
          path: dot.path.map((segment) => ({
            start: { x: segment.start.x * scaleX, y: segment.start.y * scaleY },
            end: { x: segment.end.x * scaleX, y: segment.end.y * scaleY },
          })),
        }));
      }
    };

    const initializeDots = () => {
      const config = getComputedStyles();
      if (!layersRef.current.length) return;
      dots.current = [];
      for (let i = 0; i < config.dotCount; i++) {
        const startLayer = 0;
        const startNode = Math.floor(Math.random() * layersRef.current[startLayer].length);
        const endLayer = layersRef.current.length - 1;
        const endNode = Math.floor(Math.random() * layersRef.current[endLayer].length);
        dots.current.push({
          progress: Math.random(),
          speed: config.dotSpeedMin + Math.random() * (config.dotSpeedMax - config.dotSpeedMin),
          path: getPath(startLayer, startNode, endLayer, endNode),
        });
      }
    };

    const getPath = (startLayer, startNode, endLayer, endNode) => {
      const path = [];
      let currentLayer = startLayer;
      let currentNode = startNode;

      while (currentLayer < endLayer) {
        const nextLayer = currentLayer + 1;
        const nextNode =
          nextLayer === endLayer
            ? endNode
            : Math.floor(Math.random() * layersRef.current[nextLayer].length);
        path.push({
          start: layersRef.current[currentLayer][currentNode],
          end: layersRef.current[nextLayer][nextNode],
        });
        currentLayer = nextLayer;
        currentNode = nextNode;
      }
      return path;
    };

    const checkNodeHover = (x, y) => {
      const config = getComputedStyles();
      for (let i = 0; i < layersRef.current.length; i++) {
        for (let j = 0; j < layersRef.current[i].length; j++) {
          const node = layersRef.current[i][j];
          const dx = x - node.x;
          const dy = y - node.y;
          if (Math.sqrt(dx * dx + dy * dy) < config.nodeSize * 2) {
            return { layer: i, node: j };
          }
        }
      }
      return null;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) * window.devicePixelRatio,
        y: (e.clientY - rect.top) * window.devicePixelRatio,
      };
      highlightedNode.current = checkNodeHover(mousePos.current.x, mousePos.current.y);
    };

    const handleClick = () => {
      const config = getComputedStyles();
      if (highlightedNode.current) {
        const { layer, node } = highlightedNode.current;
        const endLayer = layersRef.current.length - 1;
        const endNode = Math.floor(Math.random() * layersRef.current[endLayer].length);
        dots.current.push({
          progress: 0,
          speed: config.dotSpeedMin + Math.random() * (config.dotSpeedMax - config.dotSpeedMin),
          path: getPath(layer, node, endLayer, endNode),
        });
      }
    };

const animate = (time) => {
  const config = getComputedStyles();
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for transparency

  for (let i = 0; i < layersRef.current.length - 1; i++) {
    for (let j = 0; j < layersRef.current[i].length; j++) {
      for (let k = 0; k < layersRef.current[i + 1].length; k++) {
        const isHighlighted =
          highlightedNode.current &&
          (highlightedNode.current.layer === i && highlightedNode.current.node === j ||
           highlightedNode.current.layer === i + 1 && highlightedNode.current.node === k);
        const lineGradient = ctx.createLinearGradient(
          layersRef.current[i][j].x,
          layersRef.current[i][j].y,
          layersRef.current[i + 1][k].x,
          layersRef.current[i + 1][k].y
        );
        lineGradient.addColorStop(0, isHighlighted ? 'rgba(247, 185, 72, 0.6)' : `rgba(${parseInt(config.lineColor.slice(1, 3), 16)}, ${parseInt(config.lineColor.slice(3, 5), 16)}, ${parseInt(config.lineColor.slice(5, 7), 16)}, 0.5)`);
        lineGradient.addColorStop(1, `rgba(${parseInt(config.lineColor.slice(1, 3), 16)}, ${parseInt(config.lineColor.slice(3, 5), 16)}, ${parseInt(config.lineColor.slice(5, 7), 16)}, 0.3)`);
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = isHighlighted ? config.lineWidth * 1.5 : config.lineWidth;
        ctx.shadowBlur = isHighlighted ? config.lineGlowIntensity * 1.5 : config.lineGlowIntensity;
        ctx.shadowColor = config.lineGlowColor;
        ctx.beginPath();
        ctx.moveTo(layersRef.current[i][j].x, layersRef.current[i][j].y);
        ctx.lineTo(layersRef.current[i + 1][k].x, layersRef.current[i + 1][k].y);
        ctx.stroke();
      }
    }
  }
  ctx.shadowBlur = 0;

  ctx.fillStyle = `rgba(${parseInt(config.nodeColor.slice(1, 3), 16)}, ${parseInt(config.nodeColor.slice(3, 5), 16)}, ${parseInt(config.nodeColor.slice(5, 7), 16)}, 0.7)`;
  const pulse = Math.sin(time / 500) * 0.2 + 0.8;
  for (let i = 0; i < layersRef.current.length; i++) {
    for (let j = 0; j < layersRef.current[i].length; j++) {
      const node = layersRef.current[i][j];
      const isHighlighted = highlightedNode.current && highlightedNode.current.layer === i && highlightedNode.current.node === j;
      ctx.beginPath();
      ctx.arc(node.x, node.y, config.nodeSize * (isHighlighted ? 1.5 : pulse), 0, 2 * Math.PI);
      ctx.fillStyle = isHighlighted ? 'rgba(247, 185, 72, 0.6)' : `rgba(${parseInt(config.nodeColor.slice(1, 3), 16)}, ${parseInt(config.nodeColor.slice(3, 5), 16)}, ${parseInt(config.nodeColor.slice(5, 7), 16)}, 0.7)`;
      ctx.fill();
    }
  }

  dots.current = dots.current.filter((dot) => dot.progress < 1);
  for (const dot of dots.current) {
    let totalProgress = dot.progress;
    let currentSegment = 0;
    while (totalProgress > 1 / dot.path.length && currentSegment < dot.path.length - 1) {
      totalProgress -= 1 / dot.path.length;
      currentSegment++;
    }
    const segmentProgress = easeInOutQuad(totalProgress * dot.path.length);
    const { start, end } = dot.path[currentSegment];
    const x = start.x + (end.x - start.x) * segmentProgress;
    const y = start.y + (end.y - start.y) * segmentProgress;

    const opacity = 1 - segmentProgress;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, config.dotSize);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
    gradient.addColorStop(1, `rgba(${parseInt(config.dotColor.slice(1, 3), 16)}, ${parseInt(config.dotColor.slice(3, 5), 16)}, ${parseInt(config.dotColor.slice(5, 7), 16)}, ${opacity * 0.6})`);
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(x, y, config.dotSize, 0, 2 * Math.PI);
    ctx.fill();

    dot.progress += dot.speed;
  }

  if (dots.current.length < config.dotCount && layersRef.current.length) {
    const startLayer = 0;
    const startNode = Math.floor(Math.random() * layersRef.current[startLayer].length);
    const endLayer = layersRef.current.length - 1;
    const endNode = Math.floor(Math.random() * layersRef.current[endLayer].length);
    dots.current.push({
      progress: 0,
      speed: config.dotSpeedMin + Math.random() * (config.dotSpeedMax - config.dotSpeedMin),
      path: getPath(startLayer, startNode, endLayer, endNode),
    });
  }

  // Add text label
  ctx.font = '16px Arial';
  ctx.fillStyle = `${config.dotColor}`; 
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Neural Network', (canvas.width - config.canvasPadding) / window.devicePixelRatio, (canvas.height - config.canvasPadding) / window.devicePixelRatio);

  animationFrameId = requestAnimationFrame(animate);
};

    resizeCanvas();
    initializeDots();
    animate(0);

    window.addEventListener("resize", debounce(resizeCanvas, 100));
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", debounce(resizeCanvas, 100));
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" />;
};

export default NeuralNetworkCanvas;