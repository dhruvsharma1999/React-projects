import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import "./index.css";

//Creating Filelist component containing individual List of the github posts
const FileList = ({ files }) => {
  return (
    <table className="filelist">
      <tbody>
        {files.map((file) => (
          //Using FileListItem component to render the row and column
          // <FileListItem key={file.id} file={file} />
          <tr className="filelist-item" key={file.id}>
            <td className="file-name">{file.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//Proptype declaration
FileList.propType = {
  files: propTypes.array,
};

//Individual File list option
const FileListItem = ({ file }) => {
  <tr className="filelist-item">
    <td className="file-name">{file.name}</td>
  </tr>;
};

//Proptype declaration for FileListITem
FileListItem.propTypes = {
  file: propTypes.object.isRequired,
};

//FileIcon component to render the icons inside the FileList
const FileIcon = ({ file }) => {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
};

//propTypes  for the  FileICon component
FileIcon.prototype = {
  file: propTypes.object.isRequired,
};

//Temp data for creating File list and lists of github posts
const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
