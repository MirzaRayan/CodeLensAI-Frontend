import { FiCheckCircle, FiShield, FiCheck } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";
import icon from "../assets/CodeLensAI-icon.svg";
import LogoLoader from "./LogoLoader.jsx";

const ReviewResults = ({ review, loader }) => {

  const getText = (item) => {
    if (typeof item === "string") return item;
    if (typeof item === "object") return item?.message || item?.code || "";
    return "";
  };

  const score = review?.score || 0;
  const width = (score / 10) * 100;

  const data = [
    { id: 1, icon: <FiCheckCircle className="text-red-700" />, description: "Finds bugs" },
    { id: 2, icon: <FiShield className="text-amber-800" />, description: "Checks security" },
    { id: 3, icon: <TbRocket className="text-blue-500" />, description: "Improves performance" },
    { id: 4, icon: <FiCheck className="text-green-500" />, description: "Best practices" },
  ];

  return (
    <div className="reviewSection flex justify-evenly flex-col bg-white w-[95%] sm:w-[90%] md:w-[40%] rounded-lg px-3 sm:px-4 m-auto h-auto md:h-125 md:mr-8 md:mt-23 overflow-y-auto shrink-0 gap-3 py-4">

      {/* 1 — Loader State */}
      {loader && (
        <div className="w-full h-full flex items-center justify-center">
          <LogoLoader />
        </div>
      )}

      {/* 2 — Empty State */}
      {!loader && !review && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <img src={icon} alt="" className="h-20" />
          <h1 className="text-xl font-semibold">Ready to Review</h1>
          <h3 className="text-[#888780] text-sm">
            Paste your code on the top and click review
          </h3>
          <div className="info flex flex-col justify-center">
            {data?.map((item) => (
              <div className="w-60 flex items-center gap-5" key={item?.id}>
                <h1 className="inline p-1">{item?.icon}</h1>
                <h1 className="inline text-sm">{item?.description}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3 — Review Results */}
      {!loader && review && (
        <div className="flex justify-evenly flex-col gap-3 py-4">

          {/* Score Section */}
          <div className="codeQualityScore w-full bg-[#F5F5F5] rounded-lg text-sm p-3 sm:p-4">
            <h1 className="text-[#888780] text-start mb-2">Code quality score</h1>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-col gap-2 flex-1 min-w-[120px] text-start">
                <h1>
                  <span className="text-amber-900 font-bold text-2xl">{review?.score || 0}</span>
                  <span className="text-gray-500">/10</span>
                </h1>
                <div className="bar w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-300" style={{ width: `${width}%`, backgroundColor: "brown" }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 place-items-end shrink-0">
                <h1 className="bg-red-100 text-red-800 rounded-2xl w-fit px-2 sm:px-3 py-[1px] text-xs sm:text-sm">{review?.bugs?.length || 0} Bugs</h1>
                <h1 className="bg-amber-100 text-amber-900 rounded-2xl w-fit px-2 sm:px-3 py-[1px] text-xs sm:text-sm">{review?.security?.length || 0} Security</h1>
                <h1 className="bg-[#E6F1FB] text-[#0C447C] rounded-2xl w-fit px-2 sm:px-3 py-[1px] text-xs sm:text-sm">{review?.performance?.length || 0} Performance</h1>
                <h1 className="bg-green-100 text-green-800 rounded-2xl w-fit px-2 sm:px-3 py-[1px] text-xs sm:text-sm">{review?.bestPractices?.length || 0} Practice</h1>
              </div>
            </div>
          </div>

          {/* Bugs */}
          <div className="responseDiv2 w-full h-fit bg-[#F5F5F5] rounded-lg pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm relative px-3 sm:px-5">
              <FiCheckCircle className="text-red-700 h-10 shrink-0" />
              <h1>Bugs found</h1>
              <h1 className="bg-red-100 text-red-800 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm absolute right-3 sm:right-5">{review?.bugs?.length || 0}</h1>
            </div>
            <div className="bugs">
              {review?.bugs?.map((item, index) => (
                <div key={index} className="flex items-start gap-2 py-2 border-b border-b-[#d6d2d2] last:border-b-0 w-[90%] m-auto">
                  <p className="text-xs sm:text-sm text-[#888780] text-start">{getText(item)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="responseDiv3 w-full h-fit bg-[#F5F5F5] rounded-lg pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm relative px-3 sm:px-5">
              <FiShield className="text-amber-800 h-10 shrink-0" />
              <h1>Security issues</h1>
              <h1 className="bg-amber-100 text-amber-900 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm absolute right-3 sm:right-5">{review?.security?.length || 0}</h1>
            </div>
            <div className="bugs">
              {review?.security?.map((item, index) => (
                <div key={index} className="flex items-start gap-2 py-2 border-b border-b-[#d6d2d2] last:border-b-0 w-[90%] m-auto">
                  <p className="text-xs sm:text-sm text-[#888780] text-start">{getText(item)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="responseDiv4 w-full h-fit bg-[#F5F5F5] rounded-lg pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm relative px-3 sm:px-5">
              <TbRocket className="text-blue-500 h-10 shrink-0" />
              <h1>Performance</h1>
              <h1 className="bg-[#E6F1FB] text-[#0C447C] rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm absolute right-3 sm:right-5">{review?.performance?.length || 0}</h1>
            </div>
            <div className="bugs">
              {review?.performance?.map((item, index) => (
                <div key={index} className="flex items-start gap-2 py-2 border-b border-b-[#d6d2d2] last:border-b-0 w-[90%] m-auto">
                  <p className="text-xs sm:text-sm text-[#888780] text-start">{getText(item)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="responseDiv5 w-full h-fit bg-[#F5F5F5] rounded-lg pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm relative px-3 sm:px-5">
              <FiCheck className="text-green-500 h-10 shrink-0" />
              <h1>Best practices</h1>
              <h1 className="bg-green-100 text-green-800 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm absolute right-3 sm:right-5">{review?.bestPractices?.length || 0}</h1>
            </div>
            <div className="bugs">
              {review?.bestPractices?.map((item, index) => (
                <div key={index} className="flex items-start gap-2 py-2 border-b border-b-[#d6d2d2] last:border-b-0 w-[90%] m-auto">
                  <p className="text-xs sm:text-sm text-[#888780] text-start">{getText(item)}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ReviewResults;