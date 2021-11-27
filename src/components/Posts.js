import React from "react";

const Infos = ({ infos, loading }) => {
  if (loading) {
    return <h1>Loading</h1>;
  }
  // debugger;
  return (
    <ul className="list-group mb-3">
    {infos.map(item => <div className="container" key={item.id} >
     <p>Name: {item.login}</p>
       <p>location: {item.location}</p>
       <img src={item.avatar_url}/>
       <p>Full Name : {item.name}</p>
       <p>number of public gist: {item.public_gists}</p>
       <p>Number of public repos:{item.public_repos}</p>
       <p>Number of Followers: {item.followers}</p>
       <p>number of following users:{item.following}</p>

     </div>)}
    </ul>
  );
};

export default Infos;
