import React, {Component} from 'react';
import axios from 'axios';

class Counter extends Component {
    constructor(){
        super();
        this.state = {count: 0};
    };

    componentWillMount() {
        axios.get('/api').then(({data})=> {
            this.setState({count: data.counter});
        })
    }

    addHandler() {
        
        axios.post('/api/add').then(({data}) => {
           this.setState({count: data.counter});
        })
    }


    subtractHandler() {
        
        axios.post('/api/substract').then(({data}) => {
           this.setState({count: data.counter});
        })
    }

    resetHandler()  {
       axios.post('/api/reset').then(({data}) => {
            this.setState({count: data.counter});
       }) 
    }

    render(){
        return( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addHandler.bind(this)}>ADD</button>
                <button onClick={this.subtractHandler.bind(this)}>SUBTRACT</button>
                <button onClick={this.resetHandler.bind(this)}>RESET</button>
            </div>
        )
    }
}



export default Counter;