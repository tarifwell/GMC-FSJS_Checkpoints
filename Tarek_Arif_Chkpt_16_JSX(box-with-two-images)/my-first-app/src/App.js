import React from 'react';
import imageInSrc from './imageInSrc.png'
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>  
        <h1 className="title red"> Tarek Arif </h1>  
        <br/><br/>
        <img src={imageInSrc} alt="Mikey Mouse" title="Mikey Mouse" /> <br/> 
        <img src="/imageInPublic.png" alt="Minnie Mouse" title="Minnie Mouse" />  
        <br/> <br/>
      </div> 
      <br/>
      <video width="320" height="240" controls>  
          <source src="https://www.youtube.com/watch?v=REHJ1lz_HLQ.webm" type="video/webm"/> 
      </video> 
      <br/><br/>
    </div>
  );
}

export default App;
