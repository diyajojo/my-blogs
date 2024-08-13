
import Bloglist from "./bloglist";
import UseFetch from "./usefetch";


function Home ()
{
  const {data:blogs,isPending,error}=UseFetch('http://localhost:8080/blogs')

  return( 
     <div className="Home">
      {error && <p>{error} </p>}
      {isPending && <p>LOADING.....</p>}
      {blogs && <Bloglist blogsData={blogs} title="ALL BLOGS!!!" ></Bloglist>}
     </div>
  );
}

export default Home;

      
