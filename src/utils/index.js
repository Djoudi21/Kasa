import {createContext, useEffect, useState} from "react";
import data from '../data.json';

export const AccommodationsContext = createContext(undefined)

export const AccommodationsProvider = ({ children }) => {
    const [accommodations, setAccommodations] = useState([])

    const fetchAccommodations = () => {
        setAccommodations(data)
    }

    useEffect(() => {
        fetchAccommodations()
    }, [])

    return (
        <AccommodationsContext.Provider value={{ accommodations }}>
            {children}
        </AccommodationsContext.Provider>
    )
}
