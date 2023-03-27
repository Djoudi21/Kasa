import Banner from "../components/Banner";
import CardList from "../components/CardsList";

export default function Home() {
    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <CardList />
            </section>
        </>
    );
}
