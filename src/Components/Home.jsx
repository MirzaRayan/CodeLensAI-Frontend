import HomeCards from "./HomeCards.jsx";

const Home = () => {
  return (
    <div className="mainDiv min-h-screen w-full flex items-center justify-center flex-col gap-20 bg-white">

      {/* content  */}
      <div className="content sm:border sm:border-[#d6d2d2] px-4 py-20 flex flex-col items-center justify-center gap-2 sm:w-150 w-full rounded-lg">
        <h3 className="bg-[#E6F1FB] text-[#0C447C] font-semibold text-sm w-fit p-1 rounded-lg">
          Powered by Groq + LLaMA AI
        </h3>
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Review your code instantly with AI
        </h1>
        <h3 className="text-sm text-[#888780] md:text-lg text-center py-3">
          Paste your code and get instant feedback on bugs, security issues,
          performance and best practices with a quality score.
        </h3>
        <div className="buttons flex flex-col w-1/2 m-auto">
          <button className="text-white bg-[#185FA5] rounded-sm p-2 text-sm my-1">Start Reviewing Free</button>
          <button className="border border-[#E0E0E0] rounded-sm p-2 text-sm my-1">See how it works</button>
        </div>
      </div>



      {/* home cards */}
      <div className="cards bg-[#F5F5F5] w-full">
        <HomeCards/>
      </div>
    </div>
  );
};

export default Home;
