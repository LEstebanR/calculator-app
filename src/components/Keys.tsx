import Values from "@/utils/types";
import { FC } from "react";

interface Props {
  setValues: Function
  values: Values
}

interface ButtonProps {
  layout: string;
  type: "number" | "sign" | "function" | "result";
}


const Keys: FC<Props> = ({ setValues, values}) => {

  const updateValues = (type: string, layout: any) => {
    console.log(values)
    let updatedValues = { ...values }; 
  
    if (type === "number") {
      if (updatedValues.sign) {
        updatedValues.secondValue = updatedValues.secondValue
          ? updatedValues.secondValue + layout
          : layout;
      } else {
        updatedValues.firstValue = updatedValues.firstValue
          ? updatedValues.firstValue + layout
          : layout;
      }
    } else if (type === "sign") {
      updatedValues.sign = layout;
    } else if (type === "function") {
      if (layout === "DEL") {
        if (updatedValues.secondValue) {
          updatedValues.secondValue = updatedValues.secondValue.slice(0, -1);
        } else if (updatedValues.firstValue) {
          updatedValues.firstValue = updatedValues.firstValue.slice(0, -1);
        }
      } else if (layout === "RESET") {
        updatedValues = { firstValue: '0', secondValue: '0', sign: "", result: 0 };
      }
    } else if (type === "result") {
      const { firstValue, secondValue, sign } = updatedValues;
      if (firstValue && secondValue && sign) {
        delete updatedValues.result;
        const result = eval(`${firstValue}${sign}${secondValue}`);
        updatedValues.result = result;
      }
    }
    setValues(updatedValues);
  
  }
  
  const Button: FC<ButtonProps> = ({ layout, type }) => {
    let className = "rounded-lg m-3";
    switch (type) {
      case "number":
        className += " bg-slate-800 h-10";
        break;
      case "sign":
      case "function":
        className += " bg-slate-900";
        break;
      case "result":
        className += " bg-red-600";
        break;
    }

    return <button className={className} onClick={() => updateValues(type, layout)}>{layout} </button>;
  };
  
  return (
    <div className="container mx-auto bg-slate-600 rounded-lg  grid grid-cols-4 grid-rows-5">
      <div className="grid col-span-3 row-span-3 ">
        <div className="grid grid-cols-3 grod-rows-3">
          <Button layout="7" type="number" />
          <Button layout="8" type="number" />
          <Button layout="9" type="number" />
          <Button layout="4" type="number" />
          <Button layout="5" type="number" />
          <Button layout="6" type="number" />
          <Button layout="1" type="number" />
          <Button layout="2" type="number" />
          <Button layout="3" type="number" />
        </div>
      </div>
      <div className=" grid col-span-1 row-span-3">
        <Button layout="DEL" type="function" />
        <Button layout="+" type="sign" />
        <Button layout="-" type="sign" />
      </div>
      <div className="grid col-span-3 row-span-1 ">
        <div className="grid grid-cols-3 grid-rows-1">
          <Button layout="." type="number" />
          <Button layout="0" type="number" />
          <Button layout="/" type="sign" />
        </div>
      </div>
      <Button layout="*" type="sign" />
      <div className="grid col-span-4 grid-rows-1">
        <div className="grid grid-cols-2">
          <Button layout="RESET" type="function" />
          <Button layout="=" type="result" />
        </div>
      </div>
    </div>
  );
};


export default Keys