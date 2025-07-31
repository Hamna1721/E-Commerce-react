import { Outlet, NavLink } from "react-router";
export default function Dashboard() {
    return (
        <>
            <div>
                <h2>dashboard</h2>
                <NavLink to="account">
                    <div><button>Account</button></div>
                </NavLink>
                
               <NavLink to ="control">
                 <div><button>Control</button></div>
               </NavLink>
            </div>
            <Outlet />
        </>

    )
}