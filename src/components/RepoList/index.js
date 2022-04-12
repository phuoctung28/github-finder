import React, { Fragment } from "react";
import { RepoItem } from "../RepoItem";

export const RepoList = (props) => {
  const { repos } = props;
  const emptyData = <h3>No data</h3>;

  return <div className="flex flex-wrap">
    {repos.length !== 0 ? repos.map((repo) => (
      <div className="w-1/2" key={repo.id}>
        <RepoItem repo={repo}/>
      </div>
    )) : emptyData}
  </div>;
};
