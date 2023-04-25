import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Book } from './models/book'
// import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   constructor(private http:HttpClient){}

   //apiUrl='http://localhost://8754/api/books/'

// //to fetch all data
  getBookList(){
    console.log("Inside getBookList");

    // return this.http.get(`http://localhost:8754/api/books/`)

    return this.http.get('api')

  }
//   //to delete data
  deleteBook(id:any){
    return this.http.delete(`api/${id}`)
  }

//   //to add new Book
//  addBook(data:any,id:any){
//   return this.http.post(`http://localhost:8754/api/books/Adddata/' +${data,id} )


// }


//   //to update existing Data of the Book


// updateBook(id: string, name: string, page: number) {
//   const url = `http://localhost:8754/api/books/${id}`;
//   const data = { bookName, bookPages };
//   return this.http.put(url, data);
// }


  // updateBook(data:any,id:any){
  //   return this.http.post(`http://localhost:8754/api/books/Adddata/Update`{data,id})
  // }


}
