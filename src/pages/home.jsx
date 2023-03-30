import Banner from "../components/Banner";
import CardList from "../components/CardsList";
import styles from '../css/_Home.module.css';
import {useContext, useEffect} from "react";
import {AccommodationsContext} from "../utils";

export default function Home() {
    const {accommodations, FetchAccommodations} = useContext(AccommodationsContext)
    useEffect(() => {
        FetchAccommodations()
    }, [FetchAccommodations]);
    return (
        <>
            <Banner size={"small"} />
            <section className={styles.container}>
                <CardList accommodations={accommodations} />
            </section>
        </>
    );
}
