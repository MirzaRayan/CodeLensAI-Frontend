import { useState } from "react";
import { useForm } from "react-hook-form";
import CodeEditor from "./CodeEditor.jsx";
import ReviewResults from "./ReviewResults.jsx";
import ImprovedCode from "./ImprovedCode.jsx";
import axios from "axios";

const Dashboard = () => {
  const [code, setCode] = useState("// write your code here");
  const [copied, setCopied] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [improvedCode, setImprovedCode] = useState(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      language: "javascript",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/reviews/review-code", {
        code,
        language: data.language,
      });
      console.log(response.data.data.review);
      setReviewData(response.data.data.review);
      setImprovedCode(response.data.data.review.improvedCode);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mainDiv flex flex-col justify-center text-center items-center py-10 gap-10">
      <h1 className="font-semibold md:text-2xl">Code reviewer</h1>
      <h3 className="text-[#888780] text-sm">
        Paste your code and get instant AI feedback
      </h3>
      <div className="flex flex-col gap-10 md:gap-5 md:flex-row items-center justify-center w-full">
        <CodeEditor
          code={code}
          setCode={setCode}
          copied={copied}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          handleCopy={handleCopy}
        />
        <ReviewResults review={reviewData} loader={loading} />
      </div>
      {improvedCode && <ImprovedCode improvedCode={improvedCode} />}
    </div>
  );
};

export default Dashboard;
