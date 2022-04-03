import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { HeaderComponent } from './admin/block/header/header/header.component';
import { FooterComponent } from './admin/block/footer/footer/footer.component';
import { MainComponent } from './admin/pages/main/main/main.component';
import { AddComponent } from './admin/pages/main/main/add/add/add.component';
import { DeleteComponent } from './admin/pages/main/main/delete/delete/delete.component';
import { EditComponent } from './admin/pages/main/main/edit/edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
