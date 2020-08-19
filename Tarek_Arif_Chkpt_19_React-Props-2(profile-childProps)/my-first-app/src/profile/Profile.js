import React from 'react';
import PropTypes from 'prop-types';
//import './Profile.css';

//inline styles
const styleApp = {
    width: '80%',
    border: '3px dashed darkgreen',
    borderRadius: '50px',
    margin: '50px auto',
    backgroundColor: '#faffec',
}

const styleH1 = {
    fontFamily: '"Segoe UI", Tahoma',
    color: 'darkgreen',
    paddingBottom: '15px',
}

const stylePortraitBlock = {
    display: 'flex',
    justifyContent: 'space-around',
    justifyItems: 'center',
    flexWrap: 'wrap',
}

const styleSectionPart = {
    width: '200px',
    margin: '50px auto',
    textAlign: 'justify',
    padding: '10px',
}

const styleH2 = {
    fontFamily: '"Segoe UI", Tahoma',
    color: 'darkgreen',
    paddingBottom: '15px',
    borderBottom: '10px solid orange',
}

const styleSpan = {
    fontWeight: 'bolder',
    color: 'rgb(61, 59, 59)',
}

const styleButton = {
    fontFamily: '"Segoe UI", Tahoma',
    fontSize: '1.2em',
    fontWeight: 'bolder',
    color: 'rgb(9, 85, 2)',
    backgroundColor: 'rgb(255, 215, 96)',
    margin: '20px auto',
    border: '3px solid rgb(9, 85, 2)',
    borderRadius: '12px',
    padding: '10px',
    outline: 'none',
}

function Profile(props){
        //Use of event to change button style
        const Inspect = (e) => {
            if (e.target.style.backgroundColor !== 'rgb(64, 191, 53)' &&  e.target.style.color !== 'white')  {
                e.target.style.backgroundColor = 'rgb(64, 191, 53)';
                e.target.style.color = 'white';
            }
            else{
                e.target.style.backgroundColor = 'rgb(255, 215, 96)';
                e.target.style.color = 'rgb(9, 85, 2)';
            }
        }
    return (
        <div style={styleApp}>
            <h1 style={styleH1}>My profile page</h1>
            <div className="portraitBlock" style={stylePortraitBlock}>
                <div className="sectionPart" style={styleSectionPart}>
                    <h2 style={styleH2}>My name:</h2>
                    <p><span style={styleSpan}>My name is:</span> <br/>{props.fullName}</p>
                    <br/>
                    <h2 style={styleH2}>Profession:</h2>
                    <p><span style={styleSpan}>About my actual profession:</span> {props.profession}</p>
                </div>
                <div className="sectionPart" style={styleSectionPart}>{props.children}</div>
                <div className="sectionPart" style={styleSectionPart}>
                    <h2 style={styleH2}>Bio:</h2>
                    <p><span style={styleSpan}>Some moments in my live:</span> {props.bio}</p>
                </div>
            </div>
            <button onClick={()=> props.alertProfile(props.fullName)} style={styleButton} onMouseOver={Inspect} onMouseLeave={Inspect}>Clic to show your name</button> 
            <br/>
        </div>
    );
}

//Default props
Profile.defaultProps = {
    fullName: "Who are you ?",
    profession: "what is your job ?",
    bio: "Tell us s.th about you ?",
    alertProfile: () => alert("No data")
}

//propTypes control
Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    children: PropTypes.element,
    alertProfile: PropTypes.func
}

export default Profile;