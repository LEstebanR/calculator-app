import { FC } from "react";
import Header from "./Header";
import Keys from "./Keys";
import Screen from "./Screen";

const Calculator: FC = () => {
  return (
    <div className="container w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-full flex flex-col items-center p-2 lg:p-4 xl:p-4 2xl:lg-p4 gap-1">
      <Header/>
      <Screen/>
      <Keys/>
    </div>
  )
}

export default Calculator