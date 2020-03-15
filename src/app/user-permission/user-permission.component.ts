import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';


@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {

constructor(private roleservice:RoleService){}

ngOnInit(){}


// showConfig() {
//   this.roleservice.getConfig()
//     .subscribe((data: Config) => this.config = {
//       heroesUrl: data['heroesUrl'],
//       textfile: data['textfile']
//     });
// }

}




