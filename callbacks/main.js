const posts = [
  {'id': 1, 'title' : 'first post', 'body': 'this is my first blog post'},
  {'id': 1, 'title' : 'Second post', 'body': 'this is my second blog post'},
  {'id': 1, 'title' : 'third post', 'body': 'this is my third blog post'},
];


function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
}

function getPost(){
  let output = '';
  posts.forEach(function(post){
    output += `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      `
  });

  document.body.innerHTML = output;

}

createPost({'id':4, 'title': 'fourth post', 'body': 'fifth post'}, getPost);