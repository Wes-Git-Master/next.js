const base: string = 'https://jsonplaceholder.typicode.com'

const urlBuilder = {
    userBaseUrl: '/users',
    users: {
        allUsers: () => base + urlBuilder.userBaseUrl,
        singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id
    },
    postBaseUrl: '/posts',
    posts: {
        allPosts: () => base + urlBuilder.postBaseUrl,
        postsOfSingleUser: (userId: string | number) => base + urlBuilder.postBaseUrl + '/' + userId
    },
    commentsBaseUrl: '/comments',
    comments: {
        allComments: () => base + urlBuilder.commentsBaseUrl,
        commentsOfSinglePost: (postId: string | number) => base + urlBuilder.postBaseUrl + '/' + postId + urlBuilder.commentsBaseUrl
    }

}

export {urlBuilder}