import Layout from "../components/Layout";
import styles from "../css/_Accommodation.module.css";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import {useContext, useEffect, useState} from "react";
import {AccommodationsContext} from "../utils";
import {useParams} from "react-router-dom";
import Gallery from "../components/Gallery";


export default function Accommodation() {
    const idFromParams = useParams()
    const [accommodation, setAccommodation] = useState(  {},)
    const {accommodations, FetchAccommodations} = useContext(AccommodationsContext)
    useEffect(() => {
        FetchAccommodations()
        const filteredAccommodations = filterAccommodation()
        setAccommodation(filteredAccommodations[0])
    }, [accommodation]);
    function filterAccommodation() {
       return accommodations.filter(el => el.id === idFromParams.id)
    }
    return (
        <>
            <Layout>
                {accommodation ? (
                    <div className={styles.container}>
                        <section>
                            <Gallery pictures={accommodation.pictures}  />
                        </section>
                        <section>
                            <h3 className={styles.title}>{accommodation.title}</h3>
                            <span className={styles.location}>{ accommodation.location}</span>
                            <div className={styles.tags}>
                                {accommodation.tags && accommodation.tags.map((el) => (
                                    <Tag title={el} />
                                ))}
                            </div>
                            //TODO: handle rating function
                            <div className={styles.rating}>
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                                    </svg>
                                </div>
                                <div className={styles.flex}>
                                    <div className={styles.tutu}>
                                        {/*<span>{accommodation.host.name}</span>*/}
                                    </div>
                                    //TODO: handle avatar pic
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16.5" cy="16.5" r="16" fill="#C4C4C4"/>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Collapse title={"Description"} text={ accommodation.description} />
                        </section>
                        <section>
                            <Collapse title={"Equipment"} list={ accommodation.equipments} />
                        </section>
                    </div>
                ) : (<div>toto</div>) }
            </Layout>
        </>
    );
}
