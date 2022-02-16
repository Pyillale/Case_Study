import React from "react"; 
import '../../styles/profile.css';
import SimpleModal from "./Editprofile";
import axios from "axios";

let payload ={
  name : "",
  location : "",
  website: "",
  biog:"",
  userName:""
  }
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(payload);
  const [user ,setUser] = React.useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    setUser(localStorage.getItem('userName'))
    axios.get('http://localhost:8683/bio/get/'+localStorage.getItem('userName'))
    .then(response =>{
        console.log(response);
        setData({...data,biog:response.data.biog,name:response.data.name,userName:response.data.userName})
    } )
  }, []);

    return(

<div className="outer_container">
<div className="container">
  <header>
    <i className="fa fa-bars" aria-hidden="true"></i>
  </header>
    <div className="row">
      <div className="left col-lg-12">
        <div className="photo-left">
          <img className="photo" src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/> 
          <button className="Button" type="Button" onClick={handleOpen}
                   >Set up profile</button>
                   <SimpleModal handleClose={handleClose} open={open}/>
        </div>
        <div className="Pname">
        <p className="name">{data.name}</p>
        
        </div>
        <p className="info">@{data.userName?data.userName:localStorage.getItem('userName')}</p>
        
        <div className="stats row">
            <div className ="info1">
          <div className="stat col-xs-4">
            <p className="number-stat">3,619</p>
            <p className="desc-stat">Followers</p>
          </div>
          <div className="stat col-xs-4">
            <p className="number-stat">42</p>
            <p className="desc-stat">Following</p>
          </div>
          </div>
          <div className="stat col-xs-4">
            <p className="desc">{data.biog}</p>
        </div>
        <div className="right col-lg-12">
        <ul className="nav">
          <li>Tweet</li>
          <li>Tweets & replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>
        <div className="row gallery">
          
        </div>
        </div>
        </div>
    </div>
</div>
</div>
</div>
    )
}
export default Profile;