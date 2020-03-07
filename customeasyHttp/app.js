/** @format */

const http = new easyHTTP()

//Get post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   let output = response
// 	if (err) {
// 		console.log(err, 'sss')
// 	} else {
// 		console.log(err, 'success')

// 	}
//   document.getElementById('posts').innerHTML = output;
// })

//post

const data = {
	title: 'custom post',
	body: 'this is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
// 	err,
// 	post
// ) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(post)
// 	}
// })


//update post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if(err){
//     console.log(err);
//   } else{
//     console.log(post)
//   }
// })


//delete post


http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
  if(err){
    console.log(err)
  } else {
    console.log(response)
  }
})
