import User from "@models/User";
import { connectToDB } from "@utils/database";
import { getServerSession } from "next-auth";

export const dynamic = 'force-dynamic';

export const GET = async(request) => {

    try {
        // connect to the database 
        // get streak from the database

        await connectToDB();
        const session = await getServerSession({req: request});

         if(!session) {
            return new Response("Unauthorized", {status: 401});
          }

        const userEmail = session.user.email;
        console.log(userEmail)

        const user = await User.findOne({email: userEmail});

        if(!user){
            return new Response("Users not found", {status: 404});
        }

        return new Response(JSON.stringify({streak : user.streak}), {status: 201});
        
    } catch (error) {
        console.error("Failed to recieve streak", error)
        return new Response("Failed to recieve streak", {status: 500});
        
    }
}