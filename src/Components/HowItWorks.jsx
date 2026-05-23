const HowItWorks = () => {


    const steps = [
        {
            id: 1,
            heading: "Paste your code",
            description: "Use the built-in code editor"
        },
        {
            id: 2,
            heading: "Select language",
            description: "JS, Python, Java and more"
        },
        {
            id: 3,
            heading: "Get AI review",
            description: "Instant detailed feedback"
        },
    ]
  return (
    <div className="bg-white flex flex-col items-center justify-center py-15 gap-15">
      <h1 className="text-2xl font-semibold">How it works</h1>

      {/* steps */}
      <div className="steps flex flex-col gap-5 sm:flex-row w-full items-center sm:justify-center lg:justify-around sm:gap-15 lg:text-2xl">
        {
            steps.map((data) => {
                return (
                    <div className="step text-center h-30 " key={data.id}>
                        <h1 className="w-fit rounded-full py-2 px-[14px] bg-[#E6F1FB] text-[#0C447C] text-sm font-semibold m-auto">{data.id}</h1>
                        <h1 className="font-semibold py-2">{data.heading}</h1>
                        <h3 className="text-[#888780] text-sm lg:text-md">{data.description}</h3>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default HowItWorks
