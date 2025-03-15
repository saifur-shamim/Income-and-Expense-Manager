import "./Display.css";

export default function Display({ data, setData, editIndex, setEditIndex,values, setValues }) {
  function handleDelete(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1); 
    setData(updatedData); 
  }

  function handleEdit(index) {
    setValues(data[index]);
    setEditIndex(index);
  }

  return (
    <>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={i} className={d.type === "Income" ? "income-row" : "expense-row"}>
              <td>{d.details}</td>
              <td>{d.amount}</td>
              <td>{d.type}</td>
              <td>
                
                <button className="edit" onClick={() => handleEdit(i)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
