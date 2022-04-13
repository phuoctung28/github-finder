import React, { useState } from "react";
import { SearchUser } from "../../components/SearchUser";
import { UserList } from "../../components/UserList";
import { UserAPI } from "../../services/UserAPI";
export const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const onSearchUser = async (keyword) => {
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
      <SearchUser onSearchUser={onSearchUser} />
      <UserList users={users} />
    </div>
  );
};
