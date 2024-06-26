/* eslint-disable */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IDropdown, IDropdownSimNao } from "./Dropdown.interfaces";
import { useState } from "react";

const Dropdownsimnao = (dropdownProps: IDropdownSimNao) => {

  return (
    <FormControl
      sx={{
        width: dropdownProps.width,
        backgroundColor: "white",
        ["@media (max-width: 1200px)"]: {
          width: "100%",
        },
      }}
      size="small"
    >
      <InputLabel>{dropdownProps.label}</InputLabel>
      <Select 
      id="dropdownsimnao" 
      value={dropdownProps.selectedOption}
      onChange={dropdownProps.handleChange}
      defaultValue={dropdownProps.defaultValue}>
        <MenuItem value={0}>Não</MenuItem>
        <MenuItem value={1}>Sim</MenuItem>
      </Select>
    </FormControl>
    
  );
};

export default Dropdownsimnao;
