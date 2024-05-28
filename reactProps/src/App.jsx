
import React from 'react'
import './App.css'
import ImageData from './components/data'
import elephant from './images/elephant.jpeg'
import KalviumGallery from './AppClass'
import KalGallery from './AppClass'

const iData = ()=>{
  let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
    
  }
  function App(props) {
    const images=iData();
  return (
    <>
     <h1>kalvium gallery</h1>
    {/* <ImageData key={images[0].id} src={images[0].img} alt=""/>*/}
    {/* <ImageData key={images[1].id} src={images[1].img} alt=""/>*/}
    {/* <ImageData key={images[2].id} src={images[2].img} alt=""/>*/}
    {/* <ImageData key={images[3].id} src={images[3].img} alt=""/>*/}
     <KalGallery key={images[0].id} src={images[0].img} alt=" "/>
     <KalGallery key={images[1].id} src={images[1].img} alt=" "/>
     <KalGallery key={images[2].id} src={images[2].img} alt=" "/>
     <KalGallery key={images[3].id} src={images[3].img} alt=" "/>
    </>
  )
}

export default App
