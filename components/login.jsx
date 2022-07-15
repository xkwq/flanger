import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href="/search">
        <button className="px-3 py-2 text-xl font-light rounded-md bg-slate-300 text-slate-800 hover:bg-slate-200">
          Get started
        </button>
      </Link>
    );
  }
  return (
    <>
      <button
        className="px-3 py-2 text-xl font-light rounded-md bg-slate-300 text-slate-800 hover:bg-slate-200"
        onClick={() =>
          signIn("github", {
            callbackUrl: `${window.location.origin}/search`,
          })
        }
      >
        Sign in with GitHub
      </button>
    </>
  );
};

export default Login;
