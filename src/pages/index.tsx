import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SmallImage from '../components/SmallImage'
import { fetchAllImages } from '../helpers/NasaApi'

export default function Home() {
  const [imagesNasa, setImagesNasa] = useState([])

  const updateImages = async () => {
    const data = await fetchAllImages('2021-01-01')
    setImagesNasa(data.reverse())
  }

  useEffect(() => {
    updateImages()
  }, [])

  return (
    <Wrapper>
      <div className="container">
        <h1>API NASA</h1>
        <ul>
          {imagesNasa.map(image =>  <SmallImage {...image} />)}
        </ul>
      </div>
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

    li {
      padding: 0 0 5rem 0;
    }

    h1 {
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

  @media (max-width: 768px) {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 2fr));
      list-style: none;
    }

    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 425px) {
    .container {
      padding: 2rem;
    }
  }
`
