import React, { useEffect, useState } from 'react'
import  styled  from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import Link from 'next/link'

export default function Home() {

  const [imagesNasa, setImagesNasa] = useState([])

  useEffect(async ()=>{
    const response = await fetch('https://api.nasa.gov/planetary/apod?start_date=2021-01-01&api_key=mZxbOL2ODv8gdWB2YdnGuwnSwc7nKkBaG2v1CdPN')
    const data = await response.json()
    setImagesNasa(data)

  }, [])

  return (
    <Wrapper>
     <div className='container'>
          <h1>API NASA</h1>
          <ul>
          {imagesNasa.reverse().map(image => (
              image.hdurl 
              ? <li key={image.title}>
                <h1>{image.title}</h1>
                <Link href={{ pathname: 'details', query: {title: image.title, img: image.hdurl, date: image.date, description: image.explanation }}}><a><img src={image.hdurl}/></a></Link>
            </li>
            : ''
            ))}
          </ul>
     </div>

      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  .container {
    padding: 5rem;
  }

  h1 {
    color: white;
    font-weight: 900;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
    list-style: none;

    li{
    padding: 0 0 5rem 0;
    }


    h1{
      font-size: 1rem;
      padding: 3rem 0 0 0;
      font-weight: 300;
      max-width: 100px;
      min-height: 143px;
      color: white;
    }

  }


  img {
    width: 100px;
    height: 100px;
    background: black;
    border-radius: 5px;
    

    cursor: pointer;

  }

  @media(max-width: 768px){

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 2fr));
      list-style: none;
      
    }

    h1 {
      font-size: 1.2rem;
    }
    
  }

  @media (max-width: 425px){
    .container {
      padding: 2rem;
    }
  }
`;
