import React, { useState } from "react";
import "./SwitchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="app__switching-tabs">
      <div className="app__switching-tab-items">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`app__switching-tab-item ${
              selectedTab === index ? "active" : ""
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="app__switching-tab-moving-bg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
