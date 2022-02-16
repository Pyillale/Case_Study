import React from "react";
import "../../styles/widget.css"
import SearchIcon from '@material-ui/icons/Search';
import Embed from 'react-embed';
function Widget(){
    return(
        <div className="widgets">
       <div className="widgets__input">
<SearchIcon className="widgets__searchicon"/>
<input placeholder="Search Twitter" type="text" />
       </div>
       <div className="widgets_widgetContainer">
         <h2>What's happening</h2>
         <Embed url='https://twitter.com/AMAZINGNATURE0/status/1086521828770598912' />
         <Embed url='https://twitter.com/Siva_Kartikeyan/status/1477158149211627520'/>
        < Embed url=' https://twitter.com/blackhatcats/status/1477318052819603459'/> 
       </div>
        </div>
    )
}
export default Widget;