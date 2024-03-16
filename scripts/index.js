import firstBook from '../JSONS/firstBook.json' assert {type: 'json'}
import secondBook from '../JSONS/secondBook.json' assert {type: 'json'}
import thirdBook from '../JSONS/thirdBook.json' assert {type: 'json'}
let arr = [];
arr.push(firstBook);
arr.push(secondBook);
arr.push(thirdBook);
let library = {
    search(nameStr){
        let foundBooks = [];
        arr.forEach(book => {
            if (book.Name === nameStr) {
                foundBooks.push(book);
            }
        });
        return foundBooks;
    },
    //для красоты вывода решил немного исправить задание
    outPut(book){
        const bookInfo = document.querySelector('.book-info');
        let head =  document.createElement('h1');
        head.className = 'head';
        let year =  document.createElement('div');
        year.className = 'other';
        let short =  document.createElement('div');
        short.className = 'other2';
        book.forEach(element => {
            head.textContent = element.Name;
            year.textContent = element.CreateYear;
            short.textContent = element.shortDescription;
        });
        bookInfo.appendChild(head);
        bookInfo.appendChild(year);
        bookInfo.appendChild(short);
    },
    sorted(){
        let newArr = new Array();
        let newArrNum = new Array();
        let i = 0;
        arr.forEach(element =>{
            newArr[i] = element.CreateYear;
            i++;
        });
        newArr = newArr.sort(function(a,b){
            return a - b;
        });
        arr.forEach(element =>{
            for(let i = 0; i <newArr.length;i++){
                if(element.CreateYear == newArr[i]){
                    newArrNum[i] = element;
                }
            }
        });
        arr = newArrNum;
        return arr;
    }
};

let lib = prompt("Какую книгу ищем? ");
library.outPut(library.search(lib));
console.log(library.sorted());