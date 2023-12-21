import Link from "next/link.js";

export default function navbar (){
  return <div className="barstyle">
    <Link href={"/"}>Home</Link>
    <Link href={"/subreddits"}>subreddits</Link>
    <Link href={"/register"}>Register</Link>
    <Link href={"/logout"}>Logout</Link>
  </div>
}