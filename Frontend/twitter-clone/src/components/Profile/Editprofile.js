import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Editprofile from '../../styles/Editprofile.css';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 5, 3),
  },
}));
let payload ={
    name : "",
    location : "",
    website: "",
    biog:"",
    userName:""
    }
    
export default function SimpleModal({handleClose,open}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [bio , setBio] = useState(payload);

  const handleChange=(e)=>{
    const {name , value}= e.target ;
    setBio({...bio,[name]:value})

  }
  //destructuring
  const {name,location,website,biog }= bio;
  const saveBio =(e) =>{
    e.preventDefault();
  
    const headers = {
        'Content-Type': 'application/json'
        
      }
      if(!name){
        return alert("Name is Required.")
    }
    if(!location){
        return alert("Location is Missing.")
    }
    if(!website){
        return alert("Website is Required.")
    }
    if(!biog){
        return alert("Bio is Required.")
    }

    const json = JSON.stringify({
        name,
        location ,
        website,
        biog,
        userName:localStorage.getItem('userName')
     });
    axios.post('http://localhost:8683/bio/add',
       json,{ headers: headers}

    )
    .then(response =>{
        console.log(response);
        handleClose();
        window.location.reload();
    } )
    //setting the bio to empty
    setBio(payload);
}
  const body = (
    <div style={modalStyle} className={classes.paper}>

            <div className='outer_modal'>
                
       <form onSubmit={saveBio} className='form_style'>
       <div className='closeicon_style'>
                        <CloseIcon onClick={handleClose} />
                    </div>
                    <label form="name_input" >Name*</label>
                    <input type="text" className='Name' name = "name" value={name} onChange={handleChange}/>
                    <br/>
            
                    <label form="location_input" > Location</label>
                    <input type="text" className='location' name = "location" value={location} onChange={handleChange}/>
                    <br/>
                    <label form="web_input" >Website</label>
                    <input type="text" className='website' name = "website" value={website} onChange={handleChange} />
                    <br/>
                    <label form="bio_input" className='biogr' >Bio</label>
                    <input type="text" className='description' name = "biog" value={biog} onChange={handleChange}/>
                    <br/>
                    <button type="submit" className="submit-btn" >Submit</button>
                </form>
                </div>
      <SimpleModal />
    </div>
  );

  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
