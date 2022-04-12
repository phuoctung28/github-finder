import React from "react";

export const RepoItem = (props) => {
  const { name, description, fork, forks_url } = props.repo;
  return (
    <div className="flex flex-col flex-wrap justify-center p-16 gap-4 border rounded-lg m-4">
      <div className="text-blue-500 font-bold text-3xl">{name}</div>
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
      <div className="text-xl">{description}</div>
    </div>
  );
};
