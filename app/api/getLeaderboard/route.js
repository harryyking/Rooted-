import { connectToDB } from "@utils/database"
import User from "@models/User";
import { getServerSession } from "next-auth";

export const GET = async(request) => {
    try {
        await connectToDB();

        const session = await getServerSession({req: request});

        if(!session) {
           return new Response("Unauthorized", {status: 401});
         }

       const userEmail = session.user.email;
       console.log(userEmail);

        const user = await User.find({}).sort({streak: -1}).limit(80);

        console.log("Retrieved Users", user)
        return new Response(JSON.stringify(user), {status: 200})
    } catch (error) {
        console.error("Failed to fetch users", error);
        return new Response("Failed to fetch users", {status: 500});
        
    }
}