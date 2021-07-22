import React from 'react';
import style from './FilterForm.module.css';

function FilterForm (props) {
  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const [field, setField] = React.useState('');

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleChange = (setState, value) => {
    debounce(setState(value), 500);
  };

  React.useEffect(() => {
    props.setFilter({name, title, date, field});
  }, [name, title, date, field]);

  return (
    <div className={style.form}>
      <input placeholder={'نام تغییر دهنده'} value={name} type="text" onChange={e => handleChange(setName, e.target.value)} />
      <input placeholder={'نام آگهی'} value={title} type="text" onChange={e => handleChange(setTitle, e.target.value)} />
      <input placeholder={'تاریخ'} value={date} type="text" onChange={e => handleChange(setDate, e.target.value)} />
      <input placeholder={'فیلد'} value={field} type="text" onChange={e => handleChange(setField, e.target.value)} />
    </div>
  )
}

export default FilterForm;
