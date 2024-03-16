import styles from './screen.module.css';

const Display = ({value, para, result}) => {

    return (
        <div className={styles.display}>
            <div className={styles.comp} ><p>History</p><p>{(para ? para : 0)}</p></div>
            <div className={styles.comp}><p>Result</p><p>{(result ? result : 0)}</p></div>
            <div><h2>{(value ? value : 0)}</h2></div>
        </div>
    );
}

export default Display;
