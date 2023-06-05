import {useEffect, useState} from "react";
import data from "../data.json";


export function useAccommodations() {
    const [accommodations, setAccommodations] = useState([])

    const fetchAccommodations = () => {
        setAccommodations(data)
    }

    useEffect(() => {
        fetchAccommodations()
    }, [])
    return accommodations
}
