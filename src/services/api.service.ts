const base: string = 'https://jsonplaceholder.typicode.com'

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id
}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers(),{
            // cache: 'no-cache'    - dynamic fetch
            // cache: 'no-store'    - SSR
            // cache: 'force-cache' - SSG
            // next: {revalidate: 60} - incremental fetch


        })
            .then(value => value.json());
        return users

    },
    getUsersById: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.singleUser(id))
            .then(value => value.json());
        return user
    }
}
export {
    userService
}