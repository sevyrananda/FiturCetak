// CartItem.js
import React from 'react';
import { Button } from 'primereact/button';

function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div style={{ alignItems:'center' }}>
            {/* <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>
                                <Button
                                    icon="pi pi-plus"
                                    className="p-button-success p-button-sm"
                                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                                />
                                <Button
                                    icon="pi pi-minus"
                                    className="p-button-warning p-button-sm"
                                    onClick={() => {
                                        if (item.qty > 0) {
                                            updateQuantity(item.id, item.qty - 1);
                                        }
                                    }}
                                />
                                <Button
                                    icon="pi pi-trash"
                                    className="p-button-danger p-button-sm"
                                    onClick={() => removeFromCart(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}




            {item.name} | {item.price} |
            <Button icon="pi pi-plus" className="p-button-success p-button-sm" onClick={() => updateQuantity(item.id, item.qty + 1)} />
            Jml: {item.qty}
            <Button 
                icon="pi pi-minus"
                className="p-button-warning p-button-sm"
                onClick={() => {
                    if (item.qty > 0) {
                        updateQuantity(item.id, item.qty - 1);
                    }
                }}
            />|
            <Button icon="pi pi-trash" className="p-button-danger p-button-sm" onClick={() => removeFromCart(item.id)} />
        </div>
    );
}

export default CartItem;
