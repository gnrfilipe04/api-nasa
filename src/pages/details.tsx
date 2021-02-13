import React, { useEffect, useState } from 'react'
import  styled  from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { useRouter } from 'next/router'

export default function Details() {

  const { query } = useRouter()

  return (
    <Wrapper>
      <div className='container'>
        <h1 key={query.title}>{query.title}</h1>
        <img key={query.title} src={query.img} />
        <h2 key={query.title}>{query.date}</h2>
        <p key={query.title}>{query.description}</p>
      </div>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`


  .container {
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem 5rem 10rem;
  }

  h1 {
    color: white;
    padding: 0 0 5rem 0;

  }

  img {
    max-width: 50rem;
    height: auto;
    padding: 0 0 1rem 0;
  }

  h2 {
    color: white;
    font-weight: 900;
    font-size: 1rem;
    padding: 0 0 2rem 0;
    
  }

  p {
    color: white;
    font-weight: 100;
    line-height: 1.5rem;
    letter-spacing: 2px;
  }

  @media (max-width: 768px){
    .container {
      padding: 5rem;
    }
  }

  @media (max-width: 425px){
    
    .container {
      padding: 2rem;
    }
    
    img {
    max-width: 20rem;
    height: auto;
  }
  }

  
`;
