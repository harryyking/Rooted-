"use client";
import Streak from '@components/streak'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "./ToastProvider";
import { useSession } from 'next-auth/react';

const Card = () => {
  const{data: session} = useSession();
 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submit, setSubmit] = useState(false);
  const {addToast} = useToast();
  const [streak, setStreak] = useState(false);
  
  

  const onSubmit = async (data) => {
    setSubmit(true);
    try {
      const response = await fetch(`/api/postRecord?email=${session?.user.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Email' : `${session.user.email}`,
        },
        body: JSON.stringify(data),
      });

     

      
      if (response.ok) {
        // Handle success, e.g., show a notification or reset the form
        addToast("Quiet Time submitted successfully")
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
    <>
    
 
    
    <form onSubmit={handleSubmit(onSubmit)} className=" rounded-md p-4 shadow-xl mx-auto w-full md:w-[500px] space-y-2">
      <div>
        <label htmlFor="verse" className="label">Bible Verse</label>
        <input
          {...register("verse", { required: true })}
          className="input input-bordered w-full text-sm "
          type="text"
        />
        {errors.verse && <p className="text-secondary text-xs">Bible Verse is required</p>}
      </div>
      <div>
        <label htmlFor="lesson" className="label">Lesson</label>
        
        <textarea
          {...register("lesson", { required: true })}
          className="textarea textarea-bordered w-full "
          type="text"
        />
        {errors.lesson && <p className="text-secondary text-xs">Lesson is required</p>}
      </div>
      <div>
        <label htmlFor="prayer" className="label">Prayer</label>
        <input
          {...register("prayer", { required: true })}
          className="input input-bordered w-full text-sm"
          type="text"
        />
        {errors.prayer && <p className="text-secondary text-xs">Prayer is required</p>}
      </div>
      <button
        type="submit"
        disabled={submit}
        className="btn btn-primary w-full mt-4 "
      >
        Submit
      </button>
    </form>

    </>
    
  );
};

export default Card;
