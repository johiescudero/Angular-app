import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarComponent } from './components/editar/editar.component';
import { ExamComponent } from './components/exam/exam.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "addFinal", component: ExamComponent, pathMatch: "full" },
  { path: "updateFinal", component: EditarComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch:"full"}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
