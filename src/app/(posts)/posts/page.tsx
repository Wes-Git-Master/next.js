import React from 'react';
import {postService} from "@/services/api.service";
import PostComponent from "@/components/PostComponent";

const PostsPage = async () => {

    let allPosts = await postService.getAllPosts()

    return (
        <div>

            {
                allPosts.map((post) => <PostComponent key={post.id} post={post}/>)
            }

        </div>
    );
};

export default PostsPage;