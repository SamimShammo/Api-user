const myNewData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => myNew(data))
}
// myNewData();
const myNew = data => {
    console.log(data)
    const container = document.getElementById('getData')
    data.forEach(data => {
        const div = document.createElement('div')
        div.innerHTML = `<div onclick="clickMe(${data.id})"><h1>${data.name}</h1> <h4>id: ${data.id}</h4> </div>`
        container.appendChild(div)
    });
}
const clickMe = data => {

    const container = document.getElementById('newDa')
    container.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `<p>${data}</p>`
    container.appendChild(div)
    // console.log(postId)
    // fetch(`https://jsonplaceholder.typicode.com/comments`)
    //     .then(res => res.json())
    //     .then(data => getDatas(data.id[1]))


}
// const getDatas = (data) => {
//     const cons = document.getElementById('newDa')
//     const div = document.createElement('div')
//     div.innerHTML = `<p>${data.postId}</p>` 
//     cons.appendChild(div)
// }