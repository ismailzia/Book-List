//const 
const title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn'),
      bookForm = document.querySelector('#book-form'),
      bookList = document.getElementById('book-list');


//classes
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{

    //add book
    addBook(book){
        //create element 
        const row = document.createElement('tr');
        //append row to bookList
        bookList.appendChild(row);

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete-item'>X</a></td>`;
    }
      
    //alert filed 
    alertField(message,className){

        //create element 
        const div = document.createElement('div');
        //add class
        div.className = className;
        //add text
        const text = document.createTextNode(message)//Please fill in all fields
        //append text to div
        div.appendChild(text);
        //insert div before 
        bookForm.insertBefore(div,bookForm.childNodes[0]);
        setTimeout(() => {
            div.style.display = 'none';
        }, 2000);
    }

    //clear filed
    clearField(){
        title.value = '';
        author.value = '';
        isbn.value = '';
    }

}

//add evente listener
bookForm.addEventListener('submit', function(){

    const book = new Book(title.value,author.value,isbn.value);

    const ui = new UI();

    if(title.value=='' || author.value=='' || isbn.value==''){
        
        ui.alertField('Please fill in all fields','error')

    }else{
        ui.addBook(book);
        ui.alertField('book Added','success')
        ui.clearField();
    }
})

//add evente listenner remove
bookList.addEventListener('click',function(e){

    const ui = new UI();

    if(e.target.className === 'delete-item'){
        if(confirm('Are You Sure!')){
             e.target.parentElement.parentElement.remove();
            ui.alertField('book deleted','success')

        }
    }
        
})