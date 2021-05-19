import React, { useLayoutEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import './Console.css';
import ChatList from './sub/ChatList';
import User from './sub/User';
import NameList from './sub/NameList';


const Console = (props) => {

    const chatListRef = useRef();
    const nameListRef = useRef();

    let history = useHistory();

    let session = sessionStorage.getItem('userLoginSessionData');
    let s_name = JSON.parse(session).name;
    // console.log(s_name);

    const logout = () => {
        // setdetails({ name: "", email: "" });
        sessionStorage.removeItem('userLoginSessionData');
        console.log("Logout");
        history.push('/login');
    }

    useLayoutEffect(() => {
        if (!getData()) {
            history.push('/login');
        }
    }, []);


    const getData = () => {
        let data = sessionStorage.getItem('userLoginSessionData');
        return data ? JSON.parse(data).email : null;
    };


    //add user button pass as a ref to userform through chatlist
    const openAddUserForm = () => {
        chatListRef.current.openAddUserPanel(true);
    }


    //access user form submited data
    // const submitedUserForm = (formData) => {
    //     // alert(`bbb ${formData.FirstName}`)
    //     alert(`bbb `)
    // }
    

//submited form data come from chatList
    const submitedUser = (formData)=>{
        // alert(`bb ${formData.FirstName}`);
        nameListRef.current.getUserFormData(formData);
        // console.log(nameListRef.current)
    }

    //view data
    const onViewUser=(obj)=>{
        // console.log(obj.name.first);
        // alert(obj.name.first);
        chatListRef.current.viewSelectUserFormData(obj);
    }

    const onEditUser=(keyId, obj)=>{
        // alert(`hello edit process ${obj.name.first}`);
        chatListRef.current.editSelectUserFormData(keyId, obj);
    }

 


    return (
        <div className="container">

            <div class="header">
                <div className="col-11 center" >
                    <h3 >Chat Application</h3>
                    <h4 >Welcome, <span>{s_name}</span></h4>
                </div>
                <div className="col" id="logout">
                    <button className="btn btn-warning" onClick={() => {
                        logout();
                    }}>Logout</button>
                </div>
            </div>
            <div class="wrapper clearfix">
                <div class="nav">
                    <div className="col border border-primary m-1" >
                        <div className="col" id="add" style={{ float: "left", textAlign: "left", width: '10%', margin: "0%", padding: "0%" }}>
                            {/* <buuton className="btn btn-primary" onClick={addUserHandeler}>add user</buuton> */}
                        </div>
                        <div className="col" id="user" style={{ float: "right", textAlign: "left", width: '90%', margin: "0%", padding: "0%" }}>
                            <NameList openAddUserForm={openAddUserForm}  ref={nameListRef} onViewUser={onViewUser} onEditUser={onEditUser}/>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="col border border-primary m-1">
                        <ChatList submitedUserFormmm={submitedUser} childRef={chatListRef}  />
                    </div>

                </div>
            </div>
            <div class="footer">
                <p>copyright &copy;#######</p>
            </div>

        </div>
    )
}

export default Console
