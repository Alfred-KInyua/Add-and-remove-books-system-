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

    }
}