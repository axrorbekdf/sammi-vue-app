import axios from "./axios";

const AuthService = {
    register(user){
        // const user = {
        //     username: '',
        //     email: '',
        //     password: ''
        // }

        return axios.post('/users', {user})
    }
}

export default AuthService