import styles from '../../css/_Collapse.module.css';

export default function CollapseBody({text, isOpen, list}) {
    return (
        <>
            {text ?
                (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.tutu}>
                    <p className={styles.text}>{text}</p>
                </div>) :
                (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.tutu}>
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
