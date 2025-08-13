import { useRef, useEffect } from "react";


export default function Modal({open, children}) {
    const dialogRef = useRef();

    useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
    }, [open]);

  return (
    <dialog ref={dialogRef} className="w-[50%] h-1/2 rounded-e-full p-4 backdrop:bg-stone-900/90 bg-stone-900/50 text-stone-300 flex flex-col  justify-center gap-5">
    {children}
      <button className="bg-stone-900 rounded-lg w-2/6 h-16" onClick={()=> {open(false)}}>
        Okay
      </button>
    </dialog>
  );
}
