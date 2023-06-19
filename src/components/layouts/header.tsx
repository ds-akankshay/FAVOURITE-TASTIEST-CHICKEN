import * as React from "react";
import Cta from "../commons/cta";
const Header = (props: any) => {
  const Logo = props?._site?.c_headerlogo?.map((link: any) => (
    <img src={link.url} alt="" style={{ height: "102px", marginTop: "20px" }} />
  ));
  const image1 = props?._site?.c_headergoogleimage?.map((link: any) => (
    <a href="">
      <img src={link.url} alt="" style={{ height: "95px", marginLeft: "auto", marginRight: "20px" }} />
    </a>
  ));
  return (
    <>
      <div className="flex">

        {Logo}
        <div>

        </div>

        {image1}

      </div>

    </>
  );
};
export default Header;
