const base: string = 'https://jsonplaceholder.typicode.com'

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id
}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urlBuilder.allUsers())
            .then(value => value.json());


    },
    getUsersById: async (id: string | number): Promise<IUser | null> => {
        return await fetch(urlBuilder.singleUser(id))
            .then(value => value.json());

    }
}
export {
    userService
}