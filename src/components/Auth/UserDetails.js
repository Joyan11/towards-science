/** @format */

import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useLike } from "../../contexts/like-context";
import { usePlaylist } from "../../contexts/playlist-context";
import { useWatchList } from "../../contexts/watchlist-context";
import "../../css/user.css";
export const UserDetails = () => {
  const {
    userData: { username, email },
    logOut,
  } = useAuth();

  const { dispatchplaylist } = usePlaylist();
  const { dispatchwatchlist } = useWatchList();
  const { dispatchgeneral } = useGeneralContext();
  const { dispatchlike } = useLike();

  const logOutHandler = () => {
    dispatchgeneral({ type: "RESET" });
    dispatchlike({ type: "RESET" });
    dispatchwatchlist({ type: "RESET" });
    dispatchplaylist({ type: "RESET" });
    logOut();
  };

  return (
    <div className="user--container">
      <h2>User Details</h2>
      <p className="user user-fname ">
        Username: <span>{username}</span>
      </p>

      <p className="user user-email">
        Email: <span>{email}</span>{" "}
      </p>
      <button
        className="btn btn--round btn-primary logout"
        onClick={() => logOutHandler()}>
        Logout
      </button>
      {/* <Logout logout={logOut} /> */}
    </div>
  );
};
