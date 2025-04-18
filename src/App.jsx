import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
};

export default App;
