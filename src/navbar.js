import { Link } from "react-router-dom"; {/* Link aviods reloading of page ,so it upadtes any changes made to page*/}



function Navbar()
{
  return ( 
    <div className="navbar">
    <h1 className="leftheader" >DJ'S BLOG</h1>
    <h1 className="links">
      <Link to ="/">HOME</Link>
      <Link to ="/create">NEW BLOG</Link>
    </h1>
    </div>
   );
}
 
export default Navbar;