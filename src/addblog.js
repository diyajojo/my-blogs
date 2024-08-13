import { useState } from "react"
import { useHistory } from "react-router-dom";

function AddBlog() 
{
 const[title,setTitle]=useState('')
 const[body,setBody]=useState('')
 const[author,setAuthor]=useState('mario')
 const [isPending,setisPending]=useState(false) 
 {/* initially no blogs are added  */}

 const history =useHistory();

 const titleChange = (e) =>
 {
  setTitle(e.target.value);
 }

 const bodyChange =(e) =>
 {
  setBody(e.target.value);
 }

 const authorChange=(e) =>
 {
  setAuthor(e.target.value);
 }

 const handleSubmit = (e) => 
 {
  e.preventDefault();
  const blog = { title, body, author };
  setisPending(true);
  

  fetch('http://localhost:8080/blogs/', {
    method: 'POST', // post is used when data is submitted
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)  //javascript is converted to json to add to the blogs database - db.json 
  })
  .then(() => 
  {
    console.log('new blog added');
    setisPending(false);
    history.push('/'); {/* redirects to home page */}
  })
}
 return (
  <div className='create'>
   <h1>Add a new blog</h1>
    <form onSubmit={handleSubmit}>
     <label>BLOG TITLE:</label>
      <input type='text' required value={title} onChange={titleChange}></input>
     <label>BLOG BODY:</label>
      <textarea  value={body} onChange={bodyChange}></textarea>
     <label>BLOG AUTHOR:</label>
      <select value={author} onChange={authorChange}>
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
        <option value= "diya">diya</option>
      </select>
     {!isPending &&< button type="submit">ADD BLOG</button>}
     {isPending && <button disabled>Blog is being addded...</button>}
    </form>
  </div>
  );
};


export default AddBlog