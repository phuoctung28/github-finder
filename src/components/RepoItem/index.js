import React from "react";

export const RepoItem = (props) => {
  const { name, description, fork, forks_url, html_url } = props.repo;
  return (
    <div className="flex flex-col h-80 flex-wrap justify-center md:p-16 md:gap-4 border rounded-lg m-4">
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-bold md:text-3xl text-xl mx-auto md:mx-0"
      >
        {name}
      </a>
      {fork ? (
        <div className="md:flex break-words">
          Fork from{" "}
          <a
            href={forks_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400 break-words"
          >
            {forks_url}
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:text md:text-xl text-lg break-words md:mx-0 md:px-0 px-2 mx-auto">{description}</div>
    </div>
  );
};
