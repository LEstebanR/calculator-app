import Values from "@/utils/types";
import { FC } from "react";

interface Props {
  values: Values
}

const Screen:FC<Props> = ({values}) => {
  return (
    <div className="container mx-auto bg-slate-700 rounded-lg h-24 flex items-center justify-end p-2">
      <p className="text-4xl">{values.result || values.secondValue || values.firstValue}</p>
    </div>
  )
}

export default Screen