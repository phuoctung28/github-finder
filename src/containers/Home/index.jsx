import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { UserList } from '../../components/UserList';
import { UserAPI } from '../../services/UserAPI';

export const Homepage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiResponse = await UserAPI.fetchUser();
        setUsers(apiResponse.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className='m-8'>
      <UserList users={users}/> 
    </div>
  )
}
