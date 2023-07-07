import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
// import Logo from "../images/logo-header.svg"
// import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import Header from "../components/layouts/header";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "c_oderimage",
      "c_uberarticle",
      "c_ordertextphoto",
      "c_ordertext",
      "c_connected",
      "c_ourfood",
      "c_favouritefavorites",
      "c_information",
      "c_downloadtheapp",
      "c_faq.question",
      "c_faq.answer",
      "c_bannerimage",
      "c_cta",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "c_bannertext",
      "c_faqdata"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en","fr"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }

  return `/locations/${document.locale}/${document.slug}`;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.slug}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title ? document.c_meta_title : `${document.name} Store of FAVOURITE TASTIEST CHICKEN`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name}FAVOURITE TASTIEST CHICKEN Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },


      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      // {
      //   type: "link",
      //   attributes: {
      //     rel: "canonical",
      //     href: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl

      //       }${document.slug ? document.slug : `${document.name.toLowerCase()}`}.html`,
      //   },
      // },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name}FAVOURITE TASTIEST CHICKEN Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      {
        type: "link",
        attributes: {
          name: "og:image",
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title ? document.c_meta_title : `${document.name} Store ofFAVOURITE TASTIEST CHICKEN`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} FAVOURITE TASTIEST CHICKEN Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;

  const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
  console.log(url)
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_banner_image,
    // c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    name,
    c_oderimage,
    c_uberarticle,
    c_ordertextphoto,
    c_ordertext,
    c_connected,
    c_information,
    c_ourfood,
    c_favouritefavorites,
    c_downloadtheapp,
    c_faq,
    dm_directoryParents,
    c_bannerimage,
    c_cta,
    c_bannertext,
    c_faqdata


  } = document;
  const Orderimage = c_oderimage?.map((link: any) => (
    <>
    <a href="">
      <img className="object-fill h-48 w-50" src={link?.url} alt="" style={{ height: "60px" }} />
      </a>
    </>


  ));
  const Connectedimage = c_connected?.image?.map((link: any) => (
    <>
      <a href="">
        <img style={{ height: "27px" }} src={link?.url} alt="" />
      </a>

    </>

  ));
  const Googleimage = _site?.c_headergoogleimage?.map((link: any) => (
    <>
      <a href="" >
        <img style={{ height: "42px" }} src={link?.url} alt="" />
      </a>

    </>

  ));
  



  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
    document.dm_directoryParents?.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +

              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents?.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_city") {
        let url = "";
        document.dm_directoryParents?.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + "/" + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": stagingBaseurl + path,
      name: document.name,
    },
  });
  let imageurl = photoGallery ? photoGallery?.map((element: any) => {
    return element.image?.url
  }) : null;
  console.log(document)
  let bannerimage = c_banner_image && c_banner_image.image?.url;


  return (

    <>

      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          // url: `${c_canonical?c_canonical:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <Header _site={_site} />
          <BreadCrumbs
            name={name}
            address={address}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          ></BreadCrumbs>

          <PageLayout global={_site}>
          


           
            

            <div className="mt-5 w-full h-56 md:h-96 bg-no-repeat bg-cover relative z-[0] append-banner-img">
              <img
                className="hidden md:block object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full"
                src={c_bannerimage?.url}
                alt={""}
              />

              <div className="w-full h-56 md:h-96 bg-opacity-50 bg-black flex items-center justify-center ">
                <div className="mx-2 text-center">
                  <div>
                    <h1 className="text-white text-6xl font-bold font-evogriaregular md:text-6xl  2xl:text-5xl uppercase">
                     {name}
                    </h1>
                    <div className="tobook-btn pt-6 flex justify-center text-white text-2xl">
                      
                      {c_bannertext}
                      
                     
                        
                     
                    </div>
                    <div className="menu-collect-btn flex space-x-6 justify-center pt-6">
                      <a
                        href={c_cta?.link}
                        className="rounded-sm inline-block font-bold  !leading-[2.8rem]   text-center  transition-all transform hover:scale-[1.09]   w-24 lg:w-[90px] xl:w-52  2xl:w-32   text-white  text-xs xl:text-lg bg-[#f60909]"
                      >
                        {c_cta?.label}
                      </a>
                     
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="openClosestatus detail-page closeing-div">
              <OpenClose timezone={timezone} hours={hours}  />
            </div>
            <div className="location-information" style={{ marginTop: "50px" }} >
              <Contact address={address}
                phone={mainPhone} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
                yextDisplayCoordinate={yextDisplayCoordinate} longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} ordertext={c_ordertext} hours={hours} additionalHoursText={additionalHoursText} ></Contact>
              {
                hours ?
                
                  <div className="map-sec" id="map_canvas">
                    <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                  </div> :

                  <div className="map-sec without-hours" id="map_canvas">
                    <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                  </div>
              }
            </div>
          
            <span style={{ fontSize: "17px", fontWeight: "inherit", marginBottom: "20px" ,marginLeft:"35px"}}>
              {c_ordertext}
            </span>
            <div>
              <a href="">
              <img src={c_ordertextphoto?.url} alt="" style={{ height: "64px", width: "84px",marginLeft:"35px" }} />
              </a>
            </div>
            <span style={{ fontSize: "17px", fontWeight: "inherit", marginTop: "10px",marginLeft:"35px" }}>{c_uberarticle}</span>
            <div className="flex space-x-4" style={{ marginTop: "10px", marginLeft: "35px" }}>
              
              {Orderimage}
            
            </div>
            <div style={{ backgroundColor: "#000080", width: "750px", marginTop: "35px", height: "52px", marginLeft: "30px" }}>

              <div className="flex" style={{ marginTop: "13px" }} >
                <span style={{ color: "white", marginLeft: "30px", fontSize: "13px" }}>{c_connected.line}</span>
                <span className="flex" style={{ marginLeft: "415px" }}>
                  {Connectedimage}
                </span>


              </div>
             {/* <div>
             {hourstime}
             </div> */}
            </div>
            <div>
              <h1 style={{ color: "#000080", fontWeight: "bold", marginLeft: "32px", marginTop: "32px" }}>
                {c_information.line1}
              </h1><br />
              <span className="text-center" style={{ marginTop: "10px", fontSize: "initial", marginLeft: "32px" }}>
                {c_information.line2}
              </span>
            </div>
            <div style={{marginTop:"40px"}}>
              <h1 style={{ color: "#000080", fontWeight: "bold", marginLeft: "550px", marginTop: "35px" }}>
                our food
              </h1>
              <PhotoSlider c_ourfood={c_ourfood} />

            </div>
            <div  style={{marginTop:"40px"}}>
              <h1 style={{ color: "#000080", fontWeight: "bold", marginLeft: "550px", marginTop: "35px" }}>
                Favourite  Favourites
              </h1>
              <PhotoSlider c_favouritefavorites={c_favouritefavorites} />

            </div>
            <div className="mt-5 w-full h-56 md:h-96 bg-no-repeat bg-cover relative z-[0] append-banner-img w-full h-56 md:h-96 bg-opacity-50 bg-black  items-center justify-center ">
              <div  >
                <h1 className="text-black text-4xl font-bold font-evogriaregular md:text-4xl  2xl:text-5xl uppercase"> {c_downloadtheapp.name}</h1>
              </div>
              <div>
                <p className="text-left ">
                  {c_downloadtheapp.line2}
                  <div>
              {Googleimage}
            </div>
                  
                </p>
              </div>
              <div className="phoneimage">
                <img className="hidden md:block object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full" src={c_bannerimage?.url} alt="" />
              
                <img src={c_downloadtheapp.image?.url} alt=""  style={{marginLeft:"1000px"}}/>
              </div>
             

            </div>
            <div style={{marginTop:"50px",marginLeft:"500px"}}>
            <h1 >
              {c_faqdata.line1}
            </h1>
            <h3>
            {c_faqdata.line2}
            </h3>
            </div>
            
            <div><Faq faqs={c_faq} /></div>
             <div className="nearby-sec">
              <div className="container">
                <div className="sec-title"><h2 className="">{StaticData.NearStoretext}</h2></div>
                <div className="nearby-sec-inner">
                  {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                    <Nearby externalApiData={externalApiData} />
                    : ''}
                </div>
              </div>
            </div>
          </PageLayout>
        </AnalyticsScopeProvider>
        <Footer _site={_site} />
      </AnalyticsProvider>
    </>
  );
};
export default Location;