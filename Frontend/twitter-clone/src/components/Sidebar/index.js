import React ,{useState } from "react";
import '../../styles/sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";

import SidebarOptions from "../SidebarOptions";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Sidebar({handleProfile}){
    const history = useHistory();
    console.log(handleProfile)
    
    return(
        <div className="sidebar">
            <TwitterIcon className="twitter_icon"/>

      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <div onClick={handleProfile}>
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      </div>
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
      
      {/* Button -> Tweet */}
      <Button variant="outlined" className="tweet__btn" fullWidth>
        Tweet
      </Button>

   <img  className="sidebarImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA21g-bTEbPYtKLCpO5EDnxk2rZv_20jt8kaCoVi7khUyw2YS0HPLxIPPr9r8p5MSEbmY&usqp=CAU"alt=""/>
   <p className="sidebarname" onClick={() => {
console.log('Clicked');

history.push('/');

}}> Logout</p>

        </div>
    )
}
export default Sidebar;