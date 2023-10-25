import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav className="flex justify-between">
      <h1>Michael Asiedu</h1>

      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
