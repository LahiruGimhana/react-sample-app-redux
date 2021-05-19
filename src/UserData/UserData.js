class UserHandler {

    constructor() {
        this.userList = [
            {
                id: "dsdsds",
                name: { title: "Mrs", first: "gim", last: "daya" },
                location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
            },
            {
                id: "dsadasd",
                name: { title: "Mrs", first: "22222", last: "1111" },
                location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
            },
        ];
    }

    getUserById(id) {

        return this.userList.find(usr => {
            return usr.id === id;
        })

    }

    getAllUsers() {

        //return wenne promise ekak
        return new Promise((resolve, reject) => {

            //fetch method call
            //parameter 1- url
            //parameter 2- method, header, ....
            fetch('https://react-getting-started-ae727-default-rtdb.firebaseio.com/user.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log('Success_Azz:', data);
                return resolve(data);
            }).catch((error) => {
                console.error('Error:', error);
                return reject(error);
            });

        })



    }

    //add new user using hardcode json data

    // addNewUser(user) {
    //     let tempUser = JSON.parse(JSON.stringify(user));
    //     tempUser.id = Date.now();
    //     this.userList.push(tempUser);
    //     return tempUser;
    // }


    addNewUser(user) {
        return new Promise((resolve, reject) => {
            fetch('https://react-getting-started-ae727-default-rtdb.firebaseio.com/user.json', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(user),
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log('Success___:', data.name); //data kiyla return wenne object ekk
                //return resolve(data);         //data.name kiwoth kelinma string ekak return wenne
                return resolve({
                    key: data.name,
                    user: user
                });
            })
                .catch((error) => {
                    console.error('Error:', error);
                    return reject(error);
                });
        }
        )
    }



    removeUser(id) {
        return new Promise((resolve, reject) => {
            // deletes entities
            // fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}`, {
            fetch(`https://react-getting-started-ae727-default-rtdb.firebaseio.com/user/${id}.json`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res);
                    return resolve(res);
                })
                .catch(err => {
                    console.log(err);
                    return reject(err);
                });
        })
    }




    editSelectUser(userId, user) {
        return new Promise((resolve, reject) => {
            console.log(user)
            // deletes entities
            // fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}`, {
            fetch(`https://react-getting-started-ae727-default-rtdb.firebaseio.com/user/${userId}.json`, {
                method: 'PATCH',
                body: JSON.stringify(user),
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log('Success___:', data.name); //data kiyla return wenne object ekk
                //return resolve(data);         //data.name kiwoth kelinma string ekak return wenne
                return resolve({
                    key: data.name,
                    user: user
                });
            })
                .catch((error) => {
                    console.error('Error:', error);
                    return reject(error);
                });
        }
        )
    }


}


export { UserHandler };

