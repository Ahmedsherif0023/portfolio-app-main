import React from "react";

interface CardProps {
  image: string | React.ReactNode;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, liveLink, githubLink, link }) => {
  return (
    <div>
      <div className="project-card">
        {typeof image === "string" ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          image
        )}
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        {(liveLink || githubLink) && (
          <div className="project-buttons">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Project Link
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Github Repo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;