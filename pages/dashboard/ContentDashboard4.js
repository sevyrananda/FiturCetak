import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
// npm install --save chart.js react-chartjs-2
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { options } from '@fullcalendar/core/preact';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function ContentDashboard4() {
    
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets:[
            { 
                label: 'fdkjhg',
                data: [3,8,54,2,5,6],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        
    }
    
    
    
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
        backgroundColor: '#fff',
        color: 'black',
        textAlign: 'left',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        padding: '25px',
        margin: '10px',
    };

    return (
        // <div style={{ marginLeft: '11px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection: 'row' }}>
                            Saldo Keseluruhan
                            <div style={{ color: '#0F7AAE', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                        </div>
                    </div>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection: 'row' }}>
                            Total Pemasukan
                            <div style={{ color: '#20BF6B', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                            <div style={{ color: '#A9A8A8', fontSize: '12px' }}>0% dari Data Keseluruhan</div>
                        </div>
                    </div>
                    <div style={flexItemStyle}>
                        <div style={{ flexDirection: 'row' }}>
                            Total Pengeluaran
                            <div style={{ color: '#EB3B5A', fontSize: '18px', marginTop: '5px' }}>Rp. 5000,-</div>
                            <div style={{ color: '#A9A8A8', fontSize: '12px' }}>0% dari Data Keseluruhan</div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '22px', width: '70%', height: '365px', backgroundColor: '#fff', color: 'black', textAlign: 'center', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', margin: '10px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        Pembelian
                    </div>
                    <div>
                        <Bar
                            data = {data}
                            options = {options}
                        >

                        </Bar>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default ContentDashboard4;
