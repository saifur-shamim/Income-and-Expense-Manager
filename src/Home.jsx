import { useState, useEffect } from "react";
import Display from "./Display";
import Total from "./Total";
import Input from "./Input";
import "./Home.css";

function Home() {
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    return storedData || [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [values, setValues] = useState({
    details: "",
    amount: "",
    type: "",
  });

  return (
    <>
      <div className="parent">
        <Input
          data={data}
          setData={setData}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          values={values}
          setValues={setValues}
        />
        <Display
          data={data}
          setData={setData}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          values={values}
          setValues={setValues}
        />
      </div>

      <div className="total">
        <Total data={data} />
      </div>
    </>
  );
}

export default Home;
