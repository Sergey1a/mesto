export  class UserInfo{
    constructor({profileUserName,profileUserHobby}){
        this._name = profileUserName;
        this._hobby = profileUserHobby;
    }

    getUserInfo(){
        const  userInfo ={
            name: this._name.textContent,
            hobby: this._hobby.textContent,
        };
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._hobby.textContent = userInfo.hobby;
      }
}