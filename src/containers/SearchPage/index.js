import React, { useState } from "react";
import { SearchUser } from "../../components/SearchUser";
import { UserList } from "../../components/UserList";
import { UserAPI } from "../../services/UserAPI";
export const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const onSearchUser = async (keyword) => {
    if (!keyword) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false)
      }, 2000);
      return;
    }
    try {
      const apiResponse = await UserAPI.searchUser(keyword);
      const userData = apiResponse?.data?.items || [];
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-8">
    {isError && (
      <div className="bg-red-300 border border-red-500 my-4 py-4 px-4 rounded-md">Please enter the keyword before searching</div>
    )}
      <SearchUser onSearchUser={onSearchUser} />
      <UserList users={users} />
    </div>
  );
};
