import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-proyecto-e6c9e","appId":"1:814960605357:web:0996acf58df28f8cd76e24","storageBucket":"angular-proyecto-e6c9e.appspot.com","apiKey":"AIzaSyC1SvPgVfERPkj7kzDYaG9nXQ95ZoruidE","authDomain":"angular-proyecto-e6c9e.firebaseapp.com","messagingSenderId":"814960605357"})),
    provideAuth(() => getAuth())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
