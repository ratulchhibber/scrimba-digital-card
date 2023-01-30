import React from 'react';

export default function Contact() {
    return (
        <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:abc@xyz.com">
            <i className="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    )
}