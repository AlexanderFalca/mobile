import React, {createContext, useState} from 'react';

export const FavoriteTeacher = createContext({} as boolean);

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState();

    return (
    <FavoriteTeacher.Provider 
        value={{
        }}
    >
        {children}
    </FavoriteTeacher.Provider>
    );
    
}

