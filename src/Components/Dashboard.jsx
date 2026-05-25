import { useState } from "react";
import { useForm } from "react-hook-form";
import CodeEditor from "./CodeEditor.jsx";
import ReviewResults from "./ReviewResults.jsx";
// import ImprovedCode from './ImprovedCode.jsx'

const Dashboard = () => {
  const [code, setCode] = useState("// write your code here");
  const [copied, setCopied] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      language: "javascript",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data, code });
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
        <ReviewResults />
      </div>
      {/* <ImprovedCode improvedCode={`const x = 1\nconsole.log(x)`}
    language="javascript"/> */}
    </div>
  );
};

export default Dashboard;