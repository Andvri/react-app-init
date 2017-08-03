import React from 'react'

class App extends React.Component {
    render(){
        return <h1>Hello With React { this.props.date }</h1>
    }
}

export default App