 import { IPlatformsDataOnScreen } from "../components/platforms/platforms";

export const platformsScreenData: IPlatformsDataOnScreen  = {
  title: 'Trusted CRM Platforms We Integrate',
  subtitle: "We believe in only integrating the best. Our expertise lies in aligning your business processes with top-tier CRM platforms that have been recognized globally for their excellence. Here's a closer look:",
  items: [
    { title: 'ZOHO CRM',
     link: '/zohocrm', 
     about: "Zoho CRM empowers organizations with a complete customer relationship lifecycle management solution. Known for its adaptability, Zoho suits businesses of all sizes, from startups to established enterprises",
     awards: [
        {name: "PCMag's Editors' Choice Award for Best CRM Software"},
        {name: "G2 Crowd Leader for CRM Software, 2022"}
    ]},
    { title: 'HUBSPOT CRM',
     link: '/hubspotcrm', 
     about: "HubSpot CRM is designed to be a platform that aligns sales and marketing. It offers a suite of tools that include email tracking, meeting scheduling, and lead generation, all aimed at enhancing customer relations and driving growth",
     awards: [
        {name: "Winner of the 2022 Best Software Awards by G2"},
        {name: "Recognized as a CRM leader in Forrester Wave™"}
    ]},
     
  ], 
};
