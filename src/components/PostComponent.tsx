import React, {FC} from 'react';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {

    return (
        <div>
            <hr/>
            <ul>
                <li>id :{post.id}</li>
                <li><b>Title :</b> {post.title}</li>
                <li><b>Body :</b> {post.body}</li>
            </ul>
        </div>
    );
};

export default PostComponent;