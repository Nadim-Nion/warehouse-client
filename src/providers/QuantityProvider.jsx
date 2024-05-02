import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const QuantityContext = createContext(null);

const QuantityProvider = ({ children }) => {
    const [newQuantity, setNewQuantity] = useState(null);
    const loadedBook = useLoaderData();
    // console.log(loadedBook);

    useEffect(() => {
        if (loadedBook) {
            const { quantity } = loadedBook;
            setNewQuantity(quantity);
        }
    }, [loadedBook])

    return (
        <QuantityContext.Provider value={{ newQuantity, setNewQuantity }}>
            {children}
        </QuantityContext.Provider>
    );
};

export default QuantityProvider;