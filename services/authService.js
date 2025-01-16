import axios from 'axios';
import {config} from '../config'
class authService {

    constructor() {
        this.authApi = config.API_URL + '/auth'; // Base URL for authentication API
    }

    async register(param) {
        try {
            const response = await axios.post(`${this.authApi}/signup`, param);
            console.log(response)

            if (response.data.status === 2000) {
                return {success: true};
            } else {
                // Handle unsuccessful register attempt
                return {success: false, error: response.data.error || 'Register failed'};
            }
        } catch (error) {
            console.error('Register error:', error);
            return {success: false, error: error.message || 'An error occurred'};
        }
    }


    async login(param) {
        try {
            const response = await axios.post(`${this.authApi}/login`, param);
            console.log(response)

            if (response.data.status === 2000) {
                return {success: true};
            } else {
                // Handle unsuccessful login attempt
                return {success: false, error: response.data.error || 'Login failed'};
            }
        } catch (error) {
            console.error('Login error:', error);
            return {success: false, error: error.message || 'An error occurred'};
        }
    }


    async forgot(param) {
        try {
            const response = await axios.post(`${this.authApi}/forgot/password`, param);
            console.log(response)

            if (response.data.status === 2000) {
                return {success: true};
            } else {
                // Handle unsuccessful login attempt
                return {success: false, error: response.data.error || 'Forgot failed'};
            }
        } catch (error) {
            console.error('Login error:', error);
            return {success: false, error: error.message || 'An error occurred'};
        }
    }



    async reset(param) {
        try {
            const response = await axios.post(`${this.authApi}/reset/password`, param);
            console.log(response)

            if (response.data.status === 2000) {
                return {success: true};
            } else {
                // Handle unsuccessful login attempt
                return {success: false, error: response.data.error || 'Reset Password failed'};
            }
        } catch (error) {
            console.error('Login error:', error);
            return {success: false, error: error.message || 'An error occurred'};
        }
    }



}

export default new authService();
