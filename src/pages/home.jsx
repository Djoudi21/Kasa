import HomeBanner from "../components/banners/HomeBanner";
import CardList from "../components/CardsList";
import styles from '../css/_Home.module.css';
import {useContext} from "react";
import {AccommodationsContext} from "../utils";

export default function Home() {
    const {accommodations} = useContext(AccommodationsContext)
    return (
        <>
            <HomeBanner />
            <section className={styles.container}>
                <CardList accommodations={accommodations} />
            </section>
        </>
    );
}
