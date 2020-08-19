import React from 'react';
import Profile from './profile/Profile'
//import Photo from './portrait.jpg'
import './App.css';

//function passed as props
//const HandleName = (name) => {  alert("Welcome '" + name +" '");}
function HandleName(name){  
  alert("Welcome '" + name +" '");
}

const styleImg = {
  width: '100%',
  marginTop: '100px',
  borderRadius: '100%',
  boxShadow:  '5px 10px 18px #888888',
}

//data (fullName, profession, bio) as props; image as children props, 'handleName' function as props
function App() {
  return (
    <div className="App">
      <Profile 
        fullName="Tarek Arif" 
        profession="I'm not working in this moment; I devote a most of my time to learning." 
        bio="I live in Tunis, I'm passionate about Information Technology world, and I wish to be a web developper." 
        alertProfile={HandleName}
      >
        {/*image as children props*/}
        <img src="/portrait.jpg" alt="Photo de profil" title="Photo de profil" style={styleImg}/>
      </Profile>
    </div>
  );
}

export default App;
