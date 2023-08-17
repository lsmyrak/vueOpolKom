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
            startDate = "01.01.1970";
        }
        
        if(stopDate==undefined) {
            const today = new Date();
            stopDate = `${padZero(today.getMonth() + 1)}.${padZero(today.getDate())}.${today.getFullYear()}`;
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


function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

export default new AdminService();