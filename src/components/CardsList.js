import Card from "./Card";
import {Link} from "react-router-dom";

export default function CardList({accommodations}) {
    return (
        <>
            <ul>
                {accommodations.map((el) => (
                    <Link to={`/accommodation/${el.id}`}>
                        <Card
                            key={el.id}
                            title={el.title}
                            cover={el.cover}
                        />
                    </Link>
                ))}
            </ul>

        </>
    );
}
