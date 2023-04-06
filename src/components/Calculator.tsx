import { FC } from "react";
import Header from "./Header";
import Keys from "./Keys";
import Screen from "./Screen";

const Calculator: FC = () => {
  return (
    <div className="container flex flex-col items-center p-6 gap-1 max-w-2xl ">
      <Header/>
      <Screen/>
      <Keys/>
    </div>
  )
}

export default Calculator