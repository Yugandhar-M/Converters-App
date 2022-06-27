import React, { useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ setValue, multiple }) {
  // const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <>
      <Autocomplete
        fullWidth={true}
        multiple={multiple}
        id="checkboxes-tags-demo"
        onChange={(e, value) => handleChange(value)}
        options={top100Films}
        disableCloseOnSelect={true}
        disableClearable={true}
        filterSelectedOptions={true}
        getOptionLabel={(option) => `${option.title}(${option.symbol})`}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {`${option.title}(${option.symbol})`}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Checkboxes" />}
      />
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Meter", symbol: "m" },
  { title: "CentiMeter", symbol: "cm" },
  { title: "Milli Meter", symbol: "mm" },
  { title: "Foot", symbol: "ft" },
  { title: "Inch", symbol: "in" },
  { title: "Yard", symbol: "yd" },
  { title: "Rod", symbol: "rd" },
  { title: "Mile", symbol: "mi" },
  { title: "League", symbol: "lea" },
  { title: "Furlong", symbol: "fur" },
];
