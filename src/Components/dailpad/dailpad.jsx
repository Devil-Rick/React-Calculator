import Display from "../screen/screen"
import styles from './dailpad.module.css'

const Dailpad = () => {
    return (
        <div className={styles.display}>
            <Display />
            <div className={styles.dial}>
                <table className={styles.numbers}>
                    <tbody>
                        <tr>
                            <td><button>C</button></td>
                            <td><button>+/-</button></td>
                            <td><button>%</button></td>
                            <td><button>/</button></td>
                        </tr>
                        <tr>
                            <td><button>1</button></td>
                            <td><button>2</button></td>
                            <td><button>3</button></td>
                            <td><button>+</button></td>
                        </tr>
                        <tr>
                            <td><button>4</button></td>
                            <td><button>5</button></td>
                            <td><button>6</button></td>
                            <td><button>-</button></td>
                        </tr>
                        <tr>
                            <td><button>7</button></td>
                            <td><button>8</button></td>
                            <td><button>9</button></td>
                            <td><button>*</button></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className={styles.zero}>0</button></td>
                            <td><button>.</button></td>
                            <td><button>=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dailpad