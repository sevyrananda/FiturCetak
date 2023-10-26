import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ContentDashboard5() {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Allow content to wrap to the next row
    };

    const PembelianStyle = {
        flex: '3', // Width ratio of 3
        minWidth: '200px', // Set a minimum width to prevent excessive narrowing
        height: '400px',
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Center items horizontally
        padding: '10px',
        margin: '10px',
    };

    const NeracaStyle = {
        flex: '1',
        minWidth: '200px',
        height: '30%',
        backgroundColor: '#fff',
        color: 'black',
        justifyContent: 'center',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Center items horizontally
        padding: '10px',
        margin: '10px',
    };

    const data = [
        { name: 'Jan', sales: 1000 },
        { name: 'Feb', sales: 500 },
        { name: 'Mar', sales: 100 },
        { name: 'Apr', sales: 400 },
        { name: 'May', sales: 435 },
        { name: 'June', sales: 987 },
        { name: 'July', sales: 456 },
        { name: 'Aug', sales: 870 },
        { name: 'Sept', sales: 1000 },
        { name: 'Oct', sales: 870 },
        { name: 'Nov', sales: 456 },
        { name: 'Dec', sales: 1000 },
    ];

    return (
        <div>
            <div style={containerStyle}>
                <div style={{ flexDirection:'row' }}>
                    <div style={NeracaStyle}>
                        Saldo Keseluruhan
                        <div style={{ color: '#0F7AAE', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                    </div>
                    <div style={NeracaStyle}>
                        Total Pemasukan
                        <div style={{ color: '#20BF6B', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                        <div style={{ color: '#A9A8A8', fontSize: '12px' }}>0% dari Data Keseluruhan</div>
                    </div>
                    <div style={NeracaStyle}>
                        Total Pengeluaran
                        <div style={{ color: '#EB3B5A', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                        <div style={{ color: '#A9A8A8', fontSize: '12px' }}>0% dari Data Keseluruhan</div>
                    </div>
                </div>
                <div style={PembelianStyle}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        Pembelian
                    </div>
                    <div style={{ alignItems: 'center', marginTop: '5%' }}>
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
            </div>
        </div>
    );
}

export default ContentDashboard5;
