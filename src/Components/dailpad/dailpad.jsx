import { useState } from "react";
import Display from "../screen/screen"
import styles from './dailpad.module.css'

const dailkeys = [['C', '+/-', '%', '/'], [1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], [0, '.', '=']];
let output = '';

const Dailpad = () => {
    const [input, setInput] = useState(0);
    const [partial, setPartial] = useState();
    const [res, setRes] = useState(0);

    const calc = (num, operation) => {
        switch (operation) {
            case '+':
                setRes(res + parseInt(num))
                break;
            case '-':
                setRes(res - parseInt(num))
                break;
            case '*':
                setRes(res * parseInt(num))
                break;
            case '/':
                setRes(res / parseInt(num))
                break;
            case '%':
                setRes((res * parseInt(num))/100)
                break;
            default:
                break;
        }
    }


    const getkey = (key) => {
        if (!parseInt(key) && key !== 0) {
            if (key === 'C') {
                output = '';
                setPartial(output);
                setInput(output);
                setRes(0);
            } else if (key === '=') {
                calc(output, key)
                output = '';
                setPartial(output);
                setInput(output);
            } else {
                calc(output, key)
                output = output.concat(key);
                setPartial(output);
                output = '';
                setInput(output);
            }
        } else {
            output = output.concat(key);
            setInput(output);
        }
    }

    return (
        <div className={styles.display}>
            <Display value={input} para={partial} result={res} />
            <div className={styles.dial}>
                <div className={styles.numbers}>
                    {dailkeys.map((row) => (
                        <div>
                            {row.map((key) => (
                                <button className={(key === 0) ? styles.zero : null} onClick={() => getkey(key)}>
                                    {key}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dailpad