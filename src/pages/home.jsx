import HomeBanner from "../components/banners/HomeBanner";
import CardList from "../components/CardsList";
import styles from '../css/_Home.module.css';
import {useAccommodations} from "../utils/useAccommodations";


export default function Home() {
    const accommodations = useAccommodations()

    if(!accommodations) return
    return (
        <>
            <HomeBanner />
            <section className={styles.container}>
                <CardList accommodations={accommodations} />
            </section>
        </>
    );
}
