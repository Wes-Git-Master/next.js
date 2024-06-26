import React from 'react';
import {userService} from "@/services/api.service";

type Params = { params: { id: string } }

const UserPage = async ({params}: Params) => {

    let user = await userService.getUsersById(params.id);

    return (
        <div>

            {user?.name} : {user?.email}

        </div>
    );
};

export default UserPage;