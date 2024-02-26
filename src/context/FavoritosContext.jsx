import { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
    const [fotos, setFotos] = useState([]);
    const [likedFotos, setLikedFotos] = useState([]);
    const [view, setView] = useState('Home');

    const fetchFotos = async () => {
        const fotosFetched = await fetch('/photos.json');
        const { photos } = await fotosFetched.json();
        setFotos( photos );
    }

    useEffect(() => {
        fetchFotos();
    }, [])

    return (
        <FavoritosContext.Provider value={{ fotos, setFotos, likedFotos, setLikedFotos, view, setView }}>
            { children }
        </FavoritosContext.Provider>
    );
};

export default FavoritosProvider;