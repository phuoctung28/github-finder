import React, { Fragment } from "react";

export const UserCard = (props) => {
  const { avatar, location, company, name, username, bio, githubUrl } = props;
  const { public_repos, public_gists, following, follower } = props;
  return (
    <Fragment>
      <div className="flex justify-around border py-8">
        <div className="text-center space-y-4 md:mx-0 mx-4">
          <img
            className="rounded-full md:w-48 md:h-48 w-20 h-20 object-cover"
            src={avatar}
            alt=""
          />
          <h3 className="font-bold text-xl">{name}</h3>
          <h4>
            <b>Location: </b>
            {location}
          </h4>
        </div>
        <div className="space-y-8">
          <h3 className="font-bold text-xl">Bio</h3>
          <h3>{bio ? bio : ""}</h3>
          <h3>
            <b>Username:</b> {username}
          </h3>
          <h3>
            <b>Company:</b> {company}
          </h3>

          <button className="bg-black text-white px-2 py-4 rounded-md font-semibold">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Visit github profile
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-center border py-8 my-12 md:flex-row flex-col md:space-y-0 space-y-2">
        <div className="border bg-blue-400 py-2 px-4 rounded-md text-white mx-4">
          Follower: {follower}
        </div>
        <div className="border bg-green-400 py-2 px-4 rounded-md text-white mx-4">
          Following: {following}
        </div>
        <div className="border bg-gray-400 py-2 px-4 rounded-md text-white mx-4">
          Public repos: {public_repos}
        </div>
        <div className="border bg-gray-700 py-2 px-4 rounded-md text-white mx-4">
          Public gists: {public_gists}
        </div>
      </div>
    </Fragment>
  );
};
