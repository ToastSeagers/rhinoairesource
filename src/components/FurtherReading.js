import React from 'react';

function FurtherReading() {
  return (
    <section className="further-reading">
      <h2>Further Reading and Videos</h2>
      <div className="resource-item">
        <h3>Use of Generative AI Policy</h3>
        <a href="https://drive.google.com/file/d/1aAuitRtypOvIVDZiKLf7oShaMvSvVW5e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          View Policy Document
        </a>
      </div>

      <div className="resource-item">
        <h3>A.I. - Humanity's Final Invention?</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fa8k8IQ1_X0"
            title="A.I. - Humanity's Final Invention?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="resource-item">
        <h3>Digital Transformation: Are You Ready for Exponential Change?</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ystdF6jN7hc"
            title="Digital Transformation: Are You Ready for Exponential Change?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default FurtherReading;