const ExperienceBox = ({ iconClass, heading, qualification }) => {
  // helper to render location which can be string or {name, url}
  const renderLocation = (loc) => {
    if (!loc) return null;
    if (typeof loc === "string") return <span className="education_subtitle">{loc}</span>;
    // object form
    const { name, url } = loc;
    if (url) {
      return (
        <a
          className="education_subtitle company_link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} (opens in new tab)`}
        >
          {name}
        </a>
      );
    }
    return <span className="education_subtitle">{name}</span>;
  };

  return (
    <div>
      <h3
        className="resume_heading"
        data-aos={heading.includes("Education") ? "fade-right" : "fade-left"}
        data-aos-delay="0"
      >
        <i className={`uil uil-${iconClass} resume_icon`}></i>
        {heading}
      </h3>

      {qualification.map((data, i) => {
        return (
          <div
            className="resume_sub_container"
            key={i}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <span className="resume_rounded"></span>
              {qualification.length - 1 !== i && (
                <span className="resume_line"></span>
              )}
            </div>

            <div className="education_container">
              <h3 className="education_title">{data.title}</h3>

              {renderLocation(data.location)}

              <div className="calendar_icon">
                <i className="uil uil-calendar-alt"></i>
                {` ${data.calender}`}
              </div>

              {/* optional details array (bulleted list) */}
              {data.details && Array.isArray(data.details) && data.details.length > 0 && (
                <ul className="resume_details" aria-label={`${data.title} details`}>
                  {data.details.map((d, idx) => (
                    <li key={idx} className="resume_detail_item">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBox;
