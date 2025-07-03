import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";


function PostCard({$id , title ,featuredImage }) {


    return(
        <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-200 rounded-xl ">
            <div className="w-full justify-center">
                <img
                src={service.getFilepreview(featuredImage)}
                alt={title}
                className="rounded-xl"
                
                />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        
        </Link>
    )
}


export default PostCard