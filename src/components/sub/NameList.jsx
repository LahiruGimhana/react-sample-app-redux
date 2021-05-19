import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import chatList from './ChatList';
import { UserHandler } from '../../UserData/UserData';
import './NameList.css'
import { getUserList, removeUserList } from '../../redux/actions/userActions';

let userHandler = new UserHandler();


//Userform submited data 
let NameList = forwardRef((props, ref) => {

    let dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        getUserFormData: (FormData) => {
            // console.log(`aaaaaaaaaaaaaaaaaaaa ${FormData.FirstName}`)
            addUserHandeler(FormData);
        },
       
    }));



    // function NameList(props) {

    const [nameList1, setNameList] = useState({});
    const nameList = useSelector(state => { return state.user_list })

    //==========================================================
    //add all users using API
    useEffect(async () => {

        //********/ me option okkoma hari

        /* let usrListObj = User.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
            }, {}); */


        /* userHandler.getAllUsers().then(User => {      
            setNameList(User);       
        }).catch(ex => {
            console.error(ex);
        }); */



        try {
            let users = await userHandler.getAllUsers();  //methanata userData eken return wena promis eka anne

            dispatch(getUserList(users));

            /* if (users) {
                let usrList = Object.keys(users).reduce((acc, key) => {
                    users[key].userId = key;
                    acc[key] = users[key];

                    return acc;

                }, {})
                setNameList(usrList);

            } */


        } catch (ex) {
            console.error(ex + 'user add error');
        }

    }, []);

    /* =========================================
    delete user using hard code json data
    
        const onRemoveUser = (id) => {
    
            try {
                setNameList(prevVal => {
                    let tempPrev = { ...prevVal };
                    delete tempPrev[id];
                    return tempPrev;
                });
    
            } catch (ex) {
            }
        } */


    const onRemoveUser = (id) => {
        console.log(id);
        userHandler.removeUser(id).then(() => {

            dispatch(removeUserList(id));
            /* setNameList(prevVal => {
                let tempPrev = { ...prevVal };
                delete tempPrev[id];
                return tempPrev;
            }); */

            // setNameList(prevState => {
            //     return { ...prevState, [createdUser.id]: createdUser };
            // });
        }).catch(ex => {
            console.error(ex);
        });
    }


    const onViewUser = (id) => {
        let x = { ...nameList };
        //read state data
        // console.log(x[id].name.first);
        props.onViewUser(x[id]);
    }

    const onEditUser = (id) => {
        let x = { ...nameList };
        let obj=x[id];
        props.onEditUser(id, obj);
        // return id;
    }

  

    /*     add user using hard code data
        =======================================================================================
        const addUserHandeler = () => {
            const newUser = {
                name: { title: "Mrs", first: "Melike", last: "Abacı" },
                location: {
                    city: "Elazığ",
                    state: "İzmir",
                    country: "Turkey",
                    postcode: 82207,
                },
    
                picture: { medium: `https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100)}.jpg` },
            };
    
        api hada gatta new userwa useradata component eke me pette hadagatta object eka haraha ehapette addNewUser ekata ywanwa,
        ethanin return wena value eka methana createdUser ta dagannawa
            let createdUser = userHandler.addNewUser(newUser); 
    
            setNameList(prevState => {
                return { ...prevState, [createdUser.id]: createdUser };
            });
        } */

    //add new user API 
    const addUserHandeler = (data) => {
        setNameList(prevState => {
            return { ...prevState, [data.key]: data.user };
        });
    }


    const NameListComponent = () => {
        return (
            Object.keys(nameList).map(key => {
                return (
                    <User
                        picture={nameList[key].picture.medium}
                        name={`${nameList[key].name.first} ${nameList[key].name.last}`}
                        city={nameList[key].location.city}
                        id={key}
                        onRemove={onRemoveUser}
                        onView={onViewUser}
                        onEdit={onEditUser}
                    />

                );
            })
        );
    }

    return (
        <>
            <ul>
                <div >
                    <button className="btn btn-primary mb-4" onClick={props.openAddUserForm}>Add User</button>
                    <h3><span className="badge badge-pill badge-success">User List</span></h3>
                    <ul className="list-group">
                        <div>
                            {NameListComponent()}
                        </div>
                    </ul>

                    {/* <ul className="list-group">{ChatListComponent()}</ul> */}
                </div>
            </ul>
        </>
    );
})

export default NameList

