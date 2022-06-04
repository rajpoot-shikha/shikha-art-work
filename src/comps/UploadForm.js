import React from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //define a local state for file
  const [file, setFile] = React.useState(null);
  //define error
  const [error, setError] = React.useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    //if user selects png and jpeg image
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      {console.log("ERROR" + error)}
      <label>
        <input type="file" onChange={changeHandler}></input>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file-name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
