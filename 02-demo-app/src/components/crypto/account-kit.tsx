"use client";

import {
    useAuthModal,
    useLogout,
    useSignerStatus,
    useUser,
} from "@account-kit/react";

export function AccountKit() {
    const user = useUser();
    const { openAuthModal } = useAuthModal();
    const signerStatus = useSignerStatus();
    const { logout } = useLogout();
   
    return (
      <>
      {signerStatus.isInitializing ? (
        <>Loading...</>
      ) : user ? (
        <div className="flex flex-col gap-2 p-2">
          <p className="text-xl font-bold">Success!</p>
          <p>You are logged in as {user.email ?? "anon"}.</p>
          <p>Your address is {user.address}</p>
              
          <button
            className="akui-btn akui-btn-primary mt-6"
            onClick={() => logout()}
          >
            Log out
          </button>

          <button
            className="akui-btn akui-btn-primary mt-6"
            onClick={() => logout()}
          >
            Send Token
          </button>
        </div>
      ) : (
        <button className="akui-btn akui-btn-primary" onClick={openAuthModal}>
          Login
        </button>
      )}
      </>
    );
}