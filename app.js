var input = document.querySelector('input')
var button =  document.querySelector('button')

var ul = document.querySelector('ul')
var id = 0;

var add = document.querySelector('form')
    add.addEventListener('submit', function(event) {
        id += 1;
        event.preventDefault()
        var li = document.createElement('li')

        var value = input.value
        li.innerHTML = `
        <div id=${id}>
            <span>${value}</span>
            <button onclick="deleteEvent(${id})">Xóa</button>
        </div>
        `
        
        ul.appendChild(li)
        input.value = ""
    })

function deleteEvent(id) {
    document.getElementById(id).parentNode.remove()
}