import { Editor } from "@monaco-editor/react";
import { FiTrash2, FiCopy, FiCheck } from "react-icons/fi";

const CodeEditor = ({ code, setCode, copied, register, handleSubmit, onSubmit, handleCopy }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-5 w-full p-4"
    >
      <div className="w-full flex items-center justify-around md:w-[60%]">
        <h1>Your code</h1>
        <select
          {...register("language")}
          className="py-2 px-4 rounded-md bg-[#185FA5] text-white border text-sm"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <div className="w-[90%] m-auto">
        <Editor
          height="500px"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>

      <div className="buttons text-sm flex items-center justify-center gap-2">
        <button
          type="submit"
          className="bg-[#185FA5] text-white py-2 px-4 rounded cursor-pointer"
        >
          Review Code
        </button>
        <button
          type="button"
          className="border border-[#d6d2d2] p-2 rounded-sm cursor-pointer"
          onClick={() => setCode("")}
        >
          <FiTrash2 />
        </button>
        <button
          type="button"
          className="border border-[#d6d2d2] p-2 rounded-sm cursor-pointer"
          onClick={handleCopy}
        >
          {copied ? <FiCheck className="text-green-700" /> : <FiCopy />}
        </button>
      </div>
    </form>
  );
};

export default CodeEditor;