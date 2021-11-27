import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './dokimi.css'
import Modal from "react-modal";
Modal.setAppElement("#root");


const accessToken = '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'


const infos = []
function Info() {
 const [posts, setAllPosts] = useState([]);
 const [login, setLogin]=useState();
    const [names, setNames] = useState([])
    const [location, setLocation] = useState([])
    const [all , setAll] = useState([])
    const [details, setDetails]= useState([]);
    const [infos, setInfos] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [infosPerPage] = useState(10);
    const [interest, setInterest] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [lepto, setLepto]= useState()
    const [desc, setDesc] = useState([])
    const [fullName, setfullName] = useState([])
    const [license, setLicense] = useState([])
    const [stars, setStars] = useState([])
    const [watchers, setWatcher] = useState([])
    const [forks ,setForks] = useState([])
    const [extra, setExtra] = useState([])



  function toggleModal() {
    setIsOpen(!isOpen);
  }


    
    axios.interceptors.request.use(
           config => {
             config.headers.authorization = `Bearer ${accessToken}`;
             return config;
           },
           error=> {
             return Promise.reject(error);
           }
         );

 const fetchUsers = async() =>{
   axios.get('https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=5&per_page=0')
   .then((Response)=>{
       const  all = Response.data;
        let fa =[]
        const login = all.items.map(item=> fa.push(item))
        setAllPosts(fa)
        // console.log(posts)
        let ft =[]
        const login2= all.items.map(item=> ft.push(item.login))
        // console.log(ft)
        setNames(ft)
        // console.log(names)

    }).catch(error=> console.log(`Error: ${error}`))
}
const fetchInfos = async()=>{
//    const res= await axios.get(`https://api.github.com/users/${names[2]}`)
    // console.log(res.data.location)
    const arr = [];
    const loc = [];
    const all = [];
    for (var i = 0; i < names.length; i++){       
        const cryptoUrl = `https://api.github.com/users/` + names[i];
        arr.push(axios.get(cryptoUrl));
    }

//    const log = arr.map(data=> loc.push(data))
//     console.log(loc)
    Promise.all(arr).then((response) =>
    response.map(values => loc.push(values.data)))
    setLocation(loc)
    console.log(loc)
    setInfos(loc)
    console.log(loc)

    

}
const handleDetails =() =>{
    const deu = []
   const det = [];
       const detailsUrl = `https://api.github.com/users/${login}/repos?sort=updated&type=owner&direction=desc&page=desc&page=1&per_page=10` ;
       deu.push(axios.get(detailsUrl));
       console.log(detailsUrl)

   Promise.all(all).then((response) =>
   response.map(values => det.push(values.data)))
   setLogin(det)
   console.log(det)

}
const  HandleChange= (event) => {
    setInterest(event.target.value);
 };

 const getInfos = async() =>{
  const res = await axios
    .get(`https://api.github.com/users/${interest}/repos?sort=updated&type=owner&direction=desc&page=desc&page=1&per_page=10`)
    .then(res=> res.data).then(data=> data.map((i) =>{
return i,
     setLepto(i.name),
     setDesc(i.description),
     setLicense(i.license),
     setStars(i.stargazers_count),
     setWatcher(i.watchers_count),
      setForks(i.forks_count)

  
}))
    }


 


    useEffect(() => {
    
        
    //  }
     fetchUsers();
     fetchInfos()
 },  [])

 
 const lastInfos = number * infosPerPage;
  const firstInfos = lastInfos - infosPerPage;
  const currentInfos = infos.slice(firstInfos, lastInfos);
  const pageNumber = [];    

  for (let i = 1; i <= Math.ceil(infos.length / infosPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
 
 return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div>
      {currentInfos.map(item => <div className="container" key={item.id} >
    <p style={{fontFamily:'sans-serif'}} >Name: {item.login}</p>
       <p style={{fontFamily:'sans-serif'}}>location: {item.location}</p>
       <img src={item.avatar_url} style={{width:'250px', height:'250px', borderRadius:'50%'}} alt=''/>
       <p style={{fontFamily:'sans-serif'}} >
       Full Name : {item.name}</p>
       <button onClick={()=> setInterest(item.login)}>Click me first</button>
       <p style={{fontFamily:'sans-serif'}}>number of public gist: {item.public_gists}</p>
       <p style={{fontFamily:'sans-serif'}}>Number of public repos:{item.public_repos}</p>
       <p style={{fontFamily:'sans-serif'}}>Number of Followers: {item.followers}</p>
       <p style={{fontFamily:'sans-serif'}}>number of following users:{item.following}</p>
       <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
      {/* <button onClick={getInfos}>Get infos</button> */}
      <button  onClick={getInfos}> get the infos</button>
       <div>
       <p>REpos:{lepto}</p>
       <p>description: {desc}</p>
        <p>Number of watchers: {watchers}</p>
        <p>Number of forks: {forks}</p> 
        
        </div>
       
        <button onClick={toggleModal }>
        Close modal</button>

      </Modal>

     </div>)}
</div>
        <div className="my-3 text-center">
          <button
            className="px-3 py-1 m-1 text-center btn-primary"
            onClick={() => setNumber(number - 1)}
          >
            Previous
          </button>

          {pageNumber.map((Elem) => {
            return (
              <>
                <button
                  className="px-3 py-1 m-1 text-center btn-outline-dark"
                  onClick={() => ChangePage(Elem)}
                >
                  {Elem}
                </button>
              </>
            );
          })}
          <button
            className="px-3 py-1 m-1 text-center btn-primary"
            onClick={() => setNumber(number + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </>
);
};
 
export default Info;