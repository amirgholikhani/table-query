import style from './App.module.css';
import Table from "./Components/Table";
import React from "react";
import FilterForm from "./Components/FilterForm";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [filters, setFilters] = React.useState({});

  const fetchData = (callback = null) => {
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
    setFilterOnData(filters);
  },[data]);

  const setFilterValues = (params) => {
    setFilters(params);
  };

  const setFilterOnData = (params) => {
    let dataFiltered = [...data.slice(0, 10)];
    if (params.name) dataFiltered = getFilteredData(dataFiltered, params, 'name');
    if (params.date) dataFiltered = getFilteredData(dataFiltered, params, 'date');
    if (params.title) dataFiltered = getFilteredData(dataFiltered, params, 'title');
    if (params.field) dataFiltered = getFilteredData(dataFiltered, params, 'field');
    setFilteredData(dataFiltered);
  };

  const getFilteredData = (data, params, param) => {
    return data.filter(item => {
      return item[param].includes(params[param]);
    });
  }

  React.useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <div className={style.wrapper}>
      <FilterForm setFilter={params => setFilterValues(params)}/>
      {loading && <div className={style.loading}>... Loading</div>}
      {error && <div className={style.error}>{error}</div>}
      {data.length && <Table data={filteredData}/>}
    </div>
  );
}

export default App;
