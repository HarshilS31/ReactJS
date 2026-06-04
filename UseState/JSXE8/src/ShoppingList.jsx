import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    // Tip: Starting with an empty string makes handling input fields smoother
    const [quantity, setQuantity] = useState(''); 

    function handleSubmit(e) {
        // 1. Prevent the browser from reloading the page
        e.preventDefault(); 
        
        if (!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity, 10)
        };

        setItems(prevItems => [...prevItems, newItem]);
        
        // Resetting form fields
        setName('');
        setQuantity('');
    }

    return (
        <>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter item name here!" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Enter Quantity here!" 
                    // 2. Fixed: Changed value from 'name' to 'quantity'
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                />

                <button type="submit">Add Item to Cart</button>
            </form>
            
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ShoppingList;