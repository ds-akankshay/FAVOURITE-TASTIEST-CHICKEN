import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";
const Footer = (props: any) => {
	const FooterName = props?._site?.c_footerdata?.name?.map((link: any) => (
		<>
			<a href="">
				<span>
					{link?.label}
				</span>
			</a>
		</>
	));
	const FooterDescription = props?._site?.c_footerdata?.line?.map((link: any) => (
		<>
			{link}
		</>
	));

	const FooterSocialIcon = props?._site?.c_footerdata?.image?.map((link: any) => (
		<>
			<img className="" src={link?.url} alt="" />

		</>
	));
	return (
		<>
			<footer className="site-footer inline-block w-full ">
				<div style={{ backgroundColor: "#555758" ,height:"200px"}}>
					<div className="flex space-x-32">
						<div className="flex flex-col" style={{ color: "white",marginLeft:"10px",marginTop:"20px"}}>
							{FooterName}
						</div>
						<div className="text-left" style={{ color: "white",marginLeft:"442px",marginRight:"263px",marginTop:"20px"}}>
							{FooterDescription}
						</div>
						<div  >
							<a href="" style={{ display: "flex", height: "40px",marginTop:"20px" }}>
								{FooterSocialIcon}
							</a>
						</div>
					</div>
				</div>

			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			><p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
				</p>
			</CookieConsent>
		</>
	);
};
export default Footer;



