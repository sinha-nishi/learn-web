function Greetme(props){
    return  <nav>
    <h1> Background</h1>
    <div class="box" id="red" onClick={() => props.onClick("red")} ></div>
      
    <div class="box" id="orange" onClick={()=>props.onClick("orange")} ></div>
    <div class="box" id="yellow" onClick={()=>props.onClick("yellow")} ></div>
    <div class="box" id="green" onClick={()=>props.onClick("green")}></div>
    <div class="box" id="blue" onClick={()=>props.onClick("blue")} ></div>
    <div class="box" id="pink" onClick={()=>props.onClick("pink")} ></div>
</nav>
}



 function Box(props){
    return <main>
        {props.showGreet && <section>
            <div id="messagebox"></div>
            <div id="message" style={props.styles} >{props.hour + props.value } <p>have a nice day.</p></div>
            <button id="back" onClick={props.onClick}>Back</button>
        </section>
        } 
        {!props.showGreet ? <section>
            <div id="greetme"></div>
            <button id="greet" onClick={props.onClick} >Greetme</button>
            <label>Enter Your Name: </label>
            <input type="text" value={props.value} onChange={props.onChange}  id="inputtext" />
        </section>
        : null}
    </main>
 }







class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Varsha",hour:"null",showGreet: false, styles: { backgroundColor: "white"} };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
         
    }

    handleButtonClick() {
        this.setState((prev) => {
            if (prev.showGreet) {
                return { showGreet: false };
            }
            return { showGreet: true };
        })
    }

    handleBackgroundChange(color) {
        this.setState({ styles: { backgroundColor: color }})
    }

    componentDidMount() {
        this.getHour()
      }
      getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
           hour
        });
       }

    handleChange(event){
        this.setState({name: event.target.value.hour})
    }
    

    render() {
        return <div>
            <Greetme onClick={this.handleBackgroundChange} />
            <Box styles={this.state.styles} onChange={this.handleChange} showGreet={this.state.showGreet} value={this.state.name} hour={this.state.hour< 12 ? "Good Morning!" : "Good evening!"} onClick={this.handleButtonClick} />
            
        </div>
    };
}


    









    const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< App />); 