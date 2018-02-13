import React, { Component } from 'react';
import Board from './Board'
import Header from './Header'


class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Board />
            </div>
        )
    }
}
export default App;