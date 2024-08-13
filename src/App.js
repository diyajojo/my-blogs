import Navbar from './navbar';
import Home from './home';
import AddBlog from './addblog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './blogdetails';
import NotFound from './notfound';


function App() 
{
  return (
    <Router> {/* enables nagivations and routing */}
     <div className="App">
       <Navbar></Navbar>
       <div className='contents'>
         <Switch> {/* to ensure only one route is rendered  at at time */}
          <Route exact path='/'> {/* gives the url path for the specific component */}
           <Home></Home>
          </Route>
          <Route exact path='/create'>
           <AddBlog></AddBlog>
          </Route>
          <Route exact path='/blogs/:id'> {/* :id- indicates that id can be changed */}
           <BlogDetails></BlogDetails>
          </Route>
          <Route path="*"> {/* any other url other than specified */}
           <NotFound></NotFound>
          </Route>
         </Switch>
       </div>
     </div>
    </Router>
   
  );
}

export default App;
