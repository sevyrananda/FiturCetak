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
    const [value1, setValue1] = useState(0);

    const handleNumberClick = (number) => {
        if (number === 'C') {
            // Clear the value
            setValue1(0);
        } else {
            // Append the number to the value
            setValue1((prevValue) => prevValue * 10 + number);
        }
    };

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Kembali" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Bayar" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
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
            stock: '5',
            limit: '3'
        },
        {
            id: 2,
            image: 'https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?w=740&t=st=1700457859~exp=1700458459~hmac=e6ce8121d3d40c472ff9ccb5eecdf9f9827d2a001998ec09cd643e12e9f6df9d',
            name: 'Es Teh Manis',
            price: 'Rp. 5000,-',
            type: 'Minuman',
            stock: '5',
            limit: '3'
        },
        {
            id: 3,
            image: 'https://img.freepik.com/free-photo/traditional-nasi-lemak-meal-composition_23-2149056822.jpg?w=1060&t=st=1700704874~exp=1700705474~hmac=ea748d9ec84a3ddd94a84381c4b88b8ccd69b17ad40096497fad2004b9d877ec',
            name: 'Nasi Lemak',
            price: 'Rp. 20000,-',
            type: 'Cemilan',
            stock: '5',
            limit: '3'
        },
        {
            id: 4,
            image: 'https://img.freepik.com/free-photo/pork-green-curry-white-bowl-with-spices-black-cement-background_1150-35196.jpg?w=1060&t=st=1700704903~exp=1700705503~hmac=ceb287e48a07c0a6c9e13bb704890fed6d5b180c6546b8f29682e0f3d16bdfe6',
            name: 'Es Teh Manis',
            price: 'Rp. 5000,-',
            type: 'Minuman',
            stock: '5',
            limit: '3'
        },
        {
            id: 5,
            image: 'https://img.freepik.com/premium-photo/nasi-lemak-malay-fragrant-rice-dish-cooked-coconut-milk-pandan-leaf-served-with-various-sid_431906-4547.jpg?w=1060',
            name: 'Penyetan Ayam',
            price: 'Rp. 2000000,-',
            type: 'Makanan',
            stock: '5',
            limit: '3'
        },
        {
            id: 6,
            image: 'https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?w=740&t=st=1700457859~exp=1700458459~hmac=e6ce8121d3d40c472ff9ccb5eecdf9f9827d2a001998ec09cd643e12e9f6df9d',
            name: 'Es Teh Tawar',
            price: 'Rp. 5000,-',
            type: 'apa',
            stock: '5',
            limit: '3'
        },
        {
            id: 7,
            image: 'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?w=1060&t=st=1700457056~exp=1700457656~hmac=8f5fd24d606ae6fae2548ad1199f79d7bc92bdf5b1d9626ca6160fae04906f29',
            name: 'Nasi Goreng',
            price: 'Rp. 20000,-',
            type: 'Pencuci Mulut',
            stock: '5',
            limit: '3'
        },
        {
            id: 8,
            image: 'https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?w=740&t=st=1700457859~exp=1700458459~hmac=e6ce8121d3d40c472ff9ccb5eecdf9f9827d2a001998ec09cd643e12e9f6df9d',
            name: 'Black Tea Ice',
            price: 'Rp. 5000,-',
            type: 'Minuman',
            stock: '5',
            limit: '3'
        },
        {
            id: 9,
            image: 'https://img.freepik.com/free-photo/ice-falling-brown-drink_1194-1074.jpg?w=740&t=st=1700457859~exp=1700458459~hmac=e6ce8121d3d40c472ff9ccb5eecdf9f9827d2a001998ec09cd643e12e9f6df9d',
            name: 'Es Teh Manis',
            price: 'Rp. 5000,-',
            type: 'apaan tuh',
            stock: '5',
            limit: '3'
        }
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
                <div style={MenuStyle} id="MenuChart">
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        <i className="pi pi-inbox" style={{ color: 'green', marginRight: '0.5rem' }} />
                        Menu
                    </div>
                    <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', marginBottom: '20px', opacity: 0.1 }} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2px' }}>
                        <Dropdown value={selectedType} onChange={handleTypeChange} options={dropdownOptions} placeholder="Pilih Kategori" className="md:w-14rem ml-4" />
                        <div className="p-inputgroup md:w-20rem ml-4 mr-4">
                            <InputText placeholder="Cari Menu" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
                        <i className="pi pi-shopping-cart" style={{ color: 'green', marginRight: '0.5rem' }}></i>Keranjang
                    </div>
                    <div style={{ borderBottom: '1px solid black', width: '100%', marginTop: '10px', opacity: 0.1 }}></div>
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

                        {/* Pop Up Checkout */}
                        <Dialog header="Items in Cart" visible={visible} style={{ width: '90vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                            {/* card1 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="card" style={{ flex: '1', height: '400px', overflowY: 'auto' }}>
                                    {cartData.map((item) => {
                                        const priceArray = item.price.split('Rp. ')[1].split(',-');
                                        const cleanedPrice = Number(priceArray[0].replace(/\./g, ''));

                                        return (
                                            <div key={item.id} style={{ marginBottom: '10px' }}>
                                                <h6>{item.name} </h6>
                                                <p>
                                                    {item.qty} X {item.price} Rp. {item.qty * cleanedPrice}
                                                </p>
                                            </div>
                                        );
                                    })}

                                    <br />
                                    <h6>
                                        Total Harga Keseluruhan: Rp.{' '}
                                        {cartData.reduce((total, item) => {
                                            const priceArray = item.price.split('Rp. ')[1].split(',-');
                                            const cleanedPrice = Number(priceArray[0].replace(/\./g, ''));
                                            return total + item.qty * cleanedPrice;
                                        }, 0)}
                                    </h6>
                                    <div>
                                        <span className="p-float-label" style={{ marginRight: '5px', marginTop: '20px' }}>
                                            <InputTextarea id="description" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} rows={5} cols={30} style={{ width: '750px', height: '150px' }} />
                                            <label htmlFor="description">Add note here</label>
                                        </span>
                                    </div>
                                </div>

                                {/* card2 */}
                                <div className="card p-fluid" style={{ flex: '1', marginLeft: '10px', height: '400px' }}>
                                    <span className="p-float-label" style={{ marginRight: '5px' }}>
                                        <InputNumber inputId="currency-rupiah" value={value1} onValueChange={(e) => setvalue1(e.value)} mode="currency" currency="IDR" locale="id-ID" />
                                    </span>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', marginTop: '10px' }}>
                                        {[1, 2, 3, 0, 4, 5, 6, '00', 7, 8, 9, 'C'].map((number) => (
                                            <Button key={number} label={number.toString()} onClick={() => handleNumberClick(number)} style={{ marginBottom: '5px' }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataMenu;
