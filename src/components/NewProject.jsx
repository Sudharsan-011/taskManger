import Inputs from "./Inputs.jsx";
import {useRef,forwardRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd ,cancel}){
const modal= useRef();
  const title=useRef();
  const description=useRef();
  const dueDate=useRef();
  function handleSave(){
const enteredTit=title.current.value;
const enteredDescrip=description.current.value;
const enteredDue=dueDate.current.value;
 if(enteredTit.trim()===''|| enteredDescrip.trim()===''||enteredDue===""){
  modal.current.open();
  return;
 }

//validation
onAdd({title:enteredTit,
  description:enteredDescrip,
  dueDate:enteredDue
})
  }
    return (
      <>
      <Modal ref={modal}  btnCap="okay"><h2 className="text-xl font-bold text-stone-500 my-4" >Invalid Input</h2>
      <p className="text-xl font-bold text-stone-800 my-4">Opps kindly enter</p>
      <p className="text-xl font-bold text-stone-800 my-4 ">Make sure u Enter </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className=" flex items-center justify-end gap-3 my-4"> 
          <li >
            <button className="text-stone-800  hover:text-stone-950 " onClick={cancel}>Cancel</button>
          </li>
          <li>
            <button onClick={handleSave } className= " px-6 py-2 rounded-md bg-stone-800 text-stone-100 hover:bg-stone-950 " >Save</button>
          </li>
        </menu>
        <div>
          <Inputs type="text" ref={title} label="Title"/>
          <Inputs  ref={description} label="Description " isText/>
          <Inputs type="date" ref={dueDate} label="DueDate"/>
        </div>
      </div>
      </>
    );
}