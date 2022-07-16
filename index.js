class Books{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn
    }
}
class storage{
 static getBook(){
    let books;
    if(localStorage.getItem('books')==null){
        books =[];
    }
    else{
        books =JSON.parse( localStorage.getItem('books'));
    }
    return books
 }
 static addBook(book){
    const books = storage.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
 }
 static removeBook(isbn){
    const books = storage.getBook();
    books.forEach((book,index)=>{
        if(book.isbn===isbn){
      books.splice(index,1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
 }
}
class UserInterface{
    static displayBooks(){
     
        const books = storage.getBook();
        books.forEach((book)=>UserInterface.addBooks(book));

    }
    static addBooks=(books)=>{
    const content = document.querySelector('.content');
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>${books.title}</td>
    <td>${books.author}</td>
    <td>${books.isbn}</td>
    <td><a href="#" class ="delete">Delete</a></td>    
    `;
   content.appendChild(row);


 }
 
    static clearField(){
        const title =document.querySelector('#title').value='';
        const author =document.querySelector('#author').value='';
        const isbn =document.querySelector('#isbn').value='';

    }
    static deleteBooks=(del)=>{
        if (del.classList.contains('delete')){
           del.parentElement.parentElement.remove();
      }
        }
}
document.addEventListener('DOMContentLoaded',UserInterface.displayBooks());
document.querySelector('.myform').addEventListener('submit',(e)=>{
 e.preventDefault();
 const title =document.querySelector('#title').value;
 const author =document.querySelector('#author').value;
 const isbn =document.querySelector('#isbn').value;
 if (title===''||author===''||isbn===''){
    const row = document.querySelector('.fill')
   row.innerHTML =`
   <p class ="fills">PLEASE FILLOUT ALL INPUT FILEDS</p>
   `;
 setTimeout(()=>document.querySelector('.fills').remove(),2000);

 }
 else{
  
const newBook = new Books(title,author,isbn);
 UserInterface.addBooks(newBook);
 storage.addBook(newBook);
 UserInterface.clearField();

 }
 

})
document.querySelector('.content').addEventListener('click',(e)=>{
UserInterface.deleteBooks(e.target);
Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);


})