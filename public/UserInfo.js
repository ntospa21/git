// import React, {useEffect, useState} from 'react'
// import { MdLocationOn } from 'react-icons/md';
// import { RiGitRepositoryFill} from 'react-icons/ri'
// import {GiShadowFollower} from 'react-icons/gi'
// import {RiUserFollowFill} from 'react-icons/ri'
// const  UserInfo = () =>{
//     const [name , setName]=useState('')
//     const [userName, setUserName] = useState('')
//     const [followers, setFollowers] = useState('')
//     const [following, setFollowing] =useState('')
//     const [repos, setRepos] = useState('')
//     const [gists, setGists] = useState('')
//     const [avatar, setAvatar] = useState('')
//     const [location, setLocation] = useState('')
//     useEffect(()=>{
//         fetch('https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order+id=1')
//         .then(res=> res.json())
//         .then(data =>{
//             setData([data])
//         });
//     }, []);

//     const setData = ({
//         name,
//         login,
//         followers,
//         following,
//         public_repos,
//         avatar_url


//     }) => {
//         setName(name);
//         setUserName(login);
//         setFollowers(followers);
//         setFollowing(following);
//         setRepos(public_repos);
//         setAvatar(avatar_url);
//         setLocation(location)
//     }

//     return (
//         <div className='userinfo2'>
//         <img src='https://avatars.githubusercontent.com/u/49450247?v=4'
//         className='p-2 avatar' 
//             width='130'
//             height='130'
//             alt='profileimage'
//         />     
//         <div className='user_infoDet'>
//             <h5>{name}</h5>
//             <div className='user_infos'>
//             <div className='user_infos'>
//                     <i />
//                     <span>{userName}</span>
//           <div className='user_infos'>
//                  <i ><MdLocationOn/></i>
//              <span>{location}</span>
//             </div>
//             <div className='user_infos'>
//              <i ><RiGitRepositoryFill/></i>
//             <span>{repos}</span>

//             </div>
//                  <div className='user_infos'>
//            <i><GiShadowFollower/></i>
//            <span>{followers}</span>
    
// </div>
// <div className='user_infos'>
//     <i><RiUserFollowFill/></i>
//     <span>{following}</span>
    
// </div>
// </div>
//             </div>
//         </div>      
//         </div>
//     )
// }

// export default UserInfo
