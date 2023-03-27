import {Link, useRouteError} from "react-router-dom";
import Layout404 from "../components/Layout404";
import styles from '../css/_ErrorPage.module.css';


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Layout404>
            <div className={styles.container}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>
                    <i>Oups! La page que
                        vous demandez n'existe pas.</i>
                </p>
                <Link className={styles.link} to={'/'}>Retourner sur la page d’accueil</Link>
            </div>
        </Layout404>
    );
}
