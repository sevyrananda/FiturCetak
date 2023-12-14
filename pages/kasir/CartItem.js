import React from 'react';
import { Button } from 'primereact/button';

const cartItemStyles = {
    container: {
        // display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #ccc',
        padding: '10px',
        boxSizing: 'border-box',
        minWidth: '280px',
        display:'flex'
    },
    info: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        // fontSize: '16px',
        fontWeight: 'bold',
    },
    price: {
        // fontSize: '14px',
        color: '#777',
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0',
    },
    quantity: {
        margin: '0 10px',
        // fontSize: '14px',
    },
};

const ButtonQtyStle = {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    // borderRadius: '5px 0px 0px 5px',
    // backgroundColor: '#22C55E',
    transition: 'background-color 0.3s, color 0.3s',

    plus:{
        borderRadius: '5px 0px 0px 5px',
        backgroundColor: '#22C55E',
        color: '#fff',
        border: 'none',
        padding: '4px 9px',
        fontSize: '16px',
    },

    minus:{
        borderRadius: '0px 5px 5px 0px',
        backgroundColor: '#F59E0B',
        color: '#fff',
        border: 'none',
        padding: '4px 9px',
        fontSize: '16px',
    },

    delete:{
        borderRadius: '5px 5px 5px 5px',
        backgroundColor: '#EF4444',
        color: '#fff',
        border: 'none',
        padding: '4px 9px',
        fontSize: '16px',
    }
}

function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div style={cartItemStyles.container}>
            <div style={cartItemStyles.info}>
                <div style={cartItemStyles.name}>{item.name}</div>
                <div style={cartItemStyles.price}>{item.price}</div>
            </div>
            <div style={cartItemStyles.actions}>
                <Button
                    icon="pi pi-plus"
                    className="p-button-success p-button-sm"
                    style={ButtonQtyStle.plus}
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                />
                {/* <button 
                    style={ButtonQtyStle.plus}
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                >
                    +
                </button> */}
                <span style={cartItemStyles.quantity}>Qty: {item.qty}</span>
                <Button
                    icon="pi pi-minus"
                    className="p-button-warning p-button-sm"
                    style={ButtonQtyStle.minus}
                    onClick={() => {
                        if (item.qty > 1) {
                            updateQuantity(item.id, item.qty - 1);
                        }
                        else if (item.qty === 1) {
                            removeFromCart(item.id);
                        }
                    }}
                />
                {/* <button 
                    style={ButtonQtyStle.minus}
                    onClick={() => {
                        if (item.qty > 1) {
                            updateQuantity(item.id, item.qty - 1);
                        }
                        else if (item.qty === 1) {
                            removeFromCart(item.id);
                        }
                    }}
                >
                    -
                </button> */}

                <Button
                    icon="pi pi-trash"
                    className="p-button-danger p-button-sm"
                    style={ButtonQtyStle.delete}
                    onClick={() => removeFromCart(item.id)}
                />

                {/* <button 
                    style={ButtonQtyStle.delete}
                    onClick={() => removeFromCart(item.id)}
                >
                    text
                </button> */}
            </div>
        </div>
    );
}

export default CartItem;
