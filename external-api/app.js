document.querySelector('button').addEventListener('click', getJokes);

function getJokes(e){

  let number = document.querySelector('input[type="number"]').value;

  
  const xhr = new XMLHttpRequest();

  
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
  let output = '';
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      
      if(response.type === 'success'){

        response.value.forEach(function(joke){
          console.log('we are ggetttteb')
          output += `<li>${joke.joke}</li>`
        })

      } else{
        output += `<li>Some thing went wrong</li>`
      }

    } else {
      console.log('not going')
    }
    document.querySelector('.jokes').innerHTML = output;
  }
    
  xhr.send();

  e.preventDefault();
}