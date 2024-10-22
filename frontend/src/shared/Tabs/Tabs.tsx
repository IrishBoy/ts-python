import React from 'react';
import './Tabs.css'; // Ensure you import the CSS styles

interface TabProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // Add the onClick handler
  role?: string;
  tabIndex?: number;
  "aria-pressed"?: boolean;
}

const Tab: React.FC<TabProps> = ({ className, children, onClick, role, tabIndex, ...ariaProps }) => (
  <div
    className={className}
    onClick={onClick}
    role={role}
    tabIndex={tabIndex}
    {...ariaProps}
  >
    <span className="label">{children}</span>
  </div>
);

const Tab2: React.FC<TabProps> = ({ className, children, onClick, role, tabIndex, ...ariaProps }) => (
  <div
    className={className}
    onClick={onClick}
    role={role}
    tabIndex={tabIndex}
    {...ariaProps}
  >
    <span className="label2">{children}</span>
  </div>
);

export { Tab, Tab2 };