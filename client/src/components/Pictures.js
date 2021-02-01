import React, { Component } from 'react';
import  {
    useState, useEffect, useRef, useContext,
  } from 'react';
import imgDeafault from '../images/default.jpg';
import Axios from "axios";
import UserContext from '../context/UserContext';
import {
    getContacts, joinChat, sendMessage, getMessagesByConversation,
    deleteTwilioMessage, getAllUsers, getFriendList,getUserprofile,saveAvatar
  } from '../network/getData';

function Pictures(userid) {
//   constructor() {
//     super();
//     this.state = {
//       image: imgDeafault,
//     };
//     this.createImage = this.createImage.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }
const { userData } = useContext(UserContext);
const [image, setImage] = useState(imgDeafault);
const [url, setURL] = useState("");
const [imageUpload, setImageUpload] = useState('');

const handleRefresh = async () => {

    const userinfo = await getUserprofile(userData.user.id)
    const avlink = userinfo[0].avatarlink
    console.log('picture comp get profile', userData.user.id, avlink,userinfo);
    if (avlink != null){
        setImage(avlink)
    }
    console.log('picture comp save avatar inside', userData.user.id, url);
    if (url.length != 0 ){
    await saveAvatar(userData.user.id, url);
    console.log('picture comp save avatar success');}

  }

useEffect(() => {
    console.log('inside picture usereffect', userData.user.id);
    handleRefresh();
  });

const selectimage = async (e) => {
    const curfile = e.target.files[0]
    setImageUpload(curfile)
    const reader = new FileReader();
    reader.onload = (e) => {
    //   console.log('image file is ', file ,e.target.result)
      setImage(e.target.result)
    };
    reader.readAsDataURL(curfile);
  };

  const uploadToCloud = async () => {
    // console.log(image);
    const data = new FormData();
    data.append("upload_preset", "ChatApp");
    data.append("cloud_name", "chatapp557");
    data.append("file",imageUpload)
    console.log('imageUpload is ', imageUpload)
    await fetch("https://api.cloudinary.com/v1_1/chatapp557/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((d) => {
        setURL(d.url);
        console.log('upload an image, link is ---', url)
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return (
      <div>
        <img
          src={image}
          style={{ height: '225px' }}
          alt={image}
        />
        <form>
        <input
                type="file"
                accept="image/*"
                onChange={selectimage}
              />
          {/* <button type="submit"> Click to Submit</button> */}
        </form>
        <button
          onClick={() => uploadToCloud()}
        >
          Submit Selection
        </button>
      </div>
    );
  
}

export default Pictures;
