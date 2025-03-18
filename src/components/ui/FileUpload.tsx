import { useState } from "react";

const FileUploader = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Upload File
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      {fileName && <p className="text-sm text-gray-600">{fileName}</p>}
    </div>
  );
};

export default FileUploader;
