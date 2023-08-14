class UserService{

addWork(dateOfWork, dateOfNote, place, kindOfWork, tasks,price ) {    
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
export default new UserService();