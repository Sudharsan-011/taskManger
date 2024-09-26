import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Btn from './Btn';
const Modal = forwardRef(function Modal({ children,btnCap }, ref) {
  const dialog = useRef(); // Create a ref for the dialog

  // useImperativeHandle to expose open and close methods to parent
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    }
  }));

  // Create the portal for rendering the dialog into #modal-root
  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md '>
      {children}
      <form method='dialog' className='mt-4 text-right' >
       
        <Btn> {btnCap}</Btn>
      </form>
    </dialog>,
    document.getElementById('modal-root') // Ensure this element exists in your index.html
  );
});

export default Modal;
