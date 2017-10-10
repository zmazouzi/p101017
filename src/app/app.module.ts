import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireDatabase} from "angularfire2/database-deprecated";

const config = {
  apiKey: "AIzaSyAo01e9qmplGAtCZRKyiNjLC6V__LOWRjg",
  authDomain: "ionic-70041.firebaseapp.com",
  databaseURL: "https://ionic-70041.firebaseio.com",
  projectId: "ionic-70041",
  storageBucket: "ionic-70041.appspot.com",
  messagingSenderId: "644421579632"
};

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config, 'my-app-name'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
