import React from "react";
import "../../styles/sidebarOption.css";
function SidebarOptions({text,Icon}){
    return(
        <div className={'sidebarOption'}>
        <Icon className="icon--btn"/>
        <h2>{text}</h2>
        </div>
    )
}
export default SidebarOptions;


    