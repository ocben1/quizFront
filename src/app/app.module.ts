import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule, MatListModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionsComponent, 
    HomeComponent, 
    NavComponent, 
    QuizComponent, 
    QuizzesComponent, 
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatToolbarModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
