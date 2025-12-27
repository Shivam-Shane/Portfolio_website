import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Chatbot() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I can quickly provide key details about Shivam.", isBot: true },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const chatBoxRef = useRef(null);
  const popupRef = useRef(null);
  const isPopupOpenRef = useRef(isPopupOpen);
  const beepSound = useRef(null);
  const BACKEND_CHATBOT_URL = process.env.NEXT_PUBLIC_BACKEND_CHATBOT_URL;
  const [sessionId, setSessionId] = useState(null);
  const toggleChatPopup = () => { setPopupOpen(!isPopupOpen); if (!isPopupOpen) setHasUnread(false);};

useEffect(() => {
   if (typeof window !== 'undefined') {
     beepSound.current = new Audio('/chat_notification.mp3');
   }
 }, []);
  
useEffect(() => {
    isPopupOpenRef.current = isPopupOpen;
  }, [isPopupOpen]);

useEffect(() => {
  if (typeof window !== 'undefined') {
    let session = JSON.parse(localStorage.getItem('session_id')) || { id: null, expires: null };

    if (session.expires && Date.now() > session.expires) {
      localStorage.removeItem('session_id');
      session.id = null;
    }

    setSessionId(session.id);
  }
}, []);

useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isPopupOpen && popupRef.current && !popupRef.current.contains(event.target) && !event.target.closest('.chat-icon')) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
}, [isPopupOpen]);

const getCSRFToken = () => {
  let cookieValue = null;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith('csrftoken=')) {
      cookieValue = trimmedCookie.substring('csrftoken='.length);
      break;
    }
  }
  return cookieValue;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendMessage = async () => {
  if (userInput.trim() === '') return;

  const newUserMessage = { text: userInput, isBot: false };
  setMessages((prev) => [...prev, newUserMessage]);
  setUserInput('');
  setIsTyping(true);

  try {
    const response = await fetch(`${BACKEND_CHATBOT_URL}/api/chat_worker/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(),
      },
      body: JSON.stringify({
        message: userInput,
        session_id: sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.session_id) {
      sessionId = data.session_id;
      // Set with 1-day expiry (86,400,000 ms)
      localStorage.setItem('session_id', JSON.stringify({ id: sessionId, expires: Date.now() + 86400000 }));
    }
    await sleep(2000);

    setIsTyping(false);
    const botResponse = { text: data.message, isBot: true };
    setMessages((prev) => [...prev, botResponse]);
    setHasUnread((prev) => {
      if (!isPopupOpenRef.current) {
        beepSound.current.play().catch((err) => console.error('Beep error:', err));
        return true;
      }
      return prev;
    });
  } catch (error) {
    await sleep(2000);
    setIsTyping(false);
    const errorResponse = { text: 'Sorry, something went wrong!', isBot: true };
    setMessages((prev) => [...prev, errorResponse]);
    setHasUnread((prev) => {
      if (!isPopupOpenRef.current) {
        beepSound.current.play().catch((err) => console.error('Beep error:', err));
        return true;
      }
      return prev;
    });
  }
};

useEffect(() => {
  if (chatBoxRef.current) {
    chatBoxRef.current.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth', // Smooth scrolling
    });
  }
}, [messages, isTyping]);

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
};

return (
    <>
      <div className="chat-icon" onClick={toggleChatPopup}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/134/134914.png"
          alt="Chat Icon"
        />
        {hasUnread && <span className="unread-dot"></span>}
      </div>
      <div className={`chat-popup ${isPopupOpen ? 'open' : ''}`} ref={popupRef}>
        <div className="chat-header">
          <span>Shivam's AI Bot!</span>{' '}
          <button className="close-btn" onClick={toggleChatPopup}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className="chat-container">
          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.isBot ? 'bot-message' : 'user-message'}`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot-message typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>
          <div className="user-input-container">
            <input
              type="text"
              className="user-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage} className="send-btn">
            <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;