import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import UseFetch from "./usefetch";


function BlogDetails() 
{
  const {id}=useParams() ;{/* id is changeable in the route */}

  const {data:blog,isPending,error}=UseFetch(`http://localhost:8080/blogs/${id}`) 
  {/* url+ id gives the blog details of the respective blog id, has nothing to do with routing*/}
  
  const history=useHistory();

  const handleDelete = () =>
  {
    fetch(`http://localhost:8080/blogs/${id}`, {
    method: 'DELETE' 
  })
  .then(()=>
  {
      history.push('/'); 
  }
    )
    }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>DELETE BLOG</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails