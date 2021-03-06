import React, { useState } from "react";

export const SearchUser = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSearchUser(searchValue);
  };
  const onClearHandler = (e) => {
    e.preventDefault();
    setSearchValue("");
    props.onClearUser();
  }
  return (
    <form
      className="flex flex-col justify-center my-12 space-y-4"
      onSubmit={onSubmitHandler}
    >
      <input
        className="rounded-md"
        type="text"
        onChange={onChangeHandler}
        value={searchValue}
      /> 
      <button
        type="submit"
        className="bg-black text-white font-semibold text-xl rounded-md px-4 py-2"
      >
        Search
      </button>
      <button onClick={onClearHandler} className="bg-gray-200 text-gray-500 font-semibold text-xl rounded-md px-4 py-2">
        Clear
      </button>
    </form>
  );
};
