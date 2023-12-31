import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const T23_xx_UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
     try {
       const resp = await fetch(url);
       const data = await resp.json();
       console.log('data', data);
       setUsers(data);
     } catch(error){
      console.log(error);
     }
  }

  useEffect(()=>{
    getUsers();
  }, []);

  return (
    <>
      <ul className='users'>
        {users.map((user)=>{
           const {id, login, avatar_url, html_url} = user;
           return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
           )
        })}
      </ul>
    </>
  );
};

export default T23_xx_UseEffectFetchData;
