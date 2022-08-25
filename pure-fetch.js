const endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=20';

const container = document.querySelector('.container');
const form = document.querySelector('.form');
const search = document.querySelector('.search');
const status = document.querySelector('.status');
const statusDetail = document.querySelectorAll('.status span');

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      const postTemplate = `
        <div class="post">
            <div class="post__id">${el.id}</div>
            <div class="post__title"><span>Title : </span>${el.title}</div>
            <div class="post__body"><span>Body : </span>${el.body}</div>
        </div>
`;
        container.insertAdjacentHTML('beforeend', postTemplate);
    })
  });

  

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let userSearch = search.value;
    const posts = document.querySelectorAll('.post');
    let filteredPost = [...posts].filter((post) => {
      return post.children[1].textContent.includes(userSearch);
    });
    posts.forEach(post => post.style.display = 'none');
    filteredPost.forEach(postFiltered => postFiltered.style.display = 'block');
    statusDetail[0].textContent = userSearch;
    statusDetail[1].textContent = filteredPost.length;
    statusDetail[2].textContent = posts.length;
    status.style.display = 'block';
  })