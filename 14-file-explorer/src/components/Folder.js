import React, { useState, useEffect } from "react";

function Folder({
  handleInsertNode,
  handleDeleteNode,
  handleUpdateNode,
  explorer,
}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(explorer.name);
  const [error, setError] = useState("");

  useEffect(() => {
    let errorTimer;
    if (error) {
      errorTimer = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(errorTimer);
  }, [error]);

  const handleNewNode = (e, isFolder) => {
    e.stopPropagation();
    const newError = checkValidFolder(isFolder);
    if (newError) {
      setError(newError);
      return;
    }
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const checkValidFolder = (isFolder) => {
    if (explorer.isFolder && !expand && isFolder) {
      return "Please expand the folder first.";
    }
    if (!explorer.isFolder && isFolder) {
      return "Cannot create a folder under a file.";
    } else if (explorer.name === "root" && !isFolder) {
      return "Cannot create a file in the root directory.";
    } else if (explorer.name === "package.json" && !isFolder) {
      return "Cannot create a file named 'package.json'.";
    }
    return "";
  };

  const clearError = () => {
    setError("");
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNewName(explorer.name);
  };

  const handleSaveEdit = () => {
    if (newName.trim() !== "") {
      handleUpdateNode(explorer.id, newName);
      setEditing(false);
    } else {
      setError("Please provide a valid name.");
    }
  };

  const onDeleteNode = (e, nodeId) => {
    e.stopPropagation();
    if (explorer.name === "root") {
      setError("Cannot delete the root directory.");
      return;
    }
    handleDeleteNode(nodeId);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div style={{ marginTop: 6 }}>
      <div onClick={() => setExpand(!expand)} className="folder">
        <span>
          {explorer.isFolder && (expand ? "- " : "+ ")}
          {explorer.isFolder ? "📂" : "📄"}{" "}
          {editing ? (
            <input
              type="text"
              value={newName}
              onChange={handleInputChange}
              autoFocus
              onBlur={handleSaveEdit}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSaveEdit();
              }}
            />
          ) : (
            <span onDoubleClick={handleEdit}>{explorer.name}</span>
          )}
        </span>
        <div>
          {!editing && (
            <button onClick={handleEdit}>
              <span role="img" aria-label="edit">✏️</span>
            </button>
          )}
          {!editing && explorer.isFolder && (
            <>
              <button onClick={(e) => handleNewNode(e, true)}>
                <span role="img" aria-label="add folder">📁+</span>
              </button>
              <button onClick={(e) => handleNewNode(e, false)}>
                <span role="img" aria-label="add file">📄+</span>
              </button>
            </>
          )}
          {!editing && explorer.name !== "root" && (
            <button onClick={(e) => onDeleteNode(e, explorer.id)}>
              <span role="img" aria-label="delete">❌</span>
            </button>
          )}
        </div>
      </div>

      {error && <div style={{ color: "red", paddingLeft: 20 }}>{error}</div>}

      <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
                  setShowInput({ ...showInput, visible: false });
                }
              }}
              onBlur={() => {
                clearError();
                setShowInput({ ...showInput, visible: false });
              }}
            />
          </div>
        )}

        {explorer.items.map((exp) => (
          <Folder
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleUpdateNode={handleUpdateNode}
            key={exp.id}
            explorer={exp}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
