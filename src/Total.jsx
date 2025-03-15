import './Total.css';

export default function Total({data}) {
 

  const totalIncome = data.reduce(
    (sum, d) => (d.type === 'Income' ? sum + Number(d.amount) : sum),
    0
  );

  const totalExpense = data.reduce(
    (sum, d) => (d.type === 'Expense' ? sum + Number(d.amount) : sum),
    0
  );

  const difference = totalIncome - totalExpense;

  return (
    <div className="total-container">
      <p className="total-income">Total Income: {totalIncome}</p>
      <p className="total-expense">Total Expense: {totalExpense}</p>
      <p className="total-difference">Difference: {difference}</p>
    </div>
  );
}
