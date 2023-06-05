import Layout from "../components/Layout";
import styles from "../css/_Accommodation.module.css";
import Collapse from "../components/collapse/Collapse";
import Tag from "../components/Tag";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/gallery/Gallery";
import {useAccommodations} from "../utils/useAccommodations";

export default function Accommodation() {
    const accommodations = useAccommodations()
    const idFromParams = useParams()
    const [accommodation, setAccommodation] = useState(  null)
    const [stars, setStars] = useState(  [])

    useEffect(() => {
        if(!accommodations) return
        const filteredAccommodations = accommodations.filter(el => el.id === idFromParams.id)
        setAccommodation(filteredAccommodations[0])
        handleGoodStars()
    }, [accommodation, accommodations, idFromParams.id]);

    function handleGoodStars() {
        if(!accommodation) return
        const parsedRatedGoodStars = parseInt(accommodation.rating, 10)
        const badStarsInt = 5 - parsedRatedGoodStars
        const goodStars = []
        const badStars = []
        for (let i = 0; i < parsedRatedGoodStars; i++) {
            goodStars.push(
                <svg  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                </svg>
            )
        }

        for (let i = 0; i < badStarsInt; i++) {
            badStars.push(
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/>
                </svg>
            );
        }
        const concatStars = goodStars.concat(badStars)
        setStars(concatStars)
    }
    if(!accommodation) return
    return (
        <>
            <Layout>
                    <div className={styles.container}>
                        <section>
                            <Gallery pictures={accommodation.pictures}  />
                        </section>
                        <section className={styles.fend}>
                            <div>
                                <h3 className={styles.title}>{accommodation.title}</h3>
                                <span className={styles.location}>{ accommodation.location}</span>
                                <div className={styles.tags}>
                                    {accommodation.tags.map((el, index) => (
                                        <Tag title={el} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className={`${styles.fAround} ${styles.flexReverse}`}>
                                {/*{stars}*/}
                                <ul className={styles.flexCenter}>
                                    {stars.map((star, index) => <li key={index} className={styles.star}>{star}</li>)}
                                </ul>
                                <div className={styles.fAround}>
                                    <div className={styles.name}>{accommodation.host.name}</div>
                                    <img className={styles.img} src={accommodation.host.picture} alt=""/>
                                </div>
                            </div>
                        </section>
                        <section className={styles.flexAround}>
                            <div className={styles.width40}>
                                <Collapse title={"Description"} text={ accommodation.description} />
                            </div>
                            <div className={styles.width40}>
                                <Collapse title={"Equipment"} list={ accommodation.equipments} />
                            </div>
                        </section>
                    </div>
            </Layout>
        </>
    );
}
