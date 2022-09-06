function Nav(){
 return <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a id="navbar-brand" href="#">Beyyond</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active chng-color" aria-current="page" href="#" >Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link chng-color" href="#" >Earn</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle chng-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Products
              </a>
              <ul class="dropdown-menu chng-color" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="react-vid.html">Learn</a></li>
                <li><a class="dropdown-item" href="#">Tools</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Job search</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link chng-color" href="#" >About us</a>
            </li>
          </ul>
          
            <div class="container-fluid">
                <div class="buttons">
                    <a class="btn btn-primary float-r">
                    <strong>Sign up</strong>
                    </a>
                    <a class="btn btn-outline-success float-r" >
                    Log in
                    </a>
                </div>
            </div>
                
            <form class="d-flex" role="search">
            <input  type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit" >Search</button>
            </form>
        </div>
    </div>
</nav>;
}

function Tag(){
   return <div>
    <h1 class="tag"><strong>Everyone Can Code</strong></h1>
       <h2 class="tag">Think Beyyond.. code beyond..</h2>
   </div>
   
}

function Form(){
    return <section class="bg-img">
    <form  class="align-center">
        <div class="mb-4">
         <label for="exampleInputEmail1" class="form-label">Email address:</label>
         <input type="email" class="form-control wid-tx"  aria-describedby="emailHelp"/>
         <div id="emailHelp" class="form-text wid-tx"> <strong> We'll never share your email with anyone else.</strong></div>
       </div>
        <div class="mb-7">
         <label for="exampleInputPassword1" class="form-label">Password:</label>
         <input type="password" class="form-control wid-tx" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3 form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    </section>
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:"Off", header: "My Header"};
    this.handleClick=this.handleClick.bind(this);}

    handleClick() {
      this.setState((prevState) => {
        if (prevState.value == 'OFF') {
          return {
            value: 'ON',
            header: 'Welcome Back!'
          };
        }
        return {
          
          value: 'OFF',
          header: 'Please signin'
        }
      });
    }

    render() {
      return (
        <div>
          <h1>{this.state.header}</h1>
          <button onClick={this.handleClick}>
            {this.state.value}
          </button>
        </div>
      );
    }
  }
   





  
 




function App(){
     return <div>
        <Nav />
        <Tag />
        <Form />
        <Toggle />
        
        
        
     </div>
     
}




const noon = ReactDOM.createRoot(document.getElementById("noon"))
noon.render(< App />); 