import styles from '../css/_Tags.module.css';

export default function Tag({title}) {
    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </>
    );
}
