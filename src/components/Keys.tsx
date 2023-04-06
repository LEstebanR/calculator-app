import { FC } from "react";

interface ButtonProps {
  layout: string
}

const NumberButton: FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-slate-800 rounded-lg m-3 h-10">{layout}</button>
  )
}

const SignButton: FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-slate-900 rounded-lg m-3">{layout}</button>
  )
}

const FunctionButton: FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-slate-900 rounded-lg m-3">{layout}</button>
  )
}

const ResultButton: FC<ButtonProps> = ({ layout }) => {
  return (
    <button className="bg-red-600 rounded-lg m-3 ">{layout}</button>
  )
}

const Keys:FC = () => {
  return (
    <div className="container mx-auto bg-slate-600 rounded-lg  grid grid-cols-4 grid-rows-5">
      <div className="grid col-span-3 row-span-3 ">
        <div className="grid grid-cols-3 grod-rows-3">
          <NumberButton layout="7"/>
          <NumberButton layout="8"/>
          <NumberButton layout="9"/>
          <NumberButton layout="4"/>
          <NumberButton layout="5"/>
          <NumberButton layout="6"/>
          <NumberButton layout="1"/>
          <NumberButton layout="2"/>
          <NumberButton layout="3"/>
        </div>
      </div>
      <div className=" grid col-span-1 row-span-3">
        <FunctionButton layout="DEL"/>
        <SignButton layout="+"/>
        <SignButton layout="-"/>
      </div>
      <div className="grid col-span-3 row-span-1 ">
        <div className="grid grid-cols-3 grid-rows-1">
          <NumberButton layout="."/>
          <NumberButton layout="0"/>
          <SignButton layout="/"/>

        </div>
        
      </div>
      <SignButton layout="X"/>
      <div className="grid col-span-4 grid-rows-1">
        <div className="grid grid-cols-2">
          <FunctionButton layout="RESET"/>
          <ResultButton layout="="/>
        </div>
      </div>
    </div>
  )
}

export default Keys