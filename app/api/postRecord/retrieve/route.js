import { connectToDB } from "@utils/database";
import Quiet from "@models/Quiet-Time";


// API to fetch all quiet time posts 
export const GET = async (request) => {
    try{
        await connectToDB()
       
        

        const quietTime = await Quiet.find({}).populate('creator').sort({lastActivityDate: -1})
        console.log("Fetched all the quiet time posts", quietTime);
        return new Response(JSON.stringify(quietTime), {status: 200});
    }catch (error){
        console.error("Failed to fetch all posts", error);
        return new Response("Failed to fetch all posts", {status: 500});
    }
}