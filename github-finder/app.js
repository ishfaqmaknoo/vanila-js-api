//init github
const github = new Github; 
const ui = new UI;

let searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  let userText = e.target.value;
  if(userText !== ''){ 
    console.log(userText);
    //make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert
        console.log('error')
  
      } else{
        //show profile
        ui.showProfile(data.profile);
      }
    })
  } else{
    //clear profile
  }
})