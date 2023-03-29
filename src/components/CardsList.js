import Card from "./Card";
import {Link} from "react-router-dom";
import styles from '../css/_Home.module.css';


export default function CardList({accommodations}) {
    return (
        <>
            <ul className={styles.grid}>
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
