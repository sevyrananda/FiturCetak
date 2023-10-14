import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ContentDashboard3() {
    const data = [
        { name: 'A', value: 10 },
        { name: 'B', value: 15 },
        { name: 'C', value: 5 },
        { name: 'E', value: 59 },
        { name: 'F', value: 245 },
        { name: 'G', value: 5 },
        { name: 'H', value: 20 },
        { name: 'I', value: 32 },
        { name: 'J', value: 56 },
        { name: 'K', value: 89 },
        { name: 'L', value: 100 },
      ];

  return (
    <div>
      <div style={{ display:'flex' }}>
        <div style={{ width: '50%', height: '300px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', margin: '10px', }}>
            <div style={{ fontSize:'15px', fontWeight:'bold' }}>
                Laporan Penjualan
            </div>
            {/* <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity:0.1 }}></div> */}
            <div style={{ marginTop:'5%' }}>
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
        <div style={{ width: '50%', height: '300px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', margin: '10px', }}>
            <div style={{ fontSize:'15px', fontWeight:'bold' }}>
                Laporan Neraca
            </div>
            {/* <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity:0.1 }}></div> */}
            <div style={{ marginTop:'5%' }}>
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
