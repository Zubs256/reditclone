
import React from "react";
import Link from "next/link";
import { fetchUser } from "@/lib/fetchUser";
import Logout from "./Logout";
export async function NavBar() {
  const loggedInUser = await fetchUser();
  // const loggedInUser2 = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="navbar">
      <div className="emoji">
      <img className="pic" src="/images/icon.png"/>
       
        <Link href={"/"}> Home</Link>
      </div>

      <input className="search" type="text" placeholder="Search a reddit" />

      {loggedInUser.id && (
        <Link href={"/submit"} className="sub">
          ➕ Create a Post
        </Link>
      )}

      {loggedInUser.id && (
        <>
          {/* <Link className="sub" href={"/subreddits"}>
            Subreddits
          </Link> */}
          <span className="welcome">Welcome {loggedInUser.username}</span>
          <Logout></Logout>
        </>
      )}

      {!loggedInUser.id && (
        <>
          <Link className="sub" href={"/Login"}>
            Login
          </Link>
        </>
      )}
    </div>
  );
}