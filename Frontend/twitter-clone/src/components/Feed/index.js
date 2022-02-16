import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/feed.css"
import "../Feed/Post.js"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import PollIcon from '@material-ui/icons/Poll';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Post from "../Feed/Post.js";
import axios from "axios";

let d ={
    userName:"priyankaaa",
    photoUrl:"https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg",
	name:"Priyanka",
	description:"Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets. Registered users can post, like, and retweet tweets, but unregistered users can only read those that are publicly available. Users interact with Twitter through browser or mobile frontend software, or programmatically via its APIs."
}

let payload ={
    userName:"",
    photoUrl:"https://weloveweather.tv/wp-content/uploads/2017/06/TwitterAccountsFI.jpg",
	name:"",
	description:""
}
function Feed(){
    // usestate is used to store and update data in react 
    const [tweet,setTweet] = React.useState(payload);
    const [getTweet,setGetTweet] = React.useState([]);
    const getTweetFromDb =()=>{
        axios.get('http://localhost:8684/tweet/getTweet/'+localStorage.getItem('userName')).then((res)=>{
           console.log(res)
           setGetTweet(res.data)
        })
    }

    React.useEffect(()=>{
        //on page load we are fetching tweets from backend and showing it on frontend
        getTweetFromDb();
    },[tweet])

    const handleTweet=(e)=>{
        const {value} = e.target;
        setTweet({...tweet,description:value,userName:localStorage.getItem('userName'),name:localStorage.getItem('userName')})
    }

    const {description} = tweet;

    const handleSubmit=(e)=>{
        // on click of the tweet button we are making api request to backend 
        //sending the tweet 
        e.preventDefault();
        if(!description){
            return alert("description is Required.")
        }
        const headers = {
            'Content-Type': 'application/json'           
          }
        const json = JSON.stringify(tweet);
        axios.post('http://localhost:8684/tweet/sendTweet',
           json,{ headers: headers}
        )
        .then(response =>{
            console.log(response);
            // after sending the tweet again we are retriving it on frontend to show it 
            getTweetFromDb();
            setTweet(payload)
        } )
    }

    return(
        <div className="feed"> 
         <p className="home"> Home </p>
        <div className="feed__header">
           <Avatar scr=""/>
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder="What's happening?" value={tweet.description} onChange={handleTweet}/>
            <button type="submit" className="tweetbtn">
                Tweet
            </button>
           </form>
        </div>
        <div className="feed_options">  
            <div className="option">
            <PhotoLibraryIcon/>
            </div>

            <div className="option">
            <CardGiftcardIcon/>
            </div>

            <div className="option">
            <EmojiEmotionsOutlinedIcon/>
            </div>

            <div className="option">
            < PollIcon/>
            </div>
           <div className="option">
            < LocationOnIcon/>
            </div>
        </div>
       <div>
           
       </div>
       {
           //map is  equivalent to for loop 
           //here i am mapping on getTweet array  to show the posts on ui
           //item is each element inside the array  
           //[a,b,c,d]
        getTweet.length>0?getTweet.map((item)=>{
            return <Post item={item} key={item.id} />
        }):null
       }
       {
           <Post item ={d}/>
       }
        </div>
    )
}
export default Feed;