import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import "../../styles/post.css"
function Post  ({item}) {
    return (
        <div className='posts'>
            <div className='post__header'>
                <div className='post__headerleft'>
                    < Avatar src={item.photoUrl}/>
                    <div className='post_profile_details'>
                        <h3> <VerifiedUserIcon className="post__badge"/>{item.name}</h3>
                        <p> {"@" + item.userName}  </p>
                    </div>
                </div>
                <MoreVertIcon/>
            </div>
        
            <div className='post__body'>
             
                <p> {item.description}</p>
            </div>
            <div className='post_img'>
                <img src={item.photoUrl}
                width="560" height="330"/>
            </div>
            <div className='post__footer'>
                <div className='post__footer__option'>
                <ChatBubbleOutlineIcon fontSize="small" />
                </div>

                <div className='post__footer__option'>
            <RepeatIcon fontSize="small" />
            </div>

            <div className='post__footer__option'>
            <FavoriteBorderIcon fontSize="small" />
            </div>
            
            <div className='post__footer__option'>
            <PublishIcon fontSize="small" />
            </div>
                </div>
            </div>    
    )
}

export default Post

