import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ContentDashboard2() {
  const containerStyle = {
    display: 'flex', // Menggunakan flex untuk menyusun elemen secara horizontal
    // justifyContent: 'center', // Untuk meletakkan elemen di tengah
  };

  const PenjualanStyle = {
    width: '67.3%',
    height: '400px',
    backgroundColor: '#fff',
    color: 'black',
    textAlign: 'center',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    margin: '10px',
  };

  const NeracaStyle = {
    width: '32.7%',
    height: '400px',
    backgroundColor: '#fff',
    color: 'black',
    // textAlign: 'left',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    margin: '10px',
  };

  const data = [
    { name: 'Jan', sales: 1000 },
    { name: 'Feb', sales: 1500 },
    { name: 'Mar', sales: 0 },
    { name: 'Apr', sales: 90 },
    { name: 'May', sales: 1200 },
    { name: 'June', sales: 300 },
    { name: 'July', sales: 2000 },
    { name: 'Aug', sales: 50 },
    { name: 'Sep', sales: 6000 },
    { name: 'Oct', sales: 500 },
    { name: 'Nov', sales: 1200 },
    { name: 'Dec', sales: 12000 },
  ];

  return (
    <div>
      <div style={containerStyle}>
        <div style={PenjualanStyle}>
            <div style={{ fontSize:'15px', fontWeight:'bold' }}>
                Penjualan
            </div>
            <div style={{ alignItems:'center', marginTop:'5%' }}>                
                <LineChart width={700} height={320} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
        <div style={NeracaStyle}>
            <div style={{ fontSize:'15px', fontWeight:'bold' }}>
                Neraca
            </div>
            <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity:0.1 }}></div>
            <div style={{ marginTop:'5%', backgroundColor:'#E7F2F7', width:'100%', height:'30%', borderRadius:'30px' }}>
                <div style={{ padding:'25px' }}>
                    <i className="pi pi-fw pi-home" style={{ color:'#0F7AAE' }}></i> Asset
                    <div style={{ fontWeight:'bold', fontSize:'18px', color:'#0F7AAE' }}>
                        Rp. 0
                    </div>
                </div>
            </div>
            <div style={{ marginTop:'5%', backgroundColor:'#FEF8EC', width:'100%', height:'30%', borderRadius:'30px' }}>
                <div style={{ padding:'25px' }}>
                    <i className="pi pi-fw pi-home" style={{ color:'#F7B731' }}></i> Asset
                    <div style={{ fontWeight:'bold', fontSize:'18px', color:'#F7B731' }}>
                        Rp. 0
                    </div>
                </div>
            </div>
            <div style={{ marginTop:'5%', backgroundColor:'#F3ECF5', width:'100%', height:'30%', borderRadius:'30px' }}>
                <div style={{ padding:'25px' }}>
                    <i className="pi pi-fw pi-home" style={{ color:'#833294' }}></i> Asset
                    <div style={{ fontWeight:'bold', fontSize:'18px', color:'#833294' }}>
                        Rp. 0
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard2;
