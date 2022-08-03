function DateFormat() {
     return  <div>
        
        <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
        
      </div>
    
}
 function Hello() {
    return <h1>Welcome</h1>
  }
  
  function Artile() {
    return <div>
      <h2>Product Management</h2>
      <p>This is an article anbout Product Management</p>
    </div>;
  }
  
  function Para(){ 
   return <div>
    <h2> Product Management</h2>
     <p> Product management is engage with  the busness and development</p>
     <h3>Types of product Management</h3>
     <ul>
        <li>Product design.</li>
        <li>Product marketing</li>
        <li>Product development</li>
     </ul>
     
    </div>  
  }
  
  function Image(){
    return <img src="https://global-uploads.webflow.com/5f1a1d85849b0a7727d30f10/5fa3780177fc01114acbd8a0_Product-Management_22.png" />
  } 
  


  
  
  
  
  function App() {
    return <div>
      <DateFormat />
      <Hello />
      <Artile />
      <Para />
      <Image />
      
    </div>
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  




