import { useSession, signOut } from "next-auth/react";

const Search = () => {
  const { data: session } = useSession({ required: true });

  if (session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h3 className="text-3xl font-medium text-slate-300">
          Search for an album!
        </h3>
      </div>
    );
  }
};

export default Search;
