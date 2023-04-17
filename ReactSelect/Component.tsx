import * as React from 'react';
import Select from 'react-select';
import { colourOptions } from './data';
// import { useState } from 'react';


export interface BlueFortOption {
  readonly value: string;
  readonly label: string;
}

export const blueFortOptions : BlueFortOption[] = [
  // { value:'111', label:'יחידה 111'},
  // { value:'152', label:'יחידה 152'},
  // { value:'301', label:'יחידה 301'},
  // { value:'628', label:'יחידה 628'},
];

const noDataMessage : string = 'אין תוצאות';

const handleInput = (inputOptions: BlueFortOption[])=>{
  // if(inputOptions.length == 0){
  //   blueFortOptions.push({ value:'-1', label: noDataMessage})
  // }
}

export const Component = (inputOptions: BlueFortOption[]) => {
  const isClearable = true;
  const isSearchable = true;
  const isDisabled = false;
  const isLoading = false;
  const isRtl = true;
  const isMulti = true;
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isMulti={isMulti}
        closeMenuOnSelect={false}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        //options={colourOptions}
        options={inputOptions}
        name="selectComponentInput"
      />
    </>
  );
}

Component.displayName = 'Component';
export default Component;

