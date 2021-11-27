import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './dokimi.css'

const accessToken = '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'

function Dokimi() {
 const [postsPerPage] = useState(8);
 const [offset, setOffset] = useState(5);
 const [posts, setAllPosts] = useState([]);
 const [repos, setAllRepos] = useState([]);
 const [names, setAllNames] = useState([])
 const [firstData, setFirstData] = useState([]);
 const [folloower, setAllFollowers] = useState([]);
 const [secondData, setSecondData] = useState([])
 const [pageCount, setPageCount] = useState(0)
 

//  axios.interceptors.request.use(
//    config => {
//      config.headers.authorization = `Bearer ${accessToken}`;
//      return config;
//    },
//    error=> {
//      return Promise.reject(error);
//    }
//  );
 
 const getPostData = (data, data2 ) => {
 
   return (
     
     data.map(post => <div className="container" key={post.id}>
       <p>Login: {post.login}</p>
       <img src={post.avatar_url}/>
=     </div>)
   )
 }

 const getDAta2 = (data2) => {
  (
    data2.map(item => <div className="container" key={item.id}>
    <p>Login: {item.name}</p>
    <p>{item.location}</p> 
  </div>)
   )
 }
 const getAllPosts = async () => {
   
 const res = await axios.get(`https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=5&per_page=40`)
   const data = res.data
     let rep =[]
     
    const login = data.items.map(item=> rep.push(item.login))
    const slice = data.items.slice(offset - 5 , offset - 5 + postsPerPage)
    // For displaying Data
    // console.log(rep)
    const postData = getPostData(slice)
    setFirstData(rep)

  setAllPosts(postData)
  setPageCount(Math.ceil(data.items.length / postsPerPage))
     }
  


 

 
 const getRepooos = async () => {
  for(let i =0; i< firstData.length; i++){
    const res =  await axios.get(`https://api.github.com/users/${firstData[i]}`)  
    const data = res.data
    console.log(data.followers)
// return (
// data.map(item => <div className="container" key={item.id}>
// <p>Login: {item.name}</p>
// <p>{item.location}</p> 
// </div>))
  
      }
 }

//  }
 const handlePageClick = (event) => {
   const selectedPage = event.selected;
   setOffset(selectedPage + 1)
 };
 useEffect(() => {
   getAllPosts()
   getRepooos()

 }, [offset], [firstData])
 
 return (
   <div className="main-app">
    
     {/* Display all the posts */}
     {posts}
 
     {/* Using React Paginate */}
     <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"} />
   </div> );
}
 
export default Dokimi;