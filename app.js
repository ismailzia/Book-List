//const 
const title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn'),
      bookForm = document.querySelector('#book-form'),
      bookList = document.getElementById('book-list');


//book function constractor 
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI function
function UI(){}


//prototype add book to the list 
UI.prototype.addBookToList = (book) => {

        //create tr element
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete-item'>X</a></td>`;

        // append list to row
        bookList.appendChild(row);  
        
}

// prototype clear fields
UI.prototype.clearField = () => {
    title.value = '';
    author.value = '';
    isbn.value = '';
}

// prototype alert fieled
UI.prototype.alertFiled = function(message,className){

    //create a div 
    const div = document.createElement('div');
    //add class
    div.className = className;
    //enter a atext in a div
    const text = document.createTextNode(message);
    //append text to div
    div.appendChild(text);
    //append before bookForm 
    bookForm.insertBefore(div, bookForm.childNodes[0]);
   
   
    setTimeout(() => {
        div.style.display = 'none'
    }, 2000);
   

}



//add event listener 
bookForm.addEventListener('submit',  (e) => {

    const book = new Book(title.value,author.value,isbn.value);

    const ui = new UI();

    //validation 
    if(title.value == '' || author.value == '' || isbn.value == ''){
        // alert empty fieled
        ui.alertFiled('Please fill in all fields','error');
    }else{

        //add book to the list
        ui.addBookToList(book);
        
        //clear fields 
        ui.alertFiled('Book Added','success');
        //clearField
        ui.clearField();
        
    }

    // ui.alertFiled('Book removed','error');
    e.preventDefault();
})


//add evente listenner for delete
bookList.addEventListener('click',function(e){
    const ui = new UI();
    if(e.target.className === 'delete-item'){
        if(confirm('Are you sure!')){
             e.target.parentElement.parentElement.remove();
            ui.alertFiled('Book removed','error')
        }
       
    }
})