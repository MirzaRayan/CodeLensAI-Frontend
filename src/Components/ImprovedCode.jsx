import { useState } from "react";
import Editor from "@monaco-editor/react";

const ImprovedCode = ({ improvedCode, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(improvedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!improvedCode) return null;

  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">

        {/* Left — Title */}
        <div className="flex items-center gap-2">
          <span className="text-base">🚀</span>
          <p className="text-sm font-medium text-gray-800">
            Improved Code
          </p>
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 font-medium">
            AI Generated
          </span>
        </div>

        {/* Right — Language + Copy */}
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">
            {language}
          </span>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border transition-all duration-200 cursor-pointer
              ${copied
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>

      </div>

      {/* Monaco Editor */}
      <Editor
        height="300px"
        language={language}
        theme="vs-dark"
        value={improvedCode}
        options={{
          readOnly: true,
          fontSize: 13,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          wordWrap: "on",
          padding: { top: 12, bottom: 12 },
          renderLineHighlight: "none",
          contextmenu: false,
        }}
      />

      {/* Footer */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-t border-gray-200">
        <span className="text-xs">💡</span>
        <p className="text-xs text-gray-400">
          This is AI generated code. Always review before using in production.
        </p>
      </div>

    </div>
  );
};

export default ImprovedCode;