import React, {Fragment} from 'react';
import Business from './Business'
import './Form.css'
import { findAllByLabelText } from '@testing-library/react';

function InputElt(props){
    return (
        /*<Fragment>
            <label for={props.inputId}><span>{props.labelTitle} </span></label>
            <input type={props.inputtype} className="form-control" id={props.inputId} name={props.inputId} aria-describedby={props.inputId} placeholder={props.inputHolder} />
        </Fragment>*/
        <div className="form-group">
            <label for={props.inputId}><span>{props.labelTitle} </span></label>
            <input type={props.inputtype} className="form-control" id={props.inputId} name={props.inputId} aria-describedby={props.inputId} placeholder={props.inputHolder} />
        </div>
    );
}

const status = ["Single", "Married", "Divorced", "Complex"];

function SelectionElt(){
    return (
        status.map(elt => <option value={elt}>{elt}</option>)
    );
}

function Form(){
    return (
        <div className="Form container"> 
        <div className="row">
            <div className="col-md-6 offset-3">
            <Business />
            <h1>Bootstrap Form</h1>
            <br/>
                <div className="card-header bg-primary h3 text-white text-center">
                    Contact form
                </div>
                <div className="card card-body">
                    <form action="#" method="GET">
                        <legend className="col-form-label-lg text-center text-primary">-- Fill in the form --</legend>
                        <InputElt inputtype="text" inputId="firstname" labelTitle="First name" inputHolder="Your First name"/>
                        <InputElt inputtype="text" inputId="lastname" labelTitle="Last name" inputHolder="Your Last name"/>
                        
                        <div className="form-group">
                            <label for="situation"><span>Family Situation </span></label>
                            <select className="form-control" id="situation" name="situation">
                                <SelectionElt/>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="gender"><span>Gender </span></label>
                            <div >
                                <label for="male" className="radio-inline"><input type="radio" name="gender" id="male" checked/> Male  </label>
                                <label for="female" className="radio-inline"><input type="radio" name="gender" id="female"/> Female</label>
                            </div>
                        </div>
    
                        <InputElt inputtype="email" inputId="email" labelTitle="Email address" inputHolder="Your Email address"/>
                        <InputElt inputtype="password" inputId="password" labelTitle="Password" inputHolder="Give a strong password"/>
                        
                        <div className="form-group form-check">
                            <label className="form-check-label" for="chkbx">
                                <input type="checkbox" className="form-check-input" id="chkbx" name="chkbx"/>
                            I agree with all conditions.</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit now</button>
                    </form>
                </div>
                <div className="card card-footer text-right small">
                GOMYCODE (c) Tarek Arif
                </div>
            </div>
        </div>
        <br/>
        </div>
    );
}

export default Form;