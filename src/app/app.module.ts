import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { TraningComponent } from './traning/traning.component';
import { NewTraningComponent } from './traning/new-traning/new-traning.component';
import { CurrentTraningComponent } from './traning/current-traning/current-traning.component';
import { PastTraningComponent } from './traning/past-traning/past-traning.component';
import { StopTraningComponent } from './traning/current-traning/stop-traning/stop-traning.component';
import { TraningService } from './traning/traning.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    TraningComponent,
    NewTraningComponent,
    CurrentTraningComponent,
    PastTraningComponent,
    StopTraningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [TraningService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopTraningComponent]
})
export class AppModule { }
