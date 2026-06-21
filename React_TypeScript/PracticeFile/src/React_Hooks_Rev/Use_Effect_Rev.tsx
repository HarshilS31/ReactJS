import React, { useState, useEffect } from 'react'

interface GT_User {
    id: number; // Added id for React list keys
    name: string;
    login: string;
    avatar_url: string;
}

const Use_Effect_Rev = ({ count }: { count: number }) => {
    const [user, setUser] = useState<GT_User[]>([]);

    useEffect(() => {
        if (count === 0) {
            setUser([]);
            return;
        } 
        
        async function fetchUserData() {
            try {
                const resp = await fetch(`https://api.github.com/users?per_page=${count}`);
                const data: GT_User[] = await resp.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching GitHub users:", error);
            }
        }
        
        fetchUserData();
    }, [count]);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>GitHub Users (Count: {count})</h2>
            
            {user.length === 0 ? (
                <p>No users to display. Increase the count!</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                    {user.map((u) => (
                        <div 
                            key={u.login} // Using login as a unique key since GitHub logins are unique
                            style={{ 
                                border: '1px solid #ccc', 
                                borderRadius: '8px', 
                                padding: '12px', 
                                textAlign: 'center' 
                            }}
                        >
                            <img 
                                src={u.avatar_url} 
                                alt={u.login} 
                                style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
                            />
                            <h3 style={{ margin: '10px 0 5px 0', fontSize: '16px' }}>{u.login}</h3>
                            {/* Note: The generic /users endpoint doesn't return the 'name' field, only public profiles do. */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Use_Effect_Rev;