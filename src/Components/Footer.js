import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ "background-color": "#17273a" }}>
     
        <div
          style={{ position:"fixed",width:"100%",bottom:"1px" ,padding: "5px", backgroundColor: "rgba(110, 143, 200,1)", display: 'flex', color: "white", justifyContent: 'center', alignItems: 'center' }}
        >
          &copy; 2022 WatchTube | All Rights Reserved | <a href="/toc">Terms of Service </a>| <a href="/privacy">Privacy Policy</a>
        &nbsp;
          
        </div>
    </div>
  );
};

export default Footer;
