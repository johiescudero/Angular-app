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
import { EditarComponent } from './components/editar/editar.component';
import { PlanningsComponent } from './components/plannings/plannings.component';
import { CreatePlanningComponent } from './components/createPlanning/create-planning.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addFinal', component: ExamComponent},
  { path: 'updateFinal', component: EditarComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'plannings', component: PlanningsComponent},
  { path: 'createPlanning', component: CreatePlanningComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExamComponent,
    EditarComponent,
    PlanningsComponent,
    CreatePlanningComponent,
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
