import Banner from "../components/Banner";
import CardList from "../components/CardsList";
import {useContext, useEffect} from "react";
import {AccommodationsContext} from "../utils";

export default function Home() {
    const {accommodations, FetchAccommodations} = useContext(AccommodationsContext)
    useEffect(() => {
        FetchAccommodations()
    }, [FetchAccommodations]);
    return (
        <>
            <section>
                <Banner size={"small"} />
            </section>
            <section>
                <CardList accommodations={accommodations} />
            </section>
        </>
    );
}
