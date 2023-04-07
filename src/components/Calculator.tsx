import { FC, useState } from "react";
import Header from "./Header";
import Keys from "./Keys";
import Screen from "./Screen";
import Values from "@/utils/types";

const Calculator: FC = () => {
  const [values, setValues] = useState<Values>({ result: 0})
  return (
    <div className="container flex flex-col items-center p-6 gap-1 max-w-2xl ">
      <Header/>
      <Screen values={values}/>
      <Keys setValues={setValues} values={values}/>
    </div>
  )
}

export default Calculator