import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
export const UserItem = (props) => {
  const navigate = useNavigate();
  const { avatar_url, login } = props.user;
  const onRedirectToUserDetail = () => {
    navigate(`/users/${login}`)
  }
  return (
    <div className="flex flex-col flex-wrap items-center justify-center p-16 gap-4 border rounded-lg m-4">
      <img className="user-img" src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <button className="border bg-gray-300 py-2 px-4 rounded-md" onClick={onRedirectToUserDetail}>More</button>
    </div>
  );
};
