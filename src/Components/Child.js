import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                <h2>Hello Child</h2>
                <h2>{this.props.xyz}</h2>
            </div>
        )
    }
}
export default Child