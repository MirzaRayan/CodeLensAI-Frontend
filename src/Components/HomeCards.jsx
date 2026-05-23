import { FiShield, FiCheck, FiCheckCircle } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";


const HomeCards = () => {

    const cardsData = [
        {
            id: 1,
            heading: 'Bug Detection',
            description: 'Find bugs before they reach production',
            img: <FiCheckCircle className="text-red-700 h-10"/>
        },
        {
            id: 2,
            heading: 'Security Analysis',
            description: 'Detect vulnerabilities instantly',
            img: <FiShield className="text-amber-800 h-10"/>
        },
        {
            id: 3,
            heading: 'Performance Tips',
            description: 'Optimize for speed and efficiency',
            img: <TbRocket className="text-blue-500 h-10"/>
        },
        {
            id: 4,
            heading: 'Best Practices',
            description: 'Follow industry standards',
            img: <FiCheck className="text-green-500 h-10"/>
        }
    ]
    
  return (
    <div className="cardsContainer p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center justify-items-center lg:w-full m-auto md:w-[75%] gap-5">
      {
        cardsData.map((data) => {
            return (
                <div className="flex flex-col items-center justify-center my-5 rounded-lg border-[#d6d2d2] p-5 bg-white sm:w-66 w-80 h-40 sm:h-50 lg:w-56 xl:w-70" key={data.id}>
                    <h1>{data.img}</h1>
                    <h1 className="font-semibold text-xl text-center">{data.heading}</h1>
                    <h3 className="text-[#888780] text-sm text-center py-2">{data.description}</h3>
                </div>
            )
        })
      }
    </div>
  )
}

export default HomeCards
