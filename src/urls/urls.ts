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
        postsOfSingleUser: (id:string | number) => base + urlBuilder.postBaseUrl + '/' + id
    }

}

export {urlBuilder}