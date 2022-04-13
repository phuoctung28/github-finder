import React from "react";

export const RepoItem = (props) => {
  const { name, description, fork, forks_url, html_url } = props.repo;
  return (
    <div className="flex flex-col h-80 flex-wrap justify-center p-16 gap-4 border rounded-lg m-4">
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-bold text-3xl"
      >
        {name}
      </a>
      {fork ? (
        <div className="flex">
          Fork from{" "}
          <a
            href={forks_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400"
          >
            {forks_url}
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="text text-xl">{description}</div>
    </div>
  );
};
