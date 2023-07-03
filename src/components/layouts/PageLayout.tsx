import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
    languagetr?:any;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
    // languagetr
      
  }: Props) => {
    return (
        <>
      
                {children}
               
        </>
    );
  };

export default PageLayout;
  