import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BASE_URL,API_KEY, IMAGE_BASE_URL } from '@/lib';
import { data } from 'autoprefixer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Movie() {
    const router = useRouter();
    const [id,setId] = useState(router.query.id);
    const[movie, setMovie] = useState();
    const[data, setData] = useState();
    useEffect(() =>{
        fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
        .then   ((res)=> res.json())
        .then((data)=> {
          setMovie(data.results[1].key)
        });
        fetch(BASE_URL+"/movie/"+id+"?api_key="+API_KEY).then(respone=>respone.json()).then(dataResult=>setData(dataResult))
    },[]);
    console.log(data)
    return(
    <div >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ IMAGE_BASE_URL + data.backdrop_path} />
          <Card.Body>
            <Card.Title>{data.title ? data.title : "Unknow "}</Card.Title>
            <Card.Text>
            {data.overview ? data.overview : "NO description "}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
  
}
