import React , {Component} from 'react';

class Errorboundry extends Component {
    constructor(props){
        super(props);
        this.state={haserror:false}
    }

    componentDidCatch(error, info){
        this.setState({haserror:true})
    }
    render(){
        if (this.state.haserror){
            return <h1>An error</h1>     
        }else{return this.props.children}
    }
}

export default Errorboundry