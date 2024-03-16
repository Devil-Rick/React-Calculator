import Display from "../screen/screen"
import styles from './dailpad.module.css'

const dailkeys = [['C', '+/-', '%', '/'], [1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], [0, '.', '=']];

const Dailpad = () => {
    return (
        <div className={styles.display}>
            <Display />
            <div className={styles.dial}>
                <div className={styles.numbers}>
                    {dailkeys.map((row) => (
                        <div>
                            {row.map((key) => {
                                if (key === 0) {
                                    return <button className={styles.zero}>{key}</button>
                                }
                                return <button>{key}</button>
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dailpad