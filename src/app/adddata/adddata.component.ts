import { Component,OnInit} from '@angular/core';
import { FormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent  {

//      implements OnInit    bookForm:any= new FormGroup({
//     'bookName': new FormControl(''),
//     'bookPages': new FormControl('')
//   })

//   constructor(private api : ApiService){}

//   books: any= []
//   ngOnInit(): void {
//     this.onSubmit()

//   }
  // onSubmit(){



// doUpdate(){

//   this.api.updateBook(this.bookFormupdate.value).subscribe(res=>{
//     this.books = res
//   })
//  }


//     this.api.addBook(this.bookFormupdate.value).subscribe(res=>

//         complete:()=>{
//           alert('data saved successfully')

//         }


//         )



}


