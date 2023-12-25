import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import CartItem from './CartItem'; // Import komponen CartItem

function DataMenu() {
    const [textareaValue, setTextareaValue] = useState('');
    const [value1, setValue1] = useState(null);
    const [changeAmount, setChangeAmount] = useState(0);

    const handleInputChange = (e) => {
        // Handle changes in the input field
        setValue1(e.value);
    };
    
    const handleNumberClick = (number) => {
        if (number === 'C') {
            // Clear the payment value
            setValue1(0);
            setChangeAmount(0);
        } else if (number === '00') {
            // Handle '00' case
            setValue1((prevValue) => prevValue * 100);
        } else {
            // Append the number to the payment value
            setValue1((prevValue) => prevValue * 10 + number);
        }
    };

    // const totalHarga = cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    // const kembalian = value1 - totalHarga;

    const handleClickPrint = () => {
        const printWindow = window.open('', '_blank');
    
        if (printWindow) {
            printWindow.document.write('<html><body>');
            
            // Ganti nilai width dan size sesuai kebutuhan
            printWindow.document.write('<html style="width: 200px;"><body>'); 
            printWindow.document.write('<html style="size: 200px;"><body>');

            // Tambahkan konten order di sini
            printWindow.document.write('<div style="font-weight: bold; font-size: 18px; text-align:center">Order</div><hr/>');
            printWindow.document.write('<div style="border-bottom: 1px solid black; width: 100%; margin-bottom: 8px; opacity: 0.1;"></div>');

            cartData.forEach((item) => {
                const priceArray = item.price.split('Rp. ')[1].split(',-');
                const cleanedPrice = Number(priceArray[0].replace(/\./g, ''));

                printWindow.document.write('<div style="margin-bottom: 10px; display: flex; flex-direction: row; justify-content: space-between;">');
                printWindow.document.write('<div>');
                printWindow.document.write(`<div style="font-weight: normal; font-size: 14px;">${item.name}</div>`);
                printWindow.document.write(`<div style="font-weight: lighter; font-size: 12px;">${item.qty} x ${item.price}</div>`);
                printWindow.document.write('</div>');
                printWindow.document.write(`<div style="font-size: 14px;">Rp. ${item.qty * cleanedPrice},00</div>`);
                printWindow.document.write('</div>');
            });

            printWindow.document.write('<div style="font-size: 14px; margin-bottom: 5px; margin-top: 20px; font-weight: bold; display: flex; flex-direction: row; justify-content: space-between;">');
            printWindow.document.write('<div>Total:</div>');
            printWindow.document.write(`<div>${cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>`);
            printWindow.document.write('</div>');

            printWindow.document.write('<div style="font-size: 14px; margin-bottom: 5px; font-weight: bold; display: flex; flex-direction: row; justify-content: space-between;">');
            printWindow.document.write('<div>Cash:</div>');
            printWindow.document.write(`<div>${value1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>`);
            printWindow.document.write('</div>');

            printWindow.document.write('<div style="font-size: 14px; margin-bottom: 15px; font-weight: bold; display: flex; flex-direction: row; justify-content: space-between;">');
            printWindow.document.write('<div>Kembali:</div>');
            printWindow.document.write(`<div>${(parseFloat(value1) - cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR'})}</div>`);
            printWindow.document.write('</div>');

            printWindow.document.write('<div>');
            printWindow.document.write('<span class="p-float-label" style="font-size: 14px; width: 100%;">');
            printWindow.document.write('<label for="description">Note:</label><br/>');
            printWindow.document.write(`${textareaValue}`);
            printWindow.document.write('</span>');
            printWindow.document.write('</div>');

            // Akhir konten order

            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    };

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Kembali" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Bayar" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
            <Button label="Cetak" icon="pi pi-print" onClick={handleClickPrint} autoFocus />
            <Button label="Print PDF" icon="pi pi-print" onClick={() => setVisible(false)} autoFocus />
            {/* <Button label="Cetak Slip" icon="pi pi-print" onClick={() => setVisible(false)} autoFocus /> */}
        </div>
    ); // <Dialog/>

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap' // Allow content to wrap to the next row
    };

    const MenuStyle = {
        flex: '3', // Width ratio of 3
        minWidth: '300px', // Set a minimum width to prevent excessive narrowing
        width: '100%',
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'flex-start', // Center items horizontally
        padding: '10px',
        margin: '10px'
    };

    const KeranjangStyle = {
        flex: '1', // Width ratio of 1
        minWidth: '300px', // Set a minimum width to prevent excessive narrowing
        width: '100%',
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Center items horizontally
        padding: '10px',
        margin: '10px'
    };

    const ContentDashboard1Style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: '15px'
    };

    const flexItemStyle = {
        width: '100%',
        flex: '1', // Allow items to grow and shrink equally
        backgroundColor: '#fff',
        color: 'black',
        textAlign: 'left',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        margin: '10px',
        minWidth: '200px',
        boxShadow: '0 0 3.5px rgba(0, 64, 17, 0.5)'
    };

    // Data dummy
    const dummyData = [
        {
        id: 1,
        image: 'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?w=1060&t=st=1700457056~exp=1700457656~hmac=8f5fd24d606ae6fae2548ad1199f79d7bc92bdf5b1d9626ca6160fae04906f29',
        name: 'Nasi Goreng',
        price: 'Rp. 20000,-',
        type: 'Makanan',
        stock: 5,
        limit: 3,
        },
        {
        id: 2,
        image: 'https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?w=740&t=st=1703229515~exp=1703230115~hmac=7e7d2821083482a19b2ef5962a8923e21a6f8a6acb71abbf76bb6e339ce5b6a6',
        name: 'Es Teh',
        price: 'Rp. 10000,-',
        type: 'Minuman',
        stock: 8,
        limit: 2,
        },
        {
        id: 3,
        image: 'https://img.freepik.com/free-photo/potato-chips-isolated-white_93675-129934.jpg?w=1060&t=st=1703229564~exp=1703230164~hmac=713399e108099b20d4b21151e5190ce316abcbe22e8415f65fbb13899e0f3ae8',
        name: 'Keripik Singkong',
        price: 'Rp. 15000,-',
        type: 'Camilan',
        stock: 10,
        limit: 4,
        },
        {
        id: 4,
        image: 'https://img.freepik.com/free-photo/papaya-salad-ingredients-include-papaya_1150-24806.jpg?w=1060&t=st=1703229621~exp=1703230221~hmac=5f30f722a96bcdd42f41de92dd624810c559f9e8d6be865f9eed31d48655af31',
        name: 'Sayuran Segar',
        price: 'Rp. 25000,-',
        type: 'Makanan',
        stock: 15,
        limit: 4,
        },
        {
        id: 5,
        image: 'https://img.freepik.com/free-photo/top-view-different-cookies-dark-surface_176474-540.jpg?w=1060&t=st=1703229666~exp=1703230266~hmac=80a7473d1719c6a21765feaef3cc540b7783c692ec1f1d118063a8036a192af2',
        name: 'Kue Coklat Chip',
        price: 'Rp. 30000,-',
        type: 'Camilan',
        stock: 12,
        limit: 5,
        },
        {
        id: 6,
        image: 'https://img.freepik.com/free-photo/glass-foamy-cold-coffee-with-biscuits-wooden-plate_114579-90906.jpg?size=626&ext=jpg&ga=GA1.1.384662822.1694396658&semt=ais',
        name: 'Es Kopi Susu',
        price: 'Rp. 15000,-',
        type: 'Minuman',
        stock: 15,
        limit: 4,
        },
        {
        id: 7,
        image: 'https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?w=740&t=st=1703229737~exp=1703230337~hmac=2999ea52cc7b81ccc2feb31de949639069b89dd9fbbfe8689785cc8c52b1ee88',
        name: 'Pizza Sapi',
        price: 'Rp. 50000,-',
        type: 'Makanan',
        stock: 8,
        limit: 2,
        },
        {
        id: 8,
        image: 'https://img.freepik.com/free-photo/delicious-vanilla-ice-cream-cones-laying-plate_23-2148134890.jpg?w=1380&t=st=1703229785~exp=1703230385~hmac=4b4ce579ff3e3e0676c7724bfd3326ef9217a6ef3cc14674038f9206d121ab82',
        name: 'Es Krim Vanilla',
        price: 'Rp. 25000,-',
        type: 'Pencuci Mulut',
        stock: 10,
        limit: 3,
        },
        {
        id: 9,
        image: 'https://img.freepik.com/free-photo/delicious-leafy-vegetable-salad-white-plate-with-slices-bell-peppers-top_181624-19107.jpg?w=1060&t=st=1703229827~exp=1703230427~hmac=8d2ba5f147030a9c75b6cd78dd5ee7ef5c8e3a75ab621554ad3702053a67eb76',
        name: 'Salad Sayur Segar',
        price: 'Rp. 35000,-',
        type: 'Makanan',
        stock: 10,
        limit: 3,
        },
        {
        id: 10,
        image: 'https://img.freepik.com/free-photo/glass-red-tea_23-2148170684.jpg?w=1060&t=st=1703231937~exp=1703232537~hmac=ac3731b99a35789407c7610d68ce5b92934fd9d34c234534e716dfb3f7095211',
        name: 'Teh Rosella',
        price: 'Rp. 40000,-',
        type: 'Minuman',
        stock: 6,
        limit: 2,
        },
        {
        id: 11,
        image: 'https://img.freepik.com/free-photo/delicious-pakistani-food-with-tomato-sauce_23-2148825164.jpg?w=1060&t=st=1703229932~exp=1703230532~hmac=61c564d5632e1eb3b595a553b96fa92a2e3109e2505fda3ae635a58ef8e2600d',
        name: 'Pani Puri',
        price: 'Rp. 18000,-',
        type: 'Camilan',
        stock: 15,
        limit: 5,
        },
        {
        id: 12,
        image: 'https://img.freepik.com/free-photo/chocolate-walnut-muffins-with-coffee-cup-with-walnuts-dark-surface_114579-5336.jpg?w=1060&t=st=1703229962~exp=1703230562~hmac=415bfd87c19a25fc99af1b2c4b5f0cdcc6eeb03392b101cbd1cc8957c79d07c5',
        name: 'Kue Cokelat Hazelnut',
        price: 'Rp. 28000,-',
        type: 'Pencuci Mulut',
        stock: 8,
        limit: 3,
        },
        {
        id: 13,
        image: 'https://img.freepik.com/free-photo/close-up-view-brown-coffee-seeds-with-coffee-dark_179666-32787.jpg?t=st=1703229996~exp=1703230596~hmac=486fb257fb912913f1de8273bab180156689a15f739af6a2873cf6b81338aab2',
        name: 'Kopi Hitam',
        price: 'Rp. 12000,-',
        type: 'Minuman',
        stock: 20,
        limit: 4,
        },
        {
        id: 14,
        image: 'https://img.freepik.com/free-photo/mixed-sushi-set-japanese-food_1339-3610.jpg?w=1380&t=st=1703230028~exp=1703230628~hmac=5f2668dac428a5a6fc6af22e2b5bc242fca7b5053db3db7dfb6c4a418f080c85',
        name: 'Sushi Roll',
        price: 'Rp. 45000,-',
        type: 'Makanan',
        stock: 7,
        limit: 2,
        },
        {
        id: 15,
        image: 'https://img.freepik.com/free-photo/traditional-mexican-tacos-with-meat-vegetables-isolated-white-background_123827-19907.jpg?w=1060&t=st=1703230050~exp=1703230650~hmac=eca04bcf5b1bb90d8b9204b87c6d9379ff4bfc60c9f9239741bf2556b8c3229b',
        name: 'Taco',
        price: 'Rp. 22000,-',
        type: 'Makanan',
        stock: 12,
        limit: 3,
        },
        {
        id: 16,
        image: 'https://img.freepik.com/free-photo/iced-pink-cocktail-fresh-strawberries_144627-1125.jpg?w=1060&t=st=1703230083~exp=1703230683~hmac=c8beccc1c0c3c3825f8309e2d07d9097378550e5b5c218767c9f8800f4a6dc98',
        name: 'Strawberry Milkshake',
        price: 'Rp. 15000,-',
        type: 'Minuman',
        stock: 18,
        limit: 4,
        },
        {
        id: 17,
        image: 'https://img.freepik.com/free-photo/side-view-different-types-cheese-white-plate-table_140725-11501.jpg?w=900&t=st=1703230122~exp=1703230722~hmac=13eb92a0a8677f517cbb965856714d9980c0678714086714b645ee6223208527',
        name: 'Cheese Platter',
        price: 'Rp. 50000,-',
        type: 'Camilan',
        stock: 10,
        limit: 5,
        },
        {
        id: 18,
        image: 'https://img.freepik.com/free-photo/sweet-homemade-apple-cake-with-cinnamon_2831-714.jpg?w=1060&t=st=1703230155~exp=1703230755~hmac=7212be717ab68da3a187866747ffe1d48dfad6f2b9bb10b3c3f2cda971f9e861',
        name: 'Pie Apel',
        price: 'Rp. 32000,-',
        type: 'Pencuci Mulut',
        stock: 9,
        limit: 3,
        },
        {
        id: 19,
        image: 'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=1060&t=st=1703230178~exp=1703230778~hmac=35cfcb44dadf543971a35a3a33a89d7471ea2bb3720d7f376e53c1b49308eade',
        name: 'Ayam Tandoori',
        price: 'Rp. 38000,-',
        type: 'Makanan',
        stock: 5,
        limit: 2,
        },
        {
        id: 20,
        image: 'https://img.freepik.com/free-photo/egg-roll-fried-spring-rolls-white-plate-thai-food_1150-21488.jpg?size=626&ext=jpg&ga=GA1.2.384662822.1694396658&semt=ais',
        name: 'Lumpia Segar',
        price: 'Rp. 20000,-',
        type: 'Camilan',
        stock: 14,
        limit: 4,
        },
    ];

    // Functional fitur dropdown -----------------------------------------------------------

    const [uniqueTypes, setUniqueTypes] = useState([]);

    useEffect(() => {
        // 1. Dapatkan semua nilai unik dari atribut "type"
        // sesuaikan value dropdownnya~
        const types = ['Semua', ...new Set(dummyData.filter((item) => ['Makanan', 'Minuman', 'Pencuci Mulut', 'Cemilan'].includes(item.type)).map((item) => item.type))];
        setUniqueTypes(types);
    }, []); // Efek ini hanya dijalankan sekali setelah render pertama

    const [selectedType, setSelectedType] = useState(null);

    const handleTypeChange = (e) => {
        // 2. Update state saat nilai dropdown berubah
        setSelectedType(e.value === 'Semua' ? null : e.value);
    };

    // Menambahkan opsi "Semua" di dalam dropdown
    const dropdownOptions = uniqueTypes.map((type) => ({ label: type, value: type }));

    // menyesuaikan warna badge
    // pilihan default: success, info, warning, danger, primary, secondary. bisa pake kode hex.
    const getBadgeSeverity = (type) => {
        if (type === 'Makanan') {
            return 'warning';
        } else if (type === 'Minuman') {
            return 'danger';
        } else if (type === 'Pencuci Mulut' || type === 'Cemilan') {
            return 'info'; // Atur warna sesuai kebutuhan
        } else {
            return 'primary'; // Atur warna default jika jenis tidak dikenali
        }
    };

    // Functional fitur search -----------------------------------------------------------

    const [searchQuery, setSearchQuery] = useState('');
    const [dataDifilter, setDataDifilter] = useState(dummyData);

    const handleSearch = () => {
        const dataDifilter = dummyData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setDataDifilter(dataDifilter);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          // Menjalankan fungsi pencarian ketika tombol "Enter" ditekan
            handleSearch();
        }
    };

    // Functional fitur keranjang -----------------------------------------------------------

    const [cartData, setCartData] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // Item already exists in the cart, update the quantity
            const updatedCartData = cartData.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem));
            setCartData(updatedCartData);
        } else {
            // Item doesn't exist in the cart, add it with quantity 1
            setCartData([...cartData, { ...item, qty: 1 }]);
        }
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartData = cartData.map((item) => (item.id === itemId ? { ...item, qty: newQuantity } : item));
        setCartData(updatedCartData);
    };

    const removeFromCart = (itemId) => {
        const updatedCartData = cartData.filter((item) => item.id !== itemId);
        setCartData(updatedCartData);
    };

    return (
        <div>
            <div style={containerStyle}>
                {/* Pop Up Checkout */}
                <Dialog header="" visible={visible} style={{ width: '90vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {/* card1 */}
                        <div className="card" style={{ flex: '1', height: '400px', overflowY: 'auto', minWidth:'400px' }}>
                            <div style={{ fontWeight:'bold', fontSize:'18px' }}>Order</div>
                            <div style={{ borderBottom: '1px solid black', width: '100%', marginBottom: '8px', opacity: 0.1 }}></div>
                            {cartData.map((item) => {
                                const priceArray = item.price.split('Rp. ')[1].split(',-');
                                const cleanedPrice = Number(priceArray[0].replace(/\./g, ''));

                                return (
                                    <div key={item.id} style={{ marginBottom: '10px', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                                        <div>
                                            <div style={{ fontWeight:'normal' }}>{item.name} </div>
                                            <div style={{ fontWeight:'lighter', fontSize:'13px' }}>
                                                {item.qty} x {item.price} 
                                            </div>
                                        </div>
                                        <div>
                                            Rp. {item.qty * cleanedPrice},00
                                        </div>
                                    </div>
                                );
                            })}

                            <div style={{ marginBottom:'5px', marginTop:'20px', fontWeight:'bold', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                                <div>Total Harga Keseluruhan:</div> 
                                <div>{cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                            </div>
                            <div style={{ marginBottom:'5px', fontWeight:'bold', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                                <div>Cash:</div> 
                                <div>{value1 !== null ? value1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : ''}</div>
                            </div>
                            <div style={{ marginBottom:'30px', fontWeight:'bold', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                                <div>Kembali:</div> 
                                <div>
                                    {(parseFloat(value1) - cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR'})}
                                </div>
                            </div>
                            
                            <div>
                            <span className="p-float-label" style={{ width: '100%' }}>
                                <InputTextarea
                                    id="description"
                                    value={textareaValue}
                                    onChange={(e) => setTextareaValue(e.target.value)}
                                    rows={5}
                                    cols={30}
                                    style={{ height: '150px', width: '100%' }}
                                />
                                <label htmlFor="description">Add note here</label>
                            </span>
                            </div>
                        </div>

                        {/* card2 */}
                        <div className="card p-fluid" style={{ flex: '1', marginLeft: '10px', height: '400px', minWidth:'400px' }}>
                            {/* <div style={{ fontWeight:'bold', fontSize:'18px' }}>Jumlah yang Harus Dibayar</div> */}
                            <div>
                                <div style={{ fontWeight:'bold', fontSize:'18px' }}>Payable Amount</div>
                                <div style={{ fontWeight:'bold', fontSize:'22px', color:'#22c55e' }}>{cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
                                <div style={{ borderBottom: '1px solid black', width: '100%', margin: '8px 0px 18px 0px', opacity: 0.1 }}></div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px', textAlign: 'center', marginBottom: '5px' }}>Cash Payment</div>
                                <span className="p-float-label" style={{ marginRight: '5px' }}>
                                    <InputNumber
                                    inputId="currency-rupiah"
                                    value={value1}
                                    onValueChange={handleInputChange}
                                    mode="currency"
                                    currency="IDR"
                                    locale="id-ID"
                                    inputMode="numeric"
                                    />
                                </span>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', marginTop: '10px' }}>
                                    {[1, 2, 3, 0, 4, 5, 6, '00', 7, 8, 9, 'C'].map((number) => (
                                    <Button key={number} label={number.toString()} onClick={() => handleNumberClick(number)} style={{ marginBottom: '5px' }} />
                                    ))}
                                </div>

                                <div style={{ marginBottom: '5px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div>Cash:</div>
                                    <div>{value1 !== null ? value1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : ''}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <div style={MenuStyle} id="MenuChart">
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        <i className="pi pi-inbox" style={{ color: 'green', marginRight: '0.5rem' }} />
                        Menu
                    </div>
                    <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', marginBottom: '20px', opacity: 0.1 }} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2px' }}>
                        <Dropdown value={selectedType} onChange={handleTypeChange} options={dropdownOptions} placeholder="Pilih Kategori" className="md:w-14rem ml-4" />
                        <div className="p-inputgroup md:w-20rem ml-4 mr-4">
                            <InputText 
                                placeholder="Cari Menu" 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                onKeyDown={handleKeyDown}
                            />
                            <Button icon="pi pi-search" className="p-button-warning" onClick={handleSearch} />
                        </div>
                    </div>
                    {/* <div style={{ alignItems: 'center', width: '100%', height: 'calc(100% - 40px)' }}> */}
                    <div style={ContentDashboard1Style}>
                        {dataDifilter
                            .filter((item) => selectedType === null || selectedType === 'Semua' || item.type === selectedType)
                            .map((item) => (
                                <div style={flexItemStyle} key={item.id}>
                                    <img src={item.image} alt="Gambar Menu" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                    <Badge value={item.type} severity={getBadgeSeverity(item.type)} style={{ marginTop: '10px', width: 'fit-content', marginLeft: '5px', opacity: '60%' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
                                        <div style={{ fontSize: '100%', fontWeight: 'bold' }}>{item.name}</div>
                                        <div style={{ color: '#20BF6B', fontSize: '100%' }}>{item.price}</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <p className="mt-1">
                                            Stock: {item.stock} / Limit: {item.limit}
                                        </p>
                                        <Button
                                            icon="pi pi-plus"
                                            className="p-button-success p-button-sm"
                                            onClick={() => addToCart(item)} // Tambahkan baris ini
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* </div> */}
                </div>

                <div style={KeranjangStyle}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        <i className="pi pi-shopping-cart" style={{ color: 'green', marginRight: '0.5rem' }} />
                        Keranjang
                    </div>
                    <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', marginBottom: '9px', opacity: 0.1 }} />
                    <div className="p-field flex-row">
                        {cartData.map((item) => (
                            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                        ))}

                        {/* Menampilkan total harga */}
                        <div style={{ marginTop: '25px', fontSize: '100%', fontWeight: 'bold' }}>
                            Total: {cartData.reduce((total, item) => total + item.qty * parseFloat(item.price.substring(4)), 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </div>

                        {/* Tombol untuk checkout, implementasinya bisa disesuaikan dengan kebutuhan */}
                        <Button label="Checkout" className="p-button-success" style={{ marginTop: '10px' }} onClick={() => setVisible(true)} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataMenu;
