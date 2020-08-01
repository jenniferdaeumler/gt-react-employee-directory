import axios from "axios";

export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  },
};


// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
      