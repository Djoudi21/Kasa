import {createContext, useState} from "react";
import data from '../data.json';

export const AccommodationsContext = createContext()

export const AccommodationsProvider = ({ children }) => {
    const [accommodations, setAccommodations] = useState([])

    const FetchAccommodations = async () => {
        const res = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 1000); // simulating an asynchronous call with a delay of 1 second
        });
        setAccommodations(await res)
    }



    return (
        <AccommodationsContext.Provider value={{ accommodations, FetchAccommodations }}>
            {children}
        </AccommodationsContext.Provider>
    )
}
