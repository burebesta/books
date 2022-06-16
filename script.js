let myLibrary = []

function Book(title,author,pages,readStatus)
{
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
   
}



let book_title = document.querySelector('#book-title')

let book_author = document.querySelector('#book-author')

let book_pages = document.querySelector('#book-pages')

let read_status = document.querySelector('#read-status')

let form = document.querySelector('.add-book-box-form')

add_book_button = document.querySelector('.add-book-button')

add_book_button.addEventListener('click', function(event) {
    if (form.checkValidity())
    {
        
        let x = []
        x[0]=book_title.value
        x[1]=book_author.value
        x[2]=book_pages.value
        if (read_status.checked)
        x[3]= true
        else x[3] = false
        
        
        
        if (myLibrary.includes(''))
        {
            let index = myLibrary.indexOf('')
            x[4]=index
            myLibrary.splice(index,1,x)
        }
        else
        {
            x[4]= myLibrary.length
            myLibrary.push(x)
        }
        
        
       console.log(myLibrary)
        
        
        createCard(...x)


        let delete_button = document.querySelectorAll('.delete')

        let change_read_status = document.querySelectorAll('.change')
    
        change_read_status.forEach(button=>button.addEventListener('click',function(e){
            let index = e.target.getAttribute("data-read");
            let para = document.querySelector(`p[data-index='${index}']`)
            console.log(para)
            if (para.textContent === 'true')
            para.textContent = 'false'
            else para.textContent = 'true'
        }))
    
        delete_button.forEach(button=>button.addEventListener('click',function(e){
            
            let index = e.target.getAttribute("data-index");
            myLibrary[index] = ''
            let remove_button = document.querySelector(`button[data-index='${index}']`)
            let parent = remove_button.parentNode.parentNode;
            parent.remove()
        }))
        
        form.reset()
        event.preventDefault()
        // prevent default is needed to hide form errors after reset
    }
})

let book_showcase = document.querySelector('.book-showcase')

function createCard(title,author,pages,read,index) {
    let div = document.createElement('div')
    div.innerHTML= `<div class="book-card">
                        <h2 class="title">Title</h2>
                        <p class="title">${title}</p>
                        <h2 class="author">Author</h2>
                        <p class="author">${author}</p>
                        <h2 class="pages">Pages</h2>
                        <p class="pages">${pages}</p>
                        <h2 class="read">Read status</h2>
                        <p class="read" data-index='${index}'>${read}</p>
                        <button data-read='${index}' class="change">Change Read Status</button>
                        <button data-index='${index}' class="delete">delete</button>
                    </div>`

    book_showcase.appendChild(div)
}


