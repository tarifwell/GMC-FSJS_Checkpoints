import React from 'react'
import PropTypes from 'prop-types';
//import './ProductTable.css';

function ProductTable(props){
    console.log(props.styles)
    console.log(props.elements)
    return (
        <table style={props.styles.styleTable}>
            <thead>
                <tr>
                    <th style={props.styles.styleTh}>Name</th>
                    <th style={props.styles.styleTh}>Category</th>
                    <th style={props.styles.styleTh}>Price (DTN)</th>
                </tr>
            </thead>
            <tbody>
                {props.elements.map((elt, index) => {
                    return (
                        <tr style={(index+1)%2===0 ? props.styles.styleTr_even : {}} key={index}>
                            <td  style={props.styles.styleTd}>{elt.name}</td>
                            <td  style={props.styles.styleTd}>{elt.category}</td>
                            <td  style={props.styles.styleTd}>{elt.price} DTN</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </table>
    );
}

ProductTable.propTypes = {      //need help
    elements: PropTypes.array.isRequired,
    styles: PropTypes.object
}

export default ProductTable;