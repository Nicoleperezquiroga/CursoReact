//atajo rafc + tab 
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //UseEffect ejecuta la función segun el valor del arreglo
    //Al estar el arreglo vacio, solo lo hace al inicio
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
