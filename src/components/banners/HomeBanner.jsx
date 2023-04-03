import styles from '../../css/_Banner.module.css';

export default function HomeBanner() {
    return (
        <>
            <div className={`${styles.container} ${styles.homeBackGroundImg} ${styles.cardHeightHome} ${styles.cardHeightDesktop}`}>
                <div className={styles.flex}>
                    <h3 className={styles.title}>Chez vous,</h3>
                    <h3 className={styles.title}>partout et ailleurs</h3>
                </div>
            </div>
        </>
    );
}
