class Books{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn
    }
}
class UserInterface{
    static displayBooks(){
        const storedBooks =[
         {title:'The broken boy',
         author:'martin floyd',
         isbn:'3445'         
         },
         {
         title:'Star',
         author:'Sydney Sheldon',
         isbn:'983445'
         },
         { 
         title:'The famished road ',
         author:'Ben Okri',
         isbn:'786'
        }];

        const books = storedBooks;
        books.forEach((book)=>UserInterface.addBooks(book));

    }
    static addBooks=(books)=>{
    const content = document.querySelector('.content');
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>${books.title}</td>
    <td>${books.author}</td>
    <td>${books.isbn}</td>
    <td>Delete</td>
    
    `;
   content.appendChild(row);


    }
    static clearField(){
        const title =document.querySelector('#title').value='';
        const author =document.querySelector('#author').value='';
        const isbn =document.querySelector('#isbn').value='';

    }
}
document.addEventListener('DOMContentLoaded',UserInterface.displayBooks());
document.querySelector('.myform').addEventListener('submit',(e)=>{
 e.preventDefault();
 const title =document.querySelector('#title').value;
 const author =document.querySelector('#author').value;
 const isbn =document.querySelector('#isbn').value;

 const newBook = new Books(title,author,isbn);
 UserInterface.addBooks(newBook);
 UserInterface.clearField();

})