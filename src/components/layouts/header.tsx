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
      <img src={link?.url} alt="" style={{ height: "42px", marginLeft: "555px", marginRight: "20px", marginTop: "50px" }} />
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
        <div className="">
          <a href="">
            {Logo}
          </a>
          {image1}
        </div>
        {/* <div className="">
          <ol>
            {MenuHeader}
          </ol>
          <div className="flex space-x-4">
            {menuimage}
          </div>
        </div> */}
        <div>
        </div>
      </div>
    </>
  );
};
export default Header;
