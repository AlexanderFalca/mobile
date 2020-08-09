import React, {createContext} from 'react';

interface FavoriteTeacherData {
    isFavorite: boolean;
}

const FavoriteTeacher = createContext<FavoriteTeacherData>({} as FavoriteTeacherData);

export const FavoriteProvider: React.FC = ({children}) => (

    <FavoriteTeacher.Provider value={{isFavorite: false}}>
        {children}
    </FavoriteTeacher.Provider>
);

export default FavoriteTeacher;