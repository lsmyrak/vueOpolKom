import axios from 'axios';
import authHeader from '../Common/AuthHeader';
import { BASE_URL_API } from '@/Common/URL';

class UserService {

  addWork(dateOfWork, dateOfNote, place, kindOfWork, tasks, price) {
    return axios.post(BASE_URL_API + 'Work/create-work', {
      dateOfWork: dateOfWork,
      dateOfNote: dateOfNote,
      place: place,
      kindOfWork: kindOfWork,
      tasks: tasks,
      price: price
    }, {
      headers: authHeader()
    });
  }

  getWorks(startDate, stopDate) {
    if (startDate == undefined) {
      startDate = "01.01.1970";
    }

    if (stopDate == undefined) {
      const today = new Date();
      stopDate = `${padZero(today.getMonth() + 1)}.${padZero(today.getDate())}.${today.getFullYear()}`;
    }
    return axios.get(BASE_URL_API + "Admin/get-all-works?startdate=" + startDate + "&stopDate=" + stopDate, {
      headers: authHeader()
    });
  }

  getUser(){
    return axios.get(BASE_URL_API+'User/get',{headers:authHeader()
    });
  }

}

function padZero(number) {
  return number < 10 ? '0' + number : number;
}

export default new UserService();