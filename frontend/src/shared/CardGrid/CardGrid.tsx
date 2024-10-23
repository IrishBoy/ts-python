import "./CardGrid.css";
import React from 'react';
import { TextHeading } from "../TextHeading/TextHeading.jsx";
import { Text } from "../Text/Text.jsx";

interface CardGridReviewsProps {
  className?: string;
  texts: {
    heading: string;
    body: string;
  }[];
  icons: string[][];
}

export const CardGridReviews: React.FC<CardGridReviewsProps> = ({ className = '', texts, icons }) => {
  return (
    <div className={`card-grid-reviews ${className}`}>
      <div className="card-grid">
        {texts.map((text, index) => (
          <div key={index} className="review-card">
            <div className="review-body">
              <TextHeading text={text.heading} className={`text-heading-instance${index}`} />
              <Text text={text.body} className="text-instance" />
            </div>
            {/* <div className="avatar-group">
              {icons[index].map((icon, iconIndex) => (
                <img key={iconIndex} src={icon} alt={`Icon ${iconIndex}`} className={`avatar-group-instance${iconIndex}`} />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};