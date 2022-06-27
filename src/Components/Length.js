import React, { useState, useEffect, useRef } from "react";
import CheckboxesTags from "./CheckBoxes";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { alpha, styled } from "@mui/material/styles";
const ConversionFactors = {
  m: {
    m: 1,
    cm: 100,
    mm: 1000,
    ft: 3.28084,
    in: 39.3701,
    yd: 1.09361,
    rd: 0.198839,
    mi: 0.000621371,
    lea: 0.0002071237,
    fur: 0.005,
  },
  cm: {
    m: 0.01,
    cm: 1,
    mm: 10,
    ft: 0.0328084,
    in: 0.393701,
    yd: 0.0109361,
    rd: 0.0019883878,
    mi: Number(6.2137e-6).toFixed(30),
    lea: 0.0000020712,
    fur: 0.0000497097,
  },
  mm: {
    m: 0.001,
    cm: 0.1,
    mm: 1,
    ft: 0.00328084,
    in: 0.0393701,
    yd: 0.00109361,
    rd: 0.0001988388,
    mi: Number(6.21371e-7).toFixed(30),
    lea: Number(2.0712330174427e-7).toFixed(30),
    fur: Number(4.971e-6).toFixed(30),
  },
  ft: {
    m: 0.3048,
    cm: 30.48,
    mm: 304.8,
    ft: 1,
    in: 12,
    yd: 0.333333,
    rd: 0.0606060606,
    mi: 0.000189394,
    lea: Number(6.31313e-5).toFixed(30),
    fur: 0.0015151515,
  },
  in: {
    m: 0.0254,
    cm: 2.54,
    mm: 25.4,
    ft: 0.0833333,
    in: 1,
    yd: 0.0277778,
    rd: 0.0050504950081623,
    mi: Number(1.57828e-5).toFixed(30),
    lea: 0.000005260943,
    fur: 0.0001,
  },
  yd: {
    m: 0.9144,
    cm: 91.44,
    mm: 914.4,
    ft: 3,
    in: 36,
    yd: 1,
    rd: 0.1818181818,
    mi: 0.000568182,
    lea: 0.0001893939,
    fur: 0.00454545,
  },
  rd: {
    m: 5.0292,
    cm: 502.92,
    mm: 5029.2,
    ft: 16.5,
    in: 198.000396000792,
    yd: 5.5,
    rd: 1,
    mi: 0.003125,
    lea: 0.001,
    fur: 0.025,
  },
  mi: {
    m: 1609.34,
    cm: 160934,
    mm: Number(1.609e6).toFixed(30),
    ft: 5280,
    in: 63360,
    yd: 0,
    rd: 1760,
    mi: 1,
    lea: 0.333,
    fur: 8,
  },
  lea: {
    m: 4828.03,
    cm: 482803.2,
    mm: Number(4.828e6).toFixed(30),
    ft: 15840.032808399,
    in: 190080,
    yd: 5280,
    rd: 960.002,
    mi: 3,
    lea: 1,
    fur: 24,
  },
  fur: {
    m: 201.168,
    cm: 20116.8,
    mm: 201168,
    ft: 660.001,
    in: 7920.02,
    yd: 220,
    rd: 40,
    mi: 0.125,
    lea: 0.0417,
    fur: 1,
  },
};

const Length = () => {
  const [options, setOptions] = useState([]);
  const [lens, setLens] = useState({
    m: "",
    cm: "",
    mm: "",
    ft: "",
    in: "",
    yd: "",
    rd: "",
    mi: "",
    lea: "",
    fur: "",
  });

  const handleValueUpdates = (eve, e, conversions) => {
    const newValue = eve.target.value;
    if (!isNaN(newValue)) {
      // setLens((prev) => ({ ...prev, [e.symbol]: newValue }));

      // setLens((prev) =>
      //   Object.values(prev).forEach((item) => {
      //     console.log(newValue * conversions[e.symbol]);
      //   })
      // );
      const temp = {};
      Object.keys(lens).forEach((element) => {
        console.log(newValue * conversions[element]);
        temp[element] = newValue * conversions[element];
      });

      setLens(temp);
    }
    console.log("Values===>", lens);
    console.log("Unit===>", e.symbol);
    console.log("ConversionFactors===>", conversions);
  };

  // useEffect(() => {
  //   console.log("refreshed");
  // }, [options]);

  return (
    <div>
      <Container
        maxWidth="false"
        sx={{
          border: "thick double #32a1ce",
          backgroundColor: "#ACE1AF",
          width: "80%",
          borderRadius: "20px",
          marginTop: "2rem",
          padding: "0 2rem 2rem 2rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1
          style={{
            color: "#01411C",
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
          }}
        >
          Length Calculator
        </h1>
        <CheckboxesTags multiple={true} setValue={setOptions} />

        <div style={{ justifyContent: "center" }}>
          {options.map((e, id) => {
            return (
              <TextField
                InputLabelProps={{ shrink: true }}
                sx={{
                  backgroundColor: "#71BC78",
                  margin: "1rem",
                  boxShadow: "0 4px 8px 0 #71BC78",
                  "&:hover": { backgroundColor: "#ddd" },
                }}
                size="medium"
                multiline={true}
                variant="outlined"
                key={id}
                label={e.symbol}
                value={lens[e.symbol]}
                onChange={(eve) => {
                  handleValueUpdates(eve, e, ConversionFactors[e.symbol]);
                }}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Length;
