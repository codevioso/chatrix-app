import axios from 'axios';
import {config} from '../config'
class authService {

    constructor() {
        this.authApi = config.API_URL + '/auth'; // Base URL for authentication API
    }

    async register(param) {
        try {
            const response = await axios.post(`${this.authApi}/signup`, param);
            console.log(response.status)

            if (response.status === 201) {
                return {success: true};
            } else {
                // Handle unsuccessful register attempt
                return {success: false, error: response.data.error || 'Register failed'};
            }
        } catch (error) {
            let errors = error?.response;
            return {success: false, error: errors?.data?.message || 'Register failed' };
        }
    }


    async login(param) {
        try {
            const response = await axios.post(`${this.authApi}/login`, param);
            if (response.status === 200) {
                return {success: true, token:response?.data?.access_token ?? null, data:response?.data?.data ?? null};
            } else {
                return {success: false, error: response.data.error || 'Login failed'};
            }
        } catch (error) {
            let errors = null;
            if (error?.response?.data?.errors?.password[0]){
                return {success: false, error: error?.response?.data?.errors?.password[0] || 'Login failed' };
            }else{
                errors = error?.response;
                return {success: false, error: errors?.data?.message || 'Login failed' };
            }
        }
    }


    async forgot(param) {
        try {
            const response = await axios.post(`${this.authApi}/forgot/password`, param);

            if (response.status === 200) {
                return {success: true};
            } else {
                return {success: false, error: response.data.error || 'Unable to send request. Please try again'};
            }
        } catch (error) {
            let errors = null;
            if (error?.response?.data?.errors?.email[0]){
                return {success: false, error: error?.response?.data?.errors?.email[0] || 'Unable to send request. Please try again' };
            }else{
                errors = error?.response;
                return {success: false, error: errors?.data?.message || 'Unable to send request. Please try again' };
            }
        }
    }



    async reset(param) {
        try {
            const response = await axios.post(`${this.authApi}/reset/password`, param);
            console.log(response)

            if (response.status === 200) {
                return {success: true};
            } else {
                // Handle unsuccessful login attempt
                return {success: false, error: response.data.error || 'Reset Password failed'};
            }
        } catch (error) {
            let errors = null;
            if (error?.response?.data?.errors?.reset_code[0]){
                return {success: false, error: error?.response?.data?.errors?.reset_code[0] || 'Invalid code' };
            }
            else{
                errors = error?.response;
                return {success: false, error: errors?.data?.message || 'Invalid code' };
            }
        }
    }


    async accountActivation(param) {
        try {
            const response = await axios.post(`${this.authApi}/activate/account`, param);

            if (response.status === 200) {
                return {success: true, token:response?.data?.access_token ?? null, data:response?.data?.data ?? null};
            } else {
                return {success: false, error: response.data.error || 'Account activation failed'};
            }
        } catch (error) {
            let errors = error?.response;
            return {success: false, error: errors?.data?.message || 'Activation failed' };
        }
    }



}

export default new authService();
