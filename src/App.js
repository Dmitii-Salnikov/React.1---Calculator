import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState(null)

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
	const OPERANDS = ['+', '-', '=', 'C']

	const handleClick = (item) => {
		if (operand1 && operand2 && operator && ['+', '-', '=',].includes(item)) {
			const res = operator === '+' ? Number(operand1) + Number(operand2) : Number(operand1) - Number(operand2)
			setOperand1(res)
			setOperand2('')
			setOperator('')
			setResult(res)
			return
		}

		setResult(null)

		if (['+', '-'].includes(item) && operand1) {
			setOperator(item)
			return
		}

		if (item === 'C') {
			setOperand1('')
			setOperand2('')
			setOperator('')
			setResult(null)
			return
		}

		if (operand1 && operator && !isNaN(item)) {
			setOperand2((prev) => prev + item)
		} else if (!operator && !isNaN(item)) {
			setOperand1((prev) => prev + item)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Калькулятор</h1>
				<div className={styles.field + ' ' + (result ? styles.fieldResult : '')}>
					{result ? result : `${operand1} ${operator} ${operand2}`}
				</div>
				<div className={styles.keypad}>
					{NUMS.map((num) => (
						<button key={num}
							onClick={() => handleClick(num)}
							className={styles.button}>
							{num}
						</button>
					))}
					{OPERANDS.map((op) => (
						<button
							key={op}
							onClick={() => handleClick(op)}
							className={styles.button}>
							{op}
						</button>
					))}
				</div>
			</div>
		</>
	)
}	
