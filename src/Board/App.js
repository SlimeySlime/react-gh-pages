import React from 'react';
import Read from './Read';
import Write from './Write';
import List from './List';
import {Route, Link} from 'react-router-dom';

class App extends React.Component{

    render(){
        return(
            <div>
            {/* <div> testing </div> */}
            <div className='lnk'>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/read">Read</Link>
                    </li>
                    <li>
                        <Link to="/write">Write</Link>
                    </li>
                </ul>
            </div> 
            <div className="route">
                <Route exact path="/" component={List} />
                <Route exact path="/read" component={Read} />
                <Route exact path="/wrtie" component={Write} />
            </div>
            </div>
        );
    }
        
}

export default App;