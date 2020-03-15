import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm, NgModel, FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { RoleService } from './role.service';
import { CockPitComponent } from './cock-pit/cock-pit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPermissionComponent,
    CockPitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
