
const UserStatus = ({loggedIn,isAdmin}) => {
    if(loggedIn) {
        if(isAdmin) return <h3>Hello Admin,You are Logged in</h3>
        else return <h3>Hello User,You are Logged in</h3>   
    }
    else {
        if(isAdmin) return <h3>Hello Admin,Please Login</h3>
        else return <h3>Hello User,Please Login</h3>
    }

}

export default UserStatus