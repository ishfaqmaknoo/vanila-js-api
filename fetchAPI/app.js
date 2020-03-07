document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
  
  fetch('test.txt')
  .then(function(res){
    return res.text();
  })
  .then(function(data){
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  })

}

//get local json data

function getJson(){
  fetch('posts.json')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  })
}


//get external

function getExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `
      <div class="columns four">
        <img src="${user.avatar_url}" width="100">
        <h5>${user.login}</h5>
        <a target="_blank" href="${user.html_url}">Visit profile</a>
      </div>
      `
    });
    document.getElementById('output').innerHTML = output;

  })
}
