import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

function ContentDashboard4() {
    const pieChartData = [
        { name: 'Kategori 1', value: 40 },
        { name: 'Kategori 2', value: 30 },
        { name: 'Kategori 3', value: 20 },
        { name: 'Kategori 4', value: 10 },
    ];

    function getColorByIndex(index) {
        const colors = ['#8884d8', '#82ca9d', '#ffc658', '#D98484']; // Warna yang tersedia
        return colors[index % colors.length]; // Kembalikan warna sesuai dengan indeks
      }

    const flexItemStyle = {
        width: '100%',
        // height: '40%',
        backgroundColor: '#fff',
        color: 'black',
        textAlign: 'left',
        borderRadius: '8px',
        display: 'flex', // Tambah display: flex
        alignItems: 'center',
        padding: '25px', // Tambah padding
        margin: '10px',
        };
    
    return(
        <div style={{ marginLeft:'11px' }}>
            <div style={{ display:'flex', flexDirection:'row' }}>
                {/* konten 1 */}
                <div style={{ width:'30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection:'row' }}>
                            Saldo Keseluruhan
                            <div style={{ color: '#0F7AAE', fontSize: '18px', marginTop:'5px' }}>Rp. 5000</div>
                        </div>
                    </div>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection:'row' }}>
                            Total Pemasukan
                            <div style={{ color: '#20BF6B', fontSize: '18px', marginTop:'5px' }}>Rp. 5000</div>
                            <div style={{ color: '#A9A8A8', fontSize: '12px', }}>0% dari Data Keseluruhan</div>
                        </div>
                    </div>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection:'row' }}>
                            Total Pengeluaran
                            <div style={{ color: '#EB3B5A', fontSize: '18px', marginTop:'5px' }}>Rp. 5000</div>
                            <div style={{ color: '#A9A8A8', fontSize: '12px', }}>0% dari Data Keseluruhan</div>
                        </div>
                    </div>
                </div>

                {/* Konten 2 */}
                <div style={{ marginLeft:'22px', width: '70%', height: '365px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', margin: '10px', }}>
                    <div style={{ fontSize:'15px', fontWeight:'bold' }}>
                        Pembelian
                    </div>
                    <div>
                    <PieChart width={300} height={300}>
                        <Pie
                            dataKey="value"
                            data={pieChartData}
                            cx={150}
                            cy={150}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getColorByIndex(index)} />
                            ))}
                        </Pie>
                    </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentDashboard4;