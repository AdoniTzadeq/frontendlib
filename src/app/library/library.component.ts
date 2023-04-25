import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})


export class LibraryComponent implements OnInit  {

           constructor(private apiService : ApiService){}

           books: any= []
         ngOnInit():void {
             this.getData()

         }

         getData(){

          this.apiService. getBookList().subscribe(res=>{
            this.books = res
          })
         }


         onDelete(_id: string) {

          const  a= this.apiService. deleteBook(_id)


          }
        }





// updatepage(id:any){
//   this.apiService.navigate(['/update', id])
