import {urlBuilder} from "@/urls/urls";


const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urlBuilder.users.allUsers())
            .then(value => value.json());


    },
    getUsersById: async (id: string | number): Promise<IUser | null> => {
        return await fetch(urlBuilder.users.singleUser(id))
            .then(value => value.json());

    }
}

const postService = {

    getAllPosts: async (): Promise<IPost[]> => {
        return await fetch(urlBuilder.posts.allPosts())
            .then(value => value.json())
    },
    getPostsOfSingleUser: async (userId: string | number): Promise<IPost[]> => {
        return await fetch(urlBuilder.posts.postsOfSingleUser(userId))
            .then(value => value.json())
    }

}

const commentsService = {

    getAllComments: async (): Promise<IComment[]> => {
        return await fetch(urlBuilder.comments.allComments())
            .then(value => value.json())
    },
    getAllCommentsOfSinglePost: async (postId: string | number): Promise<IComment[]> => {
        return await fetch(urlBuilder.comments.commentsOfSinglePost(postId))
            .then(value => value.json())
    }

}

export {
    userService,
    postService,
    commentsService
}