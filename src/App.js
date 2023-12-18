import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('')
	const [operator, setOperator] = useState('')
	const [operand2, setOperand2] = useState('')

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Калькулятор</h1>
				<div className={styles.field}></div>
				<div className={styles.keypad}>
					<button className={styles.button}>0</button>
					<button className={styles.button}>1</button>
					<button className={styles.button}>2</button>
					<button className={styles.button}>3</button>
					<button className={styles.button}>4</button>
					<button className={styles.button}>5</button>
					<button className={styles.button}>6</button>
					<button className={styles.button}>7</button>
					<button className={styles.button}>8</button>
					<button className={styles.button}>9</button>
					<button className={styles.button}>+</button>
					<button className={styles.button}>-</button>
					<button className={styles.button}>=</button>
					<button className={styles.button}>C</button>
				</div>
			</div>
		</>
	);
}
