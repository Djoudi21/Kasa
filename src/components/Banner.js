import styles from '../css/_Banner.module.css';

export default function Banner({size}) {
    return (
        <>
            {size === 'small' ? (
                <div className={`${styles.container} ${styles.small}`}>
                    <div className={styles.flex}>
                        <h3 className={styles.title}>Chez vous,</h3>
                        <h3 className={styles.title}>partout et ailleurs</h3>
                    </div>
                </div>
            ) : (
                <div className={`${styles.container} ${styles.large}`}/>
            ) }
        </>
    );
}
