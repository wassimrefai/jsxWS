import myWonderfulImage from "./mrrobotgb.jpg"
import './App.css';

function App() {
  return (
    <div style={{border:'solid1px black', maxWidth:'100vw'}} >
<h1 style={{ color: "#B10018", fontSize: 70 , marginLeft:300}}>WASSIM REFAI </h1>

 <br/>

  
    <img src={myWonderfulImage} alt='myImage' style={{width:'1000px', marginLeft : 200, height:'700px'}} />


<img src="/hello.jpg" alt="myimage" style={{width:'1350px', height:'600px'}} />


<iframe style={{marginLeft : 500}} width="320" height="240"  src="https://www.youtube.com/embed/xIBiJ_SzJTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
    </div>
  
  );
 }

export default App;
