import styles from '../../css/_Footer.module.css';
export default function Copyright() {
    return (
        <div data-testid="copyright" className={styles.copyright}>
            {
                <span className={styles.copyright}>© 2020 Kasa. All rights reserved</span>
            }
        </div>
    );
}
