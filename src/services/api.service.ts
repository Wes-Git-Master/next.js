const base: string = 'https://jsonplaceholder.typicode.com'

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id
}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers())
            .then(value => value.json());
        console.log(users)
        return users

    },
    getUsersByid: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.singleUser(id))
            .then(value => value.json());
        console.log(user)
        return user
    }
}
export {
    userService
}