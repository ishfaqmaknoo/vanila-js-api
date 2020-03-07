/** @format */

const http = new EasyHTTP()

//Get User
http
	.get('https://jsonplaceholder.typicode.com/users')
	.then(data => {
		console.log(data)
		let output = ''
		data.forEach(user => {
      output += `
      <p>${user.name}</p>
      <p><strong>${user.address.city}</strong></p>
      `
		})
		document.body.innerHTML = output
	})
  .catch(err => console.log(err))
  

  //user data

const data = {
  name : 'ishfaq',
  username: 'ishu',
  email: 'ishfaq@gmail.com'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


//update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


//delete user
// http.delete('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))