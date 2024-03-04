import React, { useRef, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();
  const uploadReference = useRef();
  const progressReference = useRef();
  const statusReference = useRef();
  const loadReference = useRef();

  function handleUploadFile() {
    const file = uploadReference.current.files[0];
    console.log(file);
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append("image", file);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleAbort, false);

    xhr.open("POST", "https://v2.convertapi.com/upload");
    xhr.send(formData);
  }

  function handleProgress(event) {
    loadReference.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`;
    const precentage = (event.loaded / event.total) * 100;
    progressReference.current.value = Math.round(precentage);
    statusReference.current.innerHTML = `${Math.round(
      precentage
    )} % uploaded...`;
  }

  function handleSuccess(event) {
    statusReference.current.innerHTML = event.target.responseText;
    progressReference.current.value = 0;
  }

  function handleError() {
    statusReference.current.innerHTML = "Upload failed! Please Try again";
  }

  function handleAbort() {
    statusReference.current.innerHTML = "Upload aborted! Please Try again";
  }

  return (
    <div className="file-upload-container">
      <h1>File Upload</h1>
      <input
        onChange={handleUploadFile}
        type="file"
        name="file"
        ref={uploadReference}
      />
      <label>
        File Progress :{" "}
        <progress ref={progressReference} value={"0"} max={"100"} />
      </label>

      <p ref={statusReference}></p>
      <p ref={loadReference}></p>

      <img
        src={file}
        alt="file-upload"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default FileUpload;
