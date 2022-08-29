//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/s"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzkxMzYxLCJleHAiOjE2NjE3OTQ5NjEsIm5iZiI6MTY2MTc5MTM2MSwianRpIjoiTVdUbEdKUmpKdE0xZEZlbiIsInN1YiI6NzIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.yPz_QSYoFzMlJfivCM1MOJcb2o3OJX_JKhlSMUEhzJM"; // put access token
const student = {
  id_student:63360194,
  name: 'Kittaphat', // replace with your full name.
  age: 19, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzkxMzYxLCJleHAiOjE2NjE3OTQ5NjEsIm5iZiI6MTY2MTc5MTM2MSwianRpIjoiTVdUbEdKUmpKdE0xZEZlbiIsInN1YiI6NzIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.yPz_QSYoFzMlJfivCM1MOJcb2o3OJX_JKhlSMUEhzJM`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}