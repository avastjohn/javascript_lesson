var Booklist = function(numberRead, numberUnread, nextBook, currentBook,
lastBook, bookShelf) {
    this.numberRead = numberRead;
    this.numberUnread = numberUnread;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookShelf = bookShelf;

    this.chooseNextBook = function() {
        this.currentBook.read = true;
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.numberRead++;
        this.numberUnread--;
        for (var i=0; i < this.bookShelf.length; i++) {
            if (!(bookShelf[i].read)) {
                this.nextBook = this.bookShelf[i];
                break;
            }
        }
    };

    this.printCurrentBook = function() {
        place = document.getElementById("booksGoHere");
        place.innerHTML = "<strong>currentBook:</strong> " + this.currentBook.bookTitle;
    };

    this.printBookList = function() {
        var newUL = document.createElement("ul");
        for (var i=0; i < this.bookShelf.length; i++) {
//      create list item tag, create textNode, put textNode in li tag
            var newLI = document.createElement("li");
            var txt = document.createTextNode(this.bookShelf[i].bookTitle);
            newBr = document.createElement('br');
            newLI.appendChild(txt);
            newLI.appendChild(newBr);
            
//     create image tag, create image, put image in li tag             
            var newImg = document.createElement("img");
            newImg.src = this.bookShelf[i].imageUrl;
            newImg.width = 200;
            newLI.appendChild(newImg);
            newUL.appendChild(newLI);
        }
        document.body.appendChild(newUL);
    };

    this.addBook = function(Book) {
        this.bookShelf.push(Book);
    };
};

var Book = function(bookTitle, genre, author, imageUrl, read, readDate) {
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.imageUrl = imageUrl;
    this.read = read;
    this.readDate = readDate;
};

prideAndPrej = new Book("Pride & Prejudice", "Classic", "Jane Austen", "http://pride-and-prejudice-analysis.wikispaces.com/file/view/cover.jpg", true, "2011, 10, 22");
fangirl = new Book("Fangirl", "Young Adult", "Rainbow Rowell", "http://rainbowrowell.com/blog/wp-content/uploads/2012/12/FANGIRL_CoverDec2012-725x1075.jpg", false);
foundations = new Book("Foundations", "Science Fiction", "Isaac Asimov", "http://rhodesmill.org/brandon/static/2011/fopnp-cover280.jpg", false);
hpSix = new Book("Harry Potter and the Half Blood Prince", "Young Adult", "JK Rowling", "http://yabooklog.nassaulibrary.org/oldblog/Harry%20Potter%20and%20the%20Half-Blood%20Prince%20Cover.jpg", false, "2013, 05, 13");
grapesOfWrath = new Book("The Grapes of Wrath", "Historical Fiction", "John Steinbeck", "http://totalnerd.files.wordpress.com/2011/10/grapes-of-wrath.jpg", false);
Nineteen84 = new Book("1984", "Science Fiction", "George Orwell", "http://flavorwire.files.wordpress.com/2011/06/1984-book-cover.jpeg", true);

var avaBookShelf = [prideAndPrej, grapesOfWrath, fangirl, foundations, hpSix];

avaBookList = new Booklist(1, 4, fangirl, foundations, prideAndPrej, avaBookShelf);

avaBookList.printBookList();
avaBookList.addBook(Nineteen84);
