import { render } from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { TableSimple, TablePagination } from '../src';

const defaultHeader = ['Name', 'Age', 'Size', 'Phone', 'Gender'];
const defaultData = [
    { className: '', size: ['L', 'M'], phone: 1234567, gender: 'Male', age: 20, name: 'Ben' },
    { className: '', size: ['L', 'M', 'XL'], phone: 1234567, gender: 'Female', age: 22, name: 'Ken' },
    { className: '', size: ['L', 'S'], phone: 1234567, gender: 'Female', age: 23, name: 'Jay' },
    { className: '', size: ['M', 'S'], phone: 1234567, gender: 'Male', age: 26, name: 'Chip' },
    { className: '', size: ['XL', 'XS'], phone: 1234567, gender: 'Male', age: 23, name: 'Lee' },
    { className: '', size: ['L', 'M', 'S', 'XS'], phone: 1234567, gender: 'Female', age: 30, name: 'Frank' },
    { className: '', size: ['S', 'L'], phone: 1234567, gender: 'Male', age: 23, name: 'CoCo' },
    { className: '', size: ['L', 'M', 'S'], phone: 1234567, gender: 'Female', age: 20, name: 'Fake' },
    { className: '', size: ['XS', 'L'], phone: 1234567, gender: 'Male', age: 26, name: 'Dump' },
    { className: '', size: ['L', 'M', 'S'], phone: 1234567, gender: 'Female', age: 27, name: 'Ocean' },
    { className: '', size: ['S', 'XL'], phone: 1234567, gender: 'Male', age: 20, name: 'Polo' },
    { className: '', size: ['M', 'XL'], phone: 1234567, gender: 'Female', age: 21, name: 'Queen' },
    { className: '', size: ['L', 'M'], phone: 1234567, gender: 'Female', age: 20, name: 'Bump' },
    { className: '', size: ['L', 'M', 'S', 'XL'], phone: 1234567, gender: 'Male', age: 22, name: 'Judy' },
    { className: '', size: ['XL', 'M'], phone: 1234567, gender: 'Female', age: 24, name: 'Ryan' },
    { className: '', size: ['L', 'S'], phone: 1234567, gender: 'Female', age: 25, name: 'Flow' },
    { className: '', size: ['S', 'M'], phone: 1234567, gender: 'Female', age: 31, name: 'Ray' },
    { className: '', size: ['L', 'M', 'XS'], phone: 1234567, gender: 'Male', age: 23, name: 'Yen' },
    { className: '', size: ['XL', 'M', 'S'], phone: 1234567, gender: 'Male', age: 21, name: 'Gray' },
    { className: '', size: ['L', 'M', 'S'], phone: 1234567, gender: 'Female', age: 22, name: 'Tom' },
];

const App = ({ Header, data }) =>
  <div>
    <TablePagination
      title="TablePagination"
      subTitle="Sub Title"
      headers={ Header }
      data={ data }
      columns="name.age.size.phone.gender"
      perPageItemCount={ 5 }
      totalCount={ data.length }
      arrayOption={ [['size', 'all', ' ']] }
      nextPageText="Next"
      prePageText="Prev"
    />
    <hr />
    <TableSimple
      title="TableSimple"
      subTitle="Sub Title"
      headers={ Header }
      data={ data }
      columns="name.age.size.phone.gender"
      arrayOption={ [['size', 'all', ', ']] }
    />
  </div>;

App.propTypes = {
  Header: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

render(
  <App Header={ defaultHeader } data={ defaultData } />,
  document.getElementById('container'),
);
