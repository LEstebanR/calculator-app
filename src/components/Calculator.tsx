import { FC } from "react";
import Header from "./Header";
import Keys from "./keys";
import Screen from "./Screen";

const Calculator: FC = () => {
  return (
    <div className="container w-full h-full flex flex-col items-center p-2">
      <Header/>
      <Screen/>
      <Keys/>
    </div>
  )
}

export default Calculator