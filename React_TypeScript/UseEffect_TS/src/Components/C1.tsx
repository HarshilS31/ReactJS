import { useState, useEffect } from 'react';

// Fixed typo: 'categorey' -> 'category'
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string; 
    thumbnail: string;
    images: string[];
};

const C1 = () => {
    // Added a loading and error state for better UX
    const [data, setData] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fixed: Added 'await' here
                const resp = await fetch('https://dummyjson.com/products/1'); 
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                const res = await resp.json();
                setData(res);
            } catch (error) {
                console.error("Some error occurred:", error);
                setError("Data could not be fetched");
            } finally {
                setLoading(false);
            }
        }

        fetchData(); // Fixed: Called inside the useEffect block
    }, []); // Empty dependency array ensures this runs only once on mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {data ? (
                <div>
                    <h3>{data.title}</h3>
                    <p>ID: {data.id}</p>
                    <p>Price: ${data.price}</p>
                </div>
            ) : (
                <p>No product data found.</p>
            )}
        </div>
    );
};

export default C1;