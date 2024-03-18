import { useState } from "react";
import Display from "../screen/screen"
import styles from './dailpad.module.css'

const dailkeys = [['C', '+/-', '%', '/'], [1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], [0, '.', '=']];

let output = 0;
let result = 0;
let calculate = false;

const Dailpad = () => {
    const [input, setInput] = useState(0);
    const [partial, setPartial] = useState(0);
    const [res, setRes] = useState(0);

    const calc = (num, operation) => {
        switch (operation) {
            case '+':
                console.log(result, operation, output);
                result += num;
                break;
            case '-':
                console.log(result, operation, output);
                result -= num;
                break;
            case '*':
                console.log(result, operation, output);
                result *= num;
                break;
            case '/':
                console.log(result, operation, output);
                result /= num;
                break;
            case '%':
                console.log(result, operation, output);
                result = (result * num) / 100
                break;
            case '=':
                return setRes(result)
            default:
                return 0;
        }
    }

//  Major Change in get Key is required
    const getkey = (key) => {
        if (!parseInt(key) && key !== 0 && key !== '.') {
            if (typeof output === 'string') {
                output = parseFloat(output)
            }
            if (key === 'C') {
                result = 0
                calculate = false
                setPartial(0);
                setInput(0);
                setRes(0);
            } else if (key === '+/-') {
                console.log('Invert');
            } else {
                if (calculate === false) {
                    calculate = true
                    console.log('True is set'); 
                }else{
                    console.log(calc(output, key));
                }    
            }
            output = 0;
        } else {
            if (key === '.') {
                output = output.toString() + '.';
            } else if (typeof output === 'string') {
                output = output + key
            } else {
                output = output * 10 + key;
            }
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