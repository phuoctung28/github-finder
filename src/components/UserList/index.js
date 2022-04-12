import React from "react";
import { UserItem } from "../UserItem";

export const UserList = (props) => {
  const { users } = props;
  const emptyData = <h3>No data</h3>;
  return (
    <div className="flex flex-wrap">
      {users.length !== 0
        ? users.map((user) => (
            <div className="w-1/3" key={user.login}>
              <UserItem user={user} />
            </div>
          ))
        : emptyData}
    </div>
  );
};
