import styles from '../css/_Cards.module.css';

export default function Card({title, cover}) {
    return (
        <>
            <div test-id="toto" className={styles.container}>
                <img className={styles.img} src={cover} alt=""/>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </>
    );
}
