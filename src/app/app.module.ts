import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewUserComponent } from './components/new-user/new-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [AppComponent, NewUserComponent, UpdateUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
