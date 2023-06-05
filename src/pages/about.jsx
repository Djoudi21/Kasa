import Layout from "../components/Layout";
import styles from '../css/_About.module.css';
import Collapse from "../components/collapse/Collapse";
import AboutBanner from "../components/banners/AboutBanner";

export default function About() {
    const collapses = [
        {
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
            title: "Fiabilité"
        },
        {
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            title: "Respect"
        },
        {
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            title: "Service"
        },
        {
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            title: "Sécurité"
        }]
    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <AboutBanner />
                    <section className={styles.collapses}>
                        {collapses.map((el, index) => (
                            <Collapse key={el.text} title={el.title} text={el.text} />
                        ))}
                    </section>
                </div>
            </Layout>
        </>
    );
}
