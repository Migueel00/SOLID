class User {

  public name: string;
  public age: number;
  public id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

class Book {

  private title: string;
  public id: number;
  public copies: number;

  constructor(title: string, id: number, copies: number){
    this.title = title;
    this.id = id;
    this.copies = copies;
  }
}

class Loan{
  public user_id: number;
  public book_id: number;

  constructor(user_id: number, book_id: number){
    this.user_id = user_id;
    this.book_id = book_id;
  }
}

class LoansService{
  private books: Book[];
  private users: User[];

  constructor(books: Book[], users: User[]){
    this.books = books;
    this.users = users;
  }

  public loanBook(user_id: number, book_id: number): void {
    const book = this.books.find(b => b.id === book_id && b.copies > 0);
    const user = this.users.find(u => u.id === user_id);
    this.middleware(book, user);
    book.copies--;
  }

  private middleware(book: Book, user: User) : void{
    if(!book) {
      throw new Error('Book not available');
    }

    if(!user) {
      throw new Error('User not found');
    }
  }

  public returnBook(user_id: number, book_id: number): void {
    const book = this.books.find(b => b.id === book_id);
    const user = this.users.find(u => u.id === user_id);
    this.middleware(book, user);
    book.copies++;
  }
}

class Library {
  private books: Book[];
  private users: User[];
  private loans: Loan[];
  private loansService: LoansService;

  constructor(loansService: LoansService) {
    this.books = [];
    this.users = [];
    this.loans = [];
    this.loansService = loansService
  }

  public addBook(book: Book) {
    this.books.push(book);
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public loanBook(user_id: number, book_id: number) {
    this.loansService.loanBook(user_id, book_id);
    this.loans.push(new Loan(user_id, book_id));
  }

  public returnBook(user_id: number, book_id: number) {
    this.loansService.returnBook(user_id, book_id);
    const index = this.loans.findIndex(l => l.user_id === user_id && l.book_id === book_id);
    if (index !== -1) {
      this.loans.splice(index, 1);
    }
  }
}

// Ejemplo de uso
const books: Book[] = [new Book('Book 1', 1, 3), new Book('Book 2', 2, 2)];
const users: User[] = [new User('User 1', 25, 1), new User('User 2', 30, 2)];
const loansService = new LoansService(books, users);
const library = new Library(loansService);

library.addBook(new Book('Book 3', 3, 1));
console.log(library);

library.addUser(new User('User 3', 22, 3));
console.log(library);

library.loanBook(1, 1);
console.log(library);

library.returnBook(1, 1);
console.log(library);
