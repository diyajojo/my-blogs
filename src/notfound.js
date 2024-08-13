import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='notfound'>
      <h1>Page not found</h1>
      <Link to='/'>Go back to home...</Link>
    </div>
  )
};

export default NotFound