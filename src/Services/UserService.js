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
}

export default new UserService();