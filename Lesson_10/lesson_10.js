// const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     // age: 12,
// }
// try {
//     if (user.age) {
//         console.log('age' + ' ' + user.age);
//     } else {
//        throw new Error('No age');
//     }
// } catch (error) {
//     if(error.name === 'Error') {
//         console.log(error.message);
//     }
// }

const button = document.getElementById('getPostBtn');
const postsList = document.getElementById('postsList');
const formCreatePostElement = document.getElementById('formCreatePost')

button.addEventListener('click', async () => {
    const postsArr = await getPost();
    console.log(postsArr);
    postsArr.map((el) => createElementPost(el))
})



const baseURL = 'https://jsonplaceholder.typicode.com';

async function getPost(limit = 10) {
    try {
        const response = await fetch(baseURL + `/posts?_limit=${limit}`)
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new SyntaxError('Сообщение об ошибке')
        }
    
    } catch (error) {
        if(error.name === 'TypeError') {
            alert(error.message);
        }
        if (error.name === 'SyntaxError') {
            alert(error.message)
        }
    }
}

function createElementPost(post) {
    const postHTML = `<div class="post-item">
    <h3>${post.userId}</h3>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <details>
        <summary>показать комментарий</summary>
        <div>
            <p>комментарий 1</p>
            <p>комментарий 2</p>
            <p>комментарий 3</p>
        </div>
    </details>
</div>`
postsList.insertAdjacentHTML('beforeend',postHTML);
}

formCreatePostElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = new FormData(event.target);
    const response = await fetch(baseURL + '/posts', {
        method:'post',
        body,
    })
    if (response.ok && response.status === 201) {
        alert('Запись успешно добавлена')
    }
})