import React, {useState} from 'react'
// import Sidebar from "./components/Sidebar";
// import Feed from './components/Feed';
// import Widget from './components/Widget';
import Sidebar from './Sidebar/index'; 
import Feed from './Feed/index';
import Widget from './Widget/index';
import Profile from './Profile/Profile';
function Home() {
  const [profile,setProfile] =useState(false);
    const handleProfile = () => {
        setProfile(!profile);

      };
      console.log(profile)
    return (
        <div className="app">
      <Sidebar  handleProfile={handleProfile}/>
      {
        profile ? <Profile/> : <Feed />

      }
      
      <Widget/>
    </div>
    )
}
export default Home
