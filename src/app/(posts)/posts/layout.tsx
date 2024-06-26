import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostsLayout metadata'
}

type Props = { children: React.ReactNode }

const PostsLayout = ({children}: Props) => {

    return (
        <div>
            Posts start
            {children}
            Posts end

        </div>
    );
};

export default PostsLayout;