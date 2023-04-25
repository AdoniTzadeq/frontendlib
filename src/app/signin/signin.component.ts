import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  User ={ username:'',
  password:''}
     constructor(){}
     ngOnInit():void {


     }
     displaynow(){
      alert(`The details are Email ${this.User.username}, ${this.User.password}`)
     }


}
