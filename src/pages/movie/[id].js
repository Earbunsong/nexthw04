import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from '@/lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Movie() {
    const router = useRouter();
    const [id, setId] = useState(router.query.id);
    const [movie, setMovie] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        if (!id) return; // Exit early if id is not defined
        fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((results) => {
          setMovie(results.results[1].key)
        });

        fetch(BASE_URL + "/movie/" + id + "?api_key=" + API_KEY)
        .then(response => response.json())
        .then(dataResult => {
          console.log(dataResult)
          setData(dataResult)
        })
    }, [id]); // Include id as a dependency here

    return (
        <div >
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ IMAGE_BASE_URL + data.backdrop_path} />
              <Card.Body>
                <Card.Title>{data.title ? data.title : "Unknown"}</Card.Title>
                <Card.Text>
                {data.overview ? data.overview : "No description"}
                </Card.Text>
              </Card.Body>
            </Card> */}
        </div>
    );
}
