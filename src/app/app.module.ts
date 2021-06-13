import { NgModule } from '@angular/core';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ExamComponent } from './components/exam/exam.component';
import { PlanningsComponent } from './components/plannings/plannings.component';
import { CreatePlanningComponent } from './components/createPlanning/create-planning.component';
import { AddTemaComponent } from './components/add-tema/add-tema.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addFinal', component: ExamComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'plannings', component: PlanningsComponent},
  { path: 'createPlanning', component: CreatePlanningComponent},
  { path: 'addTema', component: AddTemaComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExamComponent,
    PlanningsComponent,
    CreatePlanningComponent,
    AddTemaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {   
}
