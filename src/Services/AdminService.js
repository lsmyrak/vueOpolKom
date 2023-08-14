import axios from 'axios';
import authHeader from './AuthHeader';
import {
    BASE_URL_API
} from './URL';
class AdminService {

    getAllUser() {
        return axios.get(BASE_URL_API + "Admin/get-all-user", {
            headers: authHeader()
        });
    }
    // i/Admin/get-all-works?startdate=10.10.2020&stopDate=10.10.2023
    getAllWorks(startDate, stopDate) {
        return axios.get(BASE_URL_API + "Admin/get-all-works?startdate="+startDate+"&stopDate"+stopDate, {
            headers: authHeader()
        });
    }
    
    
    getWorksByUser(userId ,start, stop) {
        return axios.get(BASE_URL_API + "Admin/by-user/"+ userId + "?startDate=" + start + "&stopDate="+ stop, {
            headers: authHeader()
        });
    }

    addWorkToUser(dateOfWork, dateOfNote, place, kindOfWork, tasks,price ) {
        console.log(price);
        return axios.post(BASE_URL_API+'Work/create-work', {
          dateOfWork: dateOfWork,
          dateOfNote: dateOfNote,
          place: place,
          kindOfWork: kindOfWork,
          tasks: tasks,
          price: price
        },{headers:authHeader()});
      }
}


export default new AdminService();