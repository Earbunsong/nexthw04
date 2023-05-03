import CardComponent from "@/component/CardComponent";
import NavbarComponent from "@/component/NavbarComponent";
import Link from "next/link";
import { API_KEY } from "@/lib";

export default function Home({movies }) {
  const data = movies?.results || [];
  console.log(data);
  return (
    <>
    <NavbarComponent />
      <div className="container"> 
         <h1>Home page</h1>
         
         <div className="d-flex justify-content-evenly flex-warp container">
             <div className="row">
             {data.length > 0 && data.map((movie) => <CardComponent key={movie
             .id} imagePath ={movie.backdrop_path} title={movie.title} id={movie.id} />)}
             </div>
         </div>
      </div>
      <footer/>
    </>
  )
}

//getServiceSideProps
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res=await fetch(url);

  if(!res){
    console.log("error")
  }
  const movies=await res.json();
  console.log(movies);
  return {
    props:{
      movies
    }
  }
}