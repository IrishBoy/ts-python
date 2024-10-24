import React, { Component } from "react";
import { Tab, Tab2 } from "../../../shared/Tabs"; // Adjust the import path according to your project structure
import "../../../shared/Tabs/Tabs.css";
import {CardGridReviews} from "../../../shared/CardGrid"; // Adjust path as necessary
import SqlIcon from "../../../assets/sql.png";
import ExcelIcon from "../../../assets/excel.png";
import CsvIcon from "../../../assets/csv.png";
import ApiIcon from "../../../assets/api.png";
import FilesIcon from "../../../assets/files.png";
import QueueIcon from "../../../assets/queue.png";
import DoubleCheckIcon from "../../../assets/doubleCheck.png";
import TimeIcon from "../../../assets/time.png";

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
      activeTab: "left",
    };
  }

  switchTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { onNext, onPrevious } = this.props;
    const { activeTab } = this.state;

    const textSet = activeTab === "left"
      ? [{ heading: "Define data", body: ["Data model", "Mock data"] }, 
          { heading: "Define data222", body: ["Data model", "Mock data"] }, 
          { heading: "Define data222", body: ["Data model", "Mock data"] }]
      : [{ heading: "Define criteria", body: ["Inputs and outputs", "Way of interaction"] }, 
          { heading: "Define criteria2222", body: ["Inputs and outputs", "Way of interaction"] },
          { heading: "Define criteria2222", body: ["Inputs and outputs", "Way of interaction"] }];

    const iconSet = activeTab === "left"
      ? [[SqlIcon, ExcelIcon, CsvIcon], 
        [SqlIcon, ExcelIcon, CsvIcon], 
        [SqlIcon, ExcelIcon, CsvIcon]]
      : [[ApiIcon, FilesIcon, QueueIcon], 
        [ApiIcon, FilesIcon, QueueIcon], 
        [ApiIcon, FilesIcon, QueueIcon]];

    return (
      <div className="full-page-section second-section">
        <div className="button-back-container">
          <button className="button-back" onClick={onPrevious}>Back</button>
        </div>
        <div className="text-container">
          <h1 className="title">How does it work?</h1>
        </div>
        <div className="tabs">
          <Tab
            className={`tab ${activeTab === "left" ? "active" : ""}`}
            onClick={() => this.switchTab("left")}
            role="button"
            tabIndex={0}
            aria-pressed={activeTab === "left"}
          >
            For a client
          </Tab>
          <Tab2
            className={`tab2 ${activeTab === "right" ? "active" : ""}`}
            onClick={() => this.switchTab("right")}
            role="button"
            tabIndex={0}
            aria-pressed={activeTab === "right"}
          >
           For a freelancer
          </Tab2>
        </div>
        <div className="tab-content">
          <CardGridReviews className="custom-class" texts={textSet} icons={iconSet} />
        </div>
        <div className="button-next-container">
          <button className="button-back" onClick={onNext}>When?</button>
        </div>
      </div>
    );
  }
}

export default SecondPage;