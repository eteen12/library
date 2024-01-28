document.addEventListener("DOMContentLoaded",function(){

    const myLibrary=[];

    function Book(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
   

    }
    Book.prototype.toggleRead = function(){
        this.read = !this.read;
    }
    function toggleRead(index){
        myLibrary[index].toggleRead();
        render()
    }
    function removeBook(index){
        myLibrary.splice(index,1);
        render()
    }
    function render(){
        let libraryEl = document.querySelector('#library');
        libraryEl.innerHTML = "";
        for(let i = 0; i<myLibrary.length;i++){
            let book = myLibrary[i];
        let bookEl=document.createElement("div");
        bookEl.classList.add("card-container");

        let titleEl=document.createElement("h3");
        titleEl.classList.add("card-title");
        titleEl.textContent = `${book.title}`;

        let authorEl = document.createElement("h5");
        authorEl.classList.add("card-author");
        authorEl.textContent = `${book.author}`;

        let pagesEl = document.createElement("p");
        pagesEl.classList.add("card-pages");
        pagesEl.textContent = `${book.pages} pages`;

        let readEl = document.createElement("p");
        readEl.classList.add("card-read");
        readEl.textContent = book.read ? "read":"not read yet";

        let buttonWrapper=document.createElement("div");
        buttonWrapper.classList.add("button-wrapper");


        let removeBtn=document.createElement("button");
        removeBtn.classList.add("card-remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click",function(){
            removeBook(i);
        })

        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.classList.add("card-toggle-read-btn");
        toggleReadBtn.textContent = "toggle";
        toggleReadBtn.addEventListener("click",function(){
            toggleRead(i);
        })

        bookEl.appendChild(titleEl);
        bookEl.appendChild(authorEl);
        bookEl.appendChild(pagesEl);
        bookEl.appendChild(readEl);
        bookEl.appendChild(buttonWrapper);
        buttonWrapper.appendChild(removeBtn);
        buttonWrapper.appendChild(toggleReadBtn);
        libraryEl.appendChild(bookEl);
        }
    }

    function addBookToLibrary(){
        this.title=document.querySelector('#title').value;
        this.author=document.querySelector('#author').value;
        this.pages=document.querySelector('#pages').value;
        this.read=document.querySelector('#read').checked;
        
        let newBook = new Book(title,author,pages,read);
        myLibrary.push(newBook);
        render()
    }

    let newBookBtn = document.querySelector('#new-book-btn');
    newBookBtn.addEventListener("click",function(){
        let newBookForm = document.querySelector('#new-book-form');
        newBookForm.style.display = "flex";
    })

    document.querySelector('#new-book-form').addEventListener("submit",function(event){
        event.preventDefault();
        addBookToLibrary()
    })

})