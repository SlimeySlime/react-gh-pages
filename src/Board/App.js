import React from 'react';
import Read from './Read';
import Write from './Write';
import List from './List';
import Testing from './Testing';
import {Route, Link} from 'react-router-dom';

class App extends React.Component{

    render(){
        return(
            <div>
            {/* <div> testing </div> */}
            <div className='lnk'>
                <ul>
                    <li>
                        <Link to="/board">List</Link>
                    </li>
                    <li>
                        <Link to="/read">Read</Link>
                    </li>
                    <li>
                        <Link to="/write">Write</Link>
                    </li>
                    <li>
                        <Link to='/test'>Testing</Link>
                    </li>
                </ul>
            </div> 
            <div className="route">
                <Route exact path="/board" component={List} />
                <Route path="/read" component={Read} />
                <Route path="/write" component={Write} />
                <Route path='/test' component={Testing} />
            </div>
            </div>
        );
    }
        
}

export default App;