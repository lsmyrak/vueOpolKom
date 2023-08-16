import axios from 'axios';
import authHeader from '../Common/AuthHeader';
import { BASE_URL_API } from '@/Common/URL';

class AdminService {

    getAllUser() {
        return axios.get(BASE_URL_API + "Admin/get-all-user", {
            headers: authHeader()
        });
    }
 
    getAllWorks(startDate, stopDate) {
        if(startDate==undefined) {            
            startDate = "10.10.2020";
        }
        
        if(stopDate==undefined) {
            stopDate= "10.10.2030";
        }
        return axios.get(BASE_URL_API + "Admin/get-all-works?startdate="+startDate+"&stopDate="+stopDate, {
            headers: authHeader()
        });
    }    
    
    getWorksByUser(userId ,start, stop) {
        return axios.get(BASE_URL_API + "Admin/by-user/"+ userId + "?startDate=" + start + "&stopDate="+ stop, {
            headers: authHeader()
        });
    }
}


export default new AdminService();