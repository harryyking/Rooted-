import User from "@models/User";
import { connectToDB } from "@utils/database";

export const GET = async() => {

    try {
        // connect to the database 
        // get streak from the database

        await connectToDB();

        const user = await User.findOne({email: {$exists:true}});

        if(!user){
            return new Response("Users not found", {status: 404});
        }

        return new Response(JSON.stringify({streak : user.streak}), {status: 201});
        
    } catch (error) {
        console.error("Failed to recieve streak", error)
        return new Response("Failed to recieve streak", {status: 500});
        
    }
}