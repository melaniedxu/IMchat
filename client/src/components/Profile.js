import React, {
  useState, useEffect, useRef, useContext,
} from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import {
  getContacts, joinChat, sendMessage, getMessagesByConversation,
  deleteTwilioMessage, getAllUsers, getFriendList,getUserprofile
} from '../network/getData';
import { Link, useHistory } from "react-router-dom";
import Picture from './Picture';
import UserContext from '../context/UserContext';
import Pictures from './Pictures'

function Profile() {
  const [username, setusername] = useState("");
  const [createDate, setDate] = useState("");
  const { userData } = useContext(UserContext);
  // console.log('user data in profile is -----', userData.user)
  // changepassword = () => {
  //   return function () {
  //     let password = prompt("Please enter your password");
  //   };
  // };

  // deactive = () => {
  //   return function () {
  //     alert("Account deactived! Please refresh the page!");
  //   };
  // };

  const handleRefresh = async () => {

    const userinfo = await getUserprofile(userData.user.id);
    // const createD = userinfo[0].updatedAt
    const createD = userinfo[0].createdAt
    setDate(createD)
  console.log('user data in profile is -----', createD);

  }

  useEffect(() => {
    setusername(userData.user.username);
    handleRefresh();
  });
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-4">
                  <div className="d-flex justify-content-start">
                  <Pictures userid = {userData.user.id} />
                    <div className="middle" style={{ width: '70%' }}>
                      <h2
                        className="d-block"
                        style={{ fontsize: '1.5rem', fontWeight: 'bold' }}
                      >
                        {name}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h3>
                      Basic Info
                    </h3>

                    <div className="tab-content ml-1" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="basicInfo"
                        role="tabpanel"
                        aria-labelledby="basicInfo-tab"
                      >
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <div>
                              User Name
                            </div>
                          </div>
                          <div className="col-md-8 col-6">
                            {username}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <div>
                              Joined at
                            </div>
                          </div>
                          <div className="col-md-8 col-6">
                            {createDate}
                          </div>
                        </div>
                        <hr />
                        <h6>
        <Link to="/reset">Click to reset password</Link>
      </h6>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Profile;
