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
            <h4>${ blogItem.id}</h4>
            <h2>${blogItem.title} </h2>
            <p> ${blogItem.body} </p>
        `
        blogItems.appendChild(div)
    }
}
