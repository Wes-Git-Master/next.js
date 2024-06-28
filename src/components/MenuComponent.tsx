import React from 'react';
import Link from "next/link";
import NavLinkClientComponent from "@/components/navlick_client_component/NavLinkClientComponent";

const MenuComponent = () => {

    return (
        <div>

            <ul>
                <li>
                    <Link href={'/'}>home</Link>
                </li>
                <li>
                    <NavLinkClientComponent path={'/users'}>users</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/posts'}>users</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/comments'}>comments</NavLinkClientComponent>
                </li>
            </ul>

        </div>
    );
};

export default MenuComponent;