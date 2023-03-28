import styles from '../css/_Banner.module.css';

export default function Banner(props) {
    return (
        <>
            <div style={{ height: props.size === "small" ? '1OOpx' : '300px' }} className={styles.container}>
                <h3 className={styles.title}>Chez vous,
                    partout et ailleurs</h3>
            </div>
        </>
    );
}
