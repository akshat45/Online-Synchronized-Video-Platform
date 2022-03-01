
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [alert, setAlert] = useState(null);
  const [alerterror, setError] = useState(null);



  return (
    <div className="App">
        <div
          style={{
            "background-image": "url('back_image-2.jpg')",
            "background-repeat": "no-repeat",
            "background-attachment": "fixed",
            "background-size": "100% 100%",
            userSelect: 'none',
            padding: '3rem 0',
          }}>
          <div
            style={{
              width: "100%",
              "margin-top": "30px",
              position: "fixed",
              zIndex: "10000",
            }}
          >
            {alert && (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  "justify-content": "center",
                  "align-items": "center",
                }}
              >
                <Alert
                  variant="filled"
                  severity="success"
                  sx={{ width: "300px" }}
                  onClose={() => setAlert(null)}
                >
                  {alert}
                </Alert>
              </div>
            )}
            {alerterror && (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  "justify-content": "center",
                  "align-items": "center",
                }}
              >
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ width: "300px" }}
                  onClose={() => setError(null)}
                >
                  {alerterror}
                </Alert>
              </div>
            )}
          </div>
          <Grid container
            style={{
              marginTop: '3rem',
              minHeight: '70vh',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Grid item md={7}>
              <h1
                style={{
                  "font-family": "'Baloo Bhaijaan 2', cursive",
                  "font-size": "100px",
                  lineHeight: '100px'
                }}
              >
                WatchTube
              </h1>
              <p
                style={{
                  "font-family": "'Baloo Bhaijaan 2', cursive",
                  "font-size": "28px",
                }}
              >
                Best place to chill,study,learn and enjoy with friends.<br /> Watch
                Youtube, Facebook videos with friends in a cool way.
              </p>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}

export default Home;
