function photos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}
photos();
function displayPhoto(data){
    const photoContainer = document.getElementById('photo-container')
    photoContainer.classList.add('photo')
    for(const photo of data){
        console.log(photo);
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML = `
        <h3>photoId: ${photo.id}</h3>
        <h3>${photo.title}</h3>
        <h4>${photo.url}</h4>
        <h4>${photo.thumbnailUrl}</h4>
        `
        photoContainer.appendChild(photoDiv);
    }
}