import * as React from "react";
import Cta from "../commons/cta";
type data = {


  languagetrs: any;
};



const Header = (props: any) => {
  // const { header, languagetrs } = props;

  // const submitlg = (e: any) => {
  //   window.location.href = '?locale=' + e.target.value;
  // }


  const Logo = props?._site?.c_headerlogo?.map((link: any) => (

    <img src={link?.url} alt="" style={{ height: "102px", marginTop: "20px" }} />
  ));
  const image1 = props?._site?.c_headergoogleimage?.map((link: any) => (
    <a href="">
      <img src={link?.url} alt="" style={{marginLeft:"671px",height: "45px",marginTop:"24px"}} />
    </a>
  ));


  const MenuHeader = props?._site?.c_menusection?.map((link: any, e: any) => (
    <>
      <li className="flex">
        {link?.line1}
      </li><br />


      {link?.line2?.map((e: any) => (
        <>
          <a href="">

            {e.label}
          </a><br />

        </>
      ))}

    </>
  ));


  const menuimage = props?._site?.c_menuimages?.map((link: any) => (
    <a href="">
      <img src={link?.url} alt="" style={{ height: "32px" }} />
    </a>
  ));



  return (
    <>
      <div className="flex">
        
            {Logo}
            {image1}
        
          
        
       </div>
    </>
  );
};
export default Header;
