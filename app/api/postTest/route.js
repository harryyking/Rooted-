import Testimony from "@models/testimony";
import { connectToDB } from "@utils/database";
import User from "@models/User";
import { getServerSession } from "next-auth";

export const POST = async (request) => {
    try {

        const session = await getServerSession();

        if(!session){
            return new Response("Unauthorized", {status: 401})
          }
          
          const userEmail = session.user.email;

        const { title, body} = await request.json();

        if(!title || !body){
            return new Response("Fields have not been validated", {status: 400});
        }

        await connectToDB();

         // Find the user by email
        let user = await User.findOne({ email : userEmail});

        const newTestimony = new Testimony({ title, body, creator: user._id, });
    await newTestimony.save();
    console.log("Testimony has been created");
    return new Response(JSON.stringify({ newTestimony}), { status: 201 });

    } catch (error) {
        console.error("Error while creating Testimony", error);
        return new Response("Failed to create testimony", { status: 500 });
    }
}