import React from 'react';
import Scheduler from './Scheduler';
import Posts from './Posts';

class App extends React.Component{
    render(){
        return 
        <div id="app">
            <Scheduler/>
            <hr className="my-4"></hr>
            <Posts/>
        </div>
    }
}

if(document.getElementById('root') !== null){
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}