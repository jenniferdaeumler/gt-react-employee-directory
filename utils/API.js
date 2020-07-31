import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomPerson: function() {
    return axios.get("https://randomuser.me/api/");
  },
};


// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
      