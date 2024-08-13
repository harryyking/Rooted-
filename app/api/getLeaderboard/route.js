import { connectToDB } from "@utils/database"
import User from "@models/User";

export const GET = async(request) => {
    try {
        await connectToDB();

        const user = await User.find({}).sort({streak: -1}).limit(10);

        return new Response(JSON.stringify(user), {status: 200})
    } catch (error) {
        console.error("Failed to fetch users", error);
        return new Response("Failed to fetch users", {status: 500});
        
    }
}