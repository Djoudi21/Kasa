import styles from '../css/_Cards.module.css';

export default function Card({title}) {
    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </>
    );
}
