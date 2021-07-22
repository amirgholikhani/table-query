import React from 'react';
import style from './Table.module.css';

function Table (props) {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead>
        <tr>
          <th>{'نام تغییر دهنده'}</th>
          <th>{'تاریخ'}</th>
          <th>{'نام آگهی'}</th>
          <th>{'فیلد'}</th>
          <th>{'مقدار قدیمی'}</th>
          <th>{'مقدار جدید'}</th>
        </tr>
        </thead>
        <tbody>
         {
          props.data.map(item => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.field}</td>
                <td>{item.old_value}</td>
                <td>{item.new_value}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table;
