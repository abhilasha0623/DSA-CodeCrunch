const input = [
    {
        "firstName": "First",
        "lastName": "Last",
        "age": 30,
        "gender": "MALE",
        "communications": [
            {
                "communicationType": "EMAIL",
                "communicationId": "test@test.com"
            },
            {
                "communicationType": "MOBILE",
                "communicationId": "9876543210"
            },
            {
                "communicationType": "SKYPE",
                "communicationId": "test@sk"
            }
        ],
        "profession": "BUSINESSMAN",
    },
    {
        "firstName": "First",
        "lastName": "Last",
        "age": 21,
        "gender": "MALE",
        "communications": [
            {
                "communicationType": "EMAIL",
                "communicationId": "student@test.com"
            },
            {
                "communicationType": "MOBILE",
                "communicationId": "7373737373"
            }
        ],
        "profession": "STUDENT",
    }
]

let output={}
function test(){
for(let i of input){
  if(i.profession == "BUSINESSMAN"){
      output.profession = i.profession;
    for(let j= 0; j<i.communications.length;j++){
              if(i.communications[j].communicationType == "EMAIL" ){
                output.email = i.communications[j].communicationId;
              } if(i.communications[j].communicationType == "MOBILE"){
                 output.phone = i.communications[j].communicationId;
              }            
    }
   console.log(output);
  }
}
}

test()

//Output
// {
//     profession: 'BUSINESSMAN',
//     email: 'test@test.com',
//     phone: '9876543210'
//   }