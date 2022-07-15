import { useSession } from "next-auth/react";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchbar";

const Search = () => {
  const { data: session } = useSession({ required: true });

  if (session) {
    return (
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h3 className="text-6xl font-medium mb-11 text-slate-300">
            Search for an album!
          </h3>
          <SearchBar />
        </div>
      </div>
    );
  }
};

export default Search;
