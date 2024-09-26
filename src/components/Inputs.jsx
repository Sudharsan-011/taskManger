import {useRef,forwardRef} from "react";

const Input=forwardRef(function Inputs( { label,isText,...props },ref ){
const classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:ring-2 focus:ring-stone-600 focus:ring-opacity-50";

    return(
    <p className="flex flex-col my-4 gap-2 ">
    <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
    {isText ? 
  (<textarea ref={ref} className={`${classes} h-32`} {...props}/>) 
  : 
  (<input className={classes} ref={ref} {...props}/>)}

    
    </p>
        );
})
export default Input;