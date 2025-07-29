// import getCommentCount from "..getCommentCount.js";
import getAllComments from "../utils/getComments.js";
import generateResponse from "./responseGenerator.js";
// Load environment variables from .env file
// const videoID;
// let videoID = "641_goNZGog"; // Example video ID, replace with actual video ID
export default async function getResults(req,res) {
try{
    const {videoID} = req.body;
    if(!videoID){
        return res.send({error:"Provide Video ID"});
    }
    var {comments,error} = await getAllComments(videoID);
        if(error){
            return res.send({error:error.message});
        }
    var {response,error} = await generateResponse(comments);
        if(error){
            return res.send({error:error.message});
        }
        
    return res.send({result:response});
}
catch(error){
    return res.send({error:error.message});
}
}


