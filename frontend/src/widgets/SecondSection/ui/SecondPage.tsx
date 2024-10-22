import React, { Component } from "react";
import { Tab, Tab2 } from "../../../shared/Tabs"  // Adjust the import path according to your project structure
import "../../../shared/Tabs/Tabs.css";  // Ensure the CSS for styling tabs is imported

interface SecondPageProps {
  onNext: () => void;
  onPrevious: () => void;
}

interface SecondPageState {
  activeTab: string;
}

class SecondPage extends Component<SecondPageProps, SecondPageState> {
  constructor(props: SecondPageProps) {
    super(props);
    this.state = {
      activeTab: "left", // Default active tab
    };
  }

  switchTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { onNext, onPrevious } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="full-page-section second-section">
        <div className="button-back-container">
          <button className="button-back" onClick={onPrevious}>Back</button>
        </div>
        <div className="text-container">
          <h1 className="title">Second Page</h1>
        </div>
        <div className="tabs">
          <Tab
            className={`tab ${activeTab === "left" ? "active" : ""}`}
            onClick={() => this.switchTab("left")}
            role="button"
            tabIndex={0}
            aria-pressed={activeTab === "left"}
          >
            Left Tab
          </Tab>
          <Tab2
            className={`tab2 ${activeTab === "right" ? "active" : ""}`}
            onClick={() => this.switchTab("right")}
            role="button"
            tabIndex={0}
            aria-pressed={activeTab === "right"}
          >
            Right Tab
          </Tab2>
        </div>
        <div className="tab-content">
          {activeTab === "left" ? (
            <p>This is the content for the Left Tab.</p>
          ) : (
            <p>This is the content for the Right Tab.</p>
          )}
        </div>
        <div className="button-next-container">
          <button className="button-back" onClick={onNext}>When?</button>
        </div>
      </div>
    );
  }
}

export default SecondPage;