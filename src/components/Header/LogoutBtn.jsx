import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";

import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const LogutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
    return(
           <button
                class="flex min-w-[84px] max-w-[480px]
                 cursor-pointer items-center
                  justify-center overflow-hidden
                   rounded-xl h-10 px-4 flex-1 bg-[#dce8f3] text-[#101518] hover:[#101518] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={LogutHandler}
              
              >
                <span class="truncate">Log out</span>
              </button>
    )
}



export default LogoutBtn;