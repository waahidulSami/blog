import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button , Input ,Selected ,RTE} from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../../appwrite/config";


export default function PostFrom({ post }) {
    const {register, handleSubmit, watch , control , setValue  , getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.$id || "",
            status: post?.status || "active",
            
        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth?.userData);


    const submit = async (data) => {
        if (post) {
                 const file = data.featuredImage[0] ? await service.uploadFile(file)
                  : null;
        if (file) {
            service.deltefile(post.featuredImage)
        }

        const akonpost = await service.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : post.featuredImage,
        })
        if(akonpost) {
            navigate(`/post/${akonpost.$id}`);
        }
    } else {
        const file = data.featuredImage[0] ? await service.uploadFile(data.featuredImage[0]) : null ;
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const akonpost = await service.createPost({
                    ...data, userId: userData.$id,})

                    if (akonpost) {
                        navigate(`/post/${akonpost.$id}`);
                    }
            }
    }
    }

    const SlugTransfrom = useCallback((value) => {
    
        if (value && typeof value === "string")  
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        
    return""
    } , []);


    React.useEffect(() => {
        const subcription = watch((value ,{name} ) => {

            if (name === "title") {
              
                setValue("slug" , SlugTransfrom(value.title) , {shouldValidate: true});
                
            }
        })

        return () => subcription.unsubscribe();
    } , [watch , SlugTransfrom , setValue])



    return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap" >
        <div className="w-2/3 px-2">
        <Input
        label="Title"
        palaceholder="Enter Post Title"
        className="mb-4"
        {...register("title", {required: true})}
        />
        

        <Input
        label="Slug"
        palaceholder="Enter Post Slug"
        className="mb-4"
        {...register("slug", {required: true})}
        />


        <RTE label="content :"
          name="content"
            control={control} 
            defaultValue={getValues("content")}
        />


        </div>

        <div className="w-1/3 px-2">
       <Input
  label="Featured Image"
  type="file"
  className="mb-4"
  accept="image/png, image/jpg, image/jpeg"
  {...register("featuredImage", { required: !post })}
/>

        {/* todo */}
        {post && (
            <div className="w-full mb-4">
            <img
            src={service.getFilepreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg"
            
            />
            </div>
        )}


        <Selected
        options={["active", "inactive"]}
        label="Status"
        className="mb-4"
        {...register("status", {required: true})}
        />


        <Button   type="submit" className="w-full">
        {post ? "Update Post" : "Create Post"}
        </Button>
        </div>


    </form>
    )
}


