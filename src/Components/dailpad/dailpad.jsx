import { useState } from "react";
import Display from "../screen/screen"
import styles from './dailpad.module.css'

const dailkeys = [['C', '+/-', '%', '/'], [1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], [0, '.', '=']];

let output = 0;
let result;
let oper = '';

const Dailpad = () => {
    const [input, setInput] = useState(0);
    const [partial, setPartial] = useState('');
    const [res, setRes] = useState(0);

    const calc = (cur_res, operation, num) => {
        switch (operation) {
            case '+':
                result = cur_res + num;
                return result;
            case '-':
                result = cur_res - num;
                return result;
            case '*':
                result = cur_res * num;
                return result;
            case '/':
                result = cur_res / num;
                return result;
            case '%':
                result = cur_res % num;
                return result;
            default:
                return num;
        }
    }

    const getkey = (key) => {
        if (!parseInt(key) && key !== 0 && key !== '.') {
            if (key === 'C') {
                result = undefined;
                setPartial('');
                setInput(0);
                setRes(0);
            } else if (key === '+/-') {
                console.log('Invert');
            } else {
                if (result === undefined) {
                    result = input
                }
                if(key === '='){
                    setRes(calc(result,oper, parseFloat(input)), 'result')
                    setPartial(`${result}`);
                }else{
                    setPartial(`${result} ${key}`);
                    oper = key
                }
                setInput(0)
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
