import React from 'react';
import ProductTable from './Components/ProductTable';
import './App.css';

//Array of products object, passed as props
const products = [
  {price: 45, name: "Book", category: "Furniture"},
  {price: 35, name: "Tshirt", category: "Clothes"},
  {price: 65, name: "Radio", category: "Electronics"},
  {price: 25, name: "Train", category: "Toy"}
];

//inline styling to pass via props
//styles are done firstly in css stylesheet, than modified to objects
//to suit the JSX synthax

const styleH1 = {
  fontFamily: 'Tahoma',
  fontSize: '2em',
  color:  '#8c2323',
};

const style3Elts_table_th_td = {
  textAlign: 'center',
  border: '3px solid #dac2c2',
  padding: '15px',
};

const styleTable = {
  fontFamily: 'Tahoma',
  borderCollapse: 'collapse',
  width: '50%',
  margin: 'auto',
  marginTop: '50px',
  ...style3Elts_table_th_td
};

const styleTh = {
  height: '45px',
  fontSize: '1.3em',
  color: '#f9dbdb',
  backgroundColor: '#8c2323',
  ...style3Elts_table_th_td
};

const styleTd = {
  height: '30px',
  fontSize: '1.2em',
  ...style3Elts_table_th_td
};

const styleTr_even = {backgroundColor: '#dedede'}; //made with condition

function App() {
  return (
    <div className="App">
      <h1 style={styleH1}>Products table</h1>
        <ProductTable elements={products} styles={{styleTable, styleTh, styleTd, styleTr_even}}/>
    </div>
  );
}

export default App;
