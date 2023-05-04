function dynamicBlog(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=> dynamicBlogDisplay(data))
}
dynamicBlog()
function dynamicBlogDisplay(data){
    const blogItems = document.getElementById('blog-item');
    blogItems.classList.add('blog-items')
    for(const blogItem of data){
        const div =document.createElement('div');
        div.innerHTML = `
            <h3>${ blogItem.userId}</h3>
            <h5>${blogItem.title} </h5>
            <p> ${blogItem.body} </p>
        `
        blogItems.appendChild(div)
    }
}
