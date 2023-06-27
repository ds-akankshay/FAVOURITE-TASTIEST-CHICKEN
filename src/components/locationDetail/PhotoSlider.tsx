import * as React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Options } from '@splidejs/splide';


const PhotoSlider = (props: any) => {
  const { photoGallery, height, width,} = props;

  const mainOptions: Options = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: true,

  };
 // const Happensatcultura =props?.c_newsStore?.map((link: any) => (
  const Dishesmenu = props?.c_ourfood?.map((link: any,i:any) => (
    <SplideSlide key={i}> 
      <div key={i} className="menues" >
        {link.image.map((e: any ) =>(
        <div style={{marginLeft:"50px"}}>
        <img className="" src={e.url} alt={''} style={{height:"207px", width:"224px"}} />
        </div>
        ))}
        
      <div className="orderbtn">
      <button className="ctabtn btndefault" style={{backgroundColor:"#090f6d",height:"35px",width:"150px",color:"white",marginLeft:"80px"}} >
       
        {link.line.label}
        
      </button>
      </div>
      </div>
    </SplideSlide>
  ));
  const Favourite = props?.c_favouritefavorites?.map((link: any,i:any) => (
    <SplideSlide key={i}> 
      <div key={i} className="menues">
        {link.image.map((e: any ) =>(
        <div style={{marginLeft:"50px"}}>
        <img  src={e.url} alt={''} style={{height:"207px", width:"224px"}} />
        </div>
        ))}
        
      <div className="orderbtn">
      <button className="ctabtn btndefault" style={{backgroundColor:"#090f6d",height:"35px",width:"150px",color:"white",marginLeft:"80px"}} >
       
        {link.line.label}
        
      </button>
      </div>
      </div>
    </SplideSlide>
  ));



  return (
    <>
      <Splide area-label="photo slider"
        options={mainOptions}>{Dishesmenu}
        {Favourite}
    </Splide>
   
    </>
  );
};

export default PhotoSlider;