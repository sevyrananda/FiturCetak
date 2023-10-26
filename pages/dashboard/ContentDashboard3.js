import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ContentDashboard3() {
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 5 },
    { name: 'C', value: 15 },
    { name: 'D', value: 25 },
    { name: 'E', value: 45 },
    { name: 'F', value: 5 },
    { name: 'G', value: 15 },
    { name: 'H', value: 10 },
  ];

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '100%', minWidth: '200px', flex: '1', height: '300px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', margin: '10px' }}>
          <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
            Laporan Penjualan
          </div>
          <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity: 0.1 }}></div>
          <div style={{ marginTop: '5%' }}>
            <BarChart width={500} height={230} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#D98484" />
            </BarChart>
          </div>
        </div>
        <div style={{ width: '100%', minWidth: '200px', flex: '1', height: '300px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', margin: '10px' }}>
          <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
            Laporan Neraca
          </div>
          <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity: 0.1 }}></div>
          <div style={{ marginTop: '5%' }}>
            <BarChart width={500} height={230} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard3;
