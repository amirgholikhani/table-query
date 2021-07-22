import style from './App.module.css';
import Table from "./Components/Table";
import React from "react";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);
  const fetchData = () => {
    setLoading(true);
    fetch("data.json")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      ).finally(() => {
        setLoading(false);
    })
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.wrapper}>
      {loading && <div className={style.loading}>... Loading</div>}
      {error && <div className={style.error}>{error}</div>}
      {data.length && <Table data={data.slice(0, 6)} />}
    </div>
  );
}

export default App;
