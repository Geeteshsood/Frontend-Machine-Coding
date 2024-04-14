import React, { useState } from "react";

const File = ({ explorer }) => {
  const { id, name, isFolder, items } = explorer;

  const [expand, setExpand] = useState(false);
  const [inp, showInp] = useState(false);
  const [fl, showFl] = useState(null);

  const handleButton = (e) => {
    e.stopPropagation();
    setExpand(true);
    showInp(true);
  };

  const handleAdd = (e) => {
    if (e.key !== "Enter") return;

    const obj = {
      id: new Date().getTime(),
      name: e.target.value,
      isFolder: fl,
      items: [],
    };

    console.log(obj);
    items.unshift(obj);
    showInp(false);
  };

  return (
    <div className="px-3 mt-1">
      <div
        onClick={() => setExpand(!expand)}
        className="flex items-center cursor-pointer"
      >
        <div className="flex items-center mr-3">
          <span role="img" aria-label="folder" className="mr-2">
            {isFolder ? "📁" : "📄"}
          </span>
          <span>{name}</span>
        </div>

        <div className="flex" onClick={handleButton}>
          <button
            onClick={() => showFl(true)}
            className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white  mr-2"
          >
            Folder
          </button>
          <button
            onClick={() => showFl(false)}
            className="text-xs px-2 py-1 rounded-md bg-green-500 text-white"
          >
            File
          </button>
        </div>
      </div>

      {expand && (
        <div className="mt-3">
          {inp && (
            <div>
              {fl ? "📁" : "📄"}
              <input
                onKeyDown={handleAdd}
                type="text"
                className="px-3 mt-1"
                placeholder="Enter something..."
              />
            </div>
          )}
          {items.map((e) => {
            return <File key={e.id} explorer={e} />;
          })}
        </div>
      )}
    </div>
  );
};

export default File;
