import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

let date = new Date()

ReactDOM.render(<App date={date.toString()} />, document.getElementById('app'))