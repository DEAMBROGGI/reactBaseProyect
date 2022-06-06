import React from 'react';

class DerivedState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        name: "Adrian"
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.name)
        if(props.name !== state.name){
            return{
                name: props.name
            };
        }
        return null;
    }

    render(){
       return (
        <div> My name is {this.state.name }</div>
       )
    }
}
                      
export default DerivedState;