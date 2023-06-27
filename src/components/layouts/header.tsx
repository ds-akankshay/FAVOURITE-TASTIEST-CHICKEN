import * as React from "react";
import Cta from "../commons/cta";
const Header = (props: any) => {
  const Logo = props?._site?.c_headerlogo?.map((link: any) => (
 
    <img src={link.url} alt="" style={{ height: "102px", marginTop: "20px" }} />
  ));
  const image1 = props?._site?.c_headergoogleimage?.map((link: any) => (
    <a href="">
      <img src={link.url} alt="" style={{ height: "42px", marginLeft: "555px", marginRight: "20px",marginTop:"50px" }} />
    </a>
  ));
  return (
    <>
      <div className="flex">
         <a href="">
         {Logo}
         </a>
        
        <div>

        </div>

        {image1}

      </div>

    </>
  );
};
export default Header;
