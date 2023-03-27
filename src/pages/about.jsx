import Layout from "../components/Layout";
import styles from '../css/_About.module.css';
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

export default function About() {
    const text1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const text2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const text3 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const text4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <>
            <Layout>
            <div className={styles.container}>
                <section>
                    <Banner />
                </section>
                <section>
                    <Collapse title={"Fiabilité"} text={text1} />
                </section>
                <section>
                    <Collapse title={"Respect"} text={text2}/>
                </section>
                <section>
                    <Collapse title={"Service"} text={text3}/>
                </section>
                <section>
                    <Collapse title={"Sécurité"} text={text4} />
                </section>
            </div>
            </Layout>
        </>
    );
}
