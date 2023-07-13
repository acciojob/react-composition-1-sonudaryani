import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li onClick={() => handleClick(index)}>{tab.title}</li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
