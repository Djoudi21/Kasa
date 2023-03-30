import {Link} from "react-router-dom";
import styles from '../css/_ErrorPage.module.css';
import Layout from "../components/Layout";


export default function ErrorPage() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>
                    <i>Oups! La page que
                        vous demandez n'existe pas.</i>
                </p>
                <Link className={styles.link} to={'/'}>Retourner sur la page d’accueil</Link>
            </div>
        </Layout>
    );
}
