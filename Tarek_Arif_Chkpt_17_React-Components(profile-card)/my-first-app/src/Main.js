import React from 'react';
import ProfilPhoto from './profile/ProfilPhoto'
import FullName from './profile/FullName'
import Adress from './profile/Address'
import './App.css';
import './Main.css';

function Main(){
    return (
        <div className="App">
            <ProfilPhoto />
            <br/>
            <FullName />
            <Adress />
        </div>
    );
}

export default Main;