import React from 'react';
import ContentDashboard1 from './ContentDashboard1';
import ContentDashboard2 from './ContentDashboard2';
import ContentDashboard3 from './ContentDashboard3';
import ContentDashboard4 from './ContentDashboard4';
import ContentDashboard5 from './ContentDashboard5';

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ContentDashboard1 />
      <ContentDashboard2 />
      <ContentDashboard3 />
      {/* <ContentDashboard4 /> */}
      <ContentDashboard5 />
    </div>
  );
}

export default App;
