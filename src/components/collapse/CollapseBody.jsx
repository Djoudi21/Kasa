import styles from '../../css/_Collapse.module.css';

export default function CollapseBody({text, isOpen, list}) {
    return (
        <>
            {text ?
                (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </div>) :
                (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.textContainer}>
                    {list && list.map((el, index) => (
                        <div className={styles.text} key={index}>
                            {el}
                        </div>
                    ))}
                </div>)
            }
        </>
    );
}
