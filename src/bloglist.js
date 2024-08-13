import {Link} from "react-router-dom";

function Bloglist({blogsData, title}) 
{
  return (
    <div className='bloglist'>
      <h1>{title}</h1>
       {blogsData.map(blog=>(
          <div className="blog-preview" key={blog.id}> 
            <Link to={`/blogs/${blog.id}`}>
             <h2>{ blog.title }</h2>
            </Link>
            <p>Written by { blog.author }</p>
          </div>
         ))}
      </div>
  );
}

export default Bloglist