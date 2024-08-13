import { connectToDB } from "@utils/database";
import Quiet from "@models/Quiet-Time";
import User from "@models/User";


// Handles POST request to create a new quiet time and update streak
export const POST = async (request) => {

  try {
    const { verse, lesson, prayer } = await request.json();

    // Validate form inputs
    if (!verse || !lesson || !prayer) {
      return new Response("Fields not validated", { status: 400 });
    }
  
    await connectToDB();

    
   
    // Streak calculation logic
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);


     // Find the user by email
     let user= await User.findOne({ email : {$exists: true }});

     if(!user){
         return new Response("Users not found", {status: 404});
     }
 
    
    if (user) {
      console.log("Last Activity Date:", user.lastActivityDate?.toDateString());
  console.log("Yesterday:", yesterday.toDateString());
  console.log("Today:", today.toDateString());
        // If the user exists, update the streak
        if (user.lastActivityDate?.toDateString() === yesterday.toDateString()) {
          // Increment the streak by 1
          user.streak += 1;
          console.log("Streak has been updated", user)
        } else if (user.lastActivityDate?.toDateString() !== today.toDateString()) {
          // Reset the streak to 1
          user.streak = 1; 
          console.log("streak has been defaulted", user)
        }
      } else {
        // If the user doesn't exist, create a new user with default name
        return new Response("Users not found", {status: 404});
      }

      await user.save();
      
      // Create a new quiet time entry
    const newQuiet = new Quiet({ verse, lesson, prayer });
    await newQuiet.save();
    console.log("streak has been set");
    return new Response(JSON.stringify({ newQuiet, user}), { status: 201 });

    }
  catch (error) {
    console.error("Error while creating post or updating streak", error);
    return new Response("Failed to create post or update streak", { status: 500 });
  }
};
