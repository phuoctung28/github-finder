import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RepoList } from "../../components/RepoList";
import { UserCard } from "../../components/UserCard";
import { UserAPI } from "../../services/UserAPI";

export const UserDetail = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const urlParams = useParams();
  const navigate = useNavigate();
  const { login } = urlParams;
  const onRedirectToHome = () => {
    navigate(`/`);
  }
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const apiResponseUsers = await UserAPI.fetchUserInfo(login);
        const apiResponseRepos = await UserAPI.fetchUserRepos(login);
        setUser(apiResponseUsers.data);
        setRepos(apiResponseRepos.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetails();
  }, []);
  return (
    <div className="m-8">
      <button className="bg-gray-400 py-2 px-4 rounded-md  my-2 font-semibold" onClick={onRedirectToHome}>
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/>
          Back to home
        </div>
      </button>
      <UserCard
        avatar={user.avatar_url}
        company={user.company}
        name={user.name}
        location={user.location}
        username={user.login}
        bio={user.bio}
        githubUrl={user.html_url}
        follower={user.followers}
        following={user.following}
        public_gists={user.public_gists}
        public_repos={user.public_repos}
      />
      <RepoList 
        repos={repos}
      />
    </div>
  );
};
