import { FC } from "react";
import Switch from "./Switch";

const Header:FC = () => {
  return (
    <div className="container flex justify-between">
      <p className="text-2xl">calc</p>
      <Switch/>
    </div>
  )
}

export default Header