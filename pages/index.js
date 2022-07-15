import Login from "../components/login";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-slate-300">
        <h1 className="mb-4 font-bold text-7xl">Flanger</h1>
        <h3 className="mb-10 text-2xl font-medium">
          Rate and review your favorite albums.
        </h3>
        <Login />
      </div>
    </div>
  );
};

export default Home;
