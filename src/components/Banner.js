import styles from '../css/_Banner.module.css';

export default function Banner({size}) {
    return (
        <>
            <div style={{ height: size === "small" ? '1OOpx' : '300px' }} className={styles.container}>
                <h3 className={styles.title}>Chez vous,
                    partout et ailleurs</h3>
            </div>
        </>
    );
}
