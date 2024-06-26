import React from 'react';
import {commentsService} from "@/services/api.service";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentsPage metadata'
}

const CommentsPage = async () => {

    let allComments = await commentsService.getAllComments()

    return (
        <div>

            {
                allComments.map((comment => (<div key={comment.id}>
                    <hr/>
                    <li>id: {comment.id}</li>
                    <li>postId: {comment.postId}</li>
                    <li>name: {comment.name}</li>
                    <li>body: {comment.body}</li>
                    <li>email :{comment.email}</li>
                </div>)))
            }

        </div>
    );
};

export default CommentsPage;