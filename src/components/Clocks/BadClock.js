import React from 'react'

export default class BadClock extends React.Component {
  
        constructor(props) {
          super(props);
          this.state = {date: new Date()};
          
          setInterval(
            () => this.setState({ date: new Date() }),
            1000
          );
        }
        
        render() {
          return (
            <div>
              <h1>Bad Clock</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
        }
      }