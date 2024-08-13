"use client";
import { createContext, useState, useContext } from "react"

// Create a context for toast 
const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);


const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);
    
    const addToast = (message) => {
        setToasts([...toasts, {message, id:Date.now(3000)}])
    }

    const removeToast = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    }

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <div className="toast toast-bottom md:toast-end ">
        {toasts.map((toast) => (
          <div
          key={toast.id}
          className="alert alert-success transition"
          onAnimationEnd={() =>{ removeToast(toast.id); setTimeout(true, 3000)}}
          >
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider