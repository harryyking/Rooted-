"use client";
import { useForm } from "react-hook-form"
import { useToast } from "./ToastProvider";
import { useState } from "react";
import { useSession } from "next-auth/react";


const TestimonyCard = () => {
  const{ data: session} = useSession();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [submit, setSubmit] = useState(false);
    const {addToast} = useToast();
    
    
    
  
    const onSubmit = async (data) => {
      setSubmit(true);
      try {
        const response = await fetch(`/api/postTest?email=${session.user.email}}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Email' : `${session.user.email}`,
          },
          body: JSON.stringify(data),
        });
  
       
  
        
        if (response.ok) {
          // Handle success, e.g., show a notification or reset the form
          addToast("Testimony submitted successfully")
          reset();     
          
        } else {
          // Handle error
          addToast("Submission failed. Please try again")
          console.error('Submission failed');
        }
      } catch (error) {
        addToast("An error occured. Please try again. ")
        console.error('Failed to submit', error);
      } finally {
        setSubmit(false);
      }
    };
  
  return (
   <form onSubmit={handleSubmit(onSubmit)} className=" rounded-md p-4 shadow-xl mx-auto w-full md:w-[500px] space-y-2">
      <div>
        <label htmlFor="title" className="label">Title</label>
        <input
          {...register("title", { required: true })}
          className="input input-bordered w-full text-sm "
          type="text"
        />
        {errors.title && <p className="text-secondary text-xs">Title is required</p>}
      </div>
      <div>
        <label htmlFor="body" className="label">What happened?</label>
        
        <textarea
          {...register("body", { required: true })}
          className="textarea textarea-bordered w-full "
          type="text"
        />
        {errors.body && <p className="text-secondary text-xs">What happened? is required</p>}
      </div>
      
      <button
        type="submit"
        disabled={submit}
        className="btn btn-secondary w-full mt-4 "
      >
        Submit
      </button>
    </form>
  )
}

export default TestimonyCard