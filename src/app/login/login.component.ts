import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User ={ username:'',
  password:''}
     constructor(){}
     ngOnInit():void {


     }
     displaynow(){
      alert(`The details are Email ${this.User.username}, ${this.User.password}`)
     }

    }
