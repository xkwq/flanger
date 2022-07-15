import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="px-4 py-4 bg-slate-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <p className="text-xl text-slate-300">Welcome, {session.user.name}!</p>
        <button
          className="px-2 py-1 text-xl rounded-md text-slate-300 bg-slate-900 hover:bg-stone-900"
          onClick={() => signOut({ callbackUrl: window.location.origin })}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
