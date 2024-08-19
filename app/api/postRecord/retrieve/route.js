import { connectToDB } from "@utils/database";
import Quiet from "@models/Quiet-Time";
import { getServerSession } from "next-auth";

export const dynamic = 'force-dynamic';
// API to fetch all quiet time posts 
export const GET = async (request) => {
    try{
        await connectToDB();

        const session = await getServerSession({req: request});

        if(!session) {
           return new Response("Unauthorized", {status: 401});
         }

       const userEmail = session.user.email;
       console.log(userEmail);


        const quietTime = await Quiet.find({}).populate('creator').sort({lastActivityDate: -1})
        console.log("Fetched all the quiet time posts", quietTime);
        return new Response(JSON.stringify(quietTime), {status: 200});
    }catch (error){
        console.error("Failed to fetch all posts", error);
        return new Response("Failed to fetch all posts", {status: 500});
    }
}