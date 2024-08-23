import { connectToDB } from "@utils/database";
import Testimony from "@models/testimony";
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


        const testimony = await Testimony.find({}).populate('creator')
        console.log("Fetched all the testimonies", testimony);
        return new Response(JSON.stringify(testimony), {status: 200});
    }catch (error){
        console.error("Failed to fetch all posts", error);
        return new Response("Failed to fetch all posts", {status: 500});
    }
}