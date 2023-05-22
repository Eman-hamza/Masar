import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { StudentTeatcherGuard } from './student-teatcher.guard';
import { StudentDataComponent } from './student-data/student-data.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { adminGuard } from './admin.guard';
import { GradesForAdminComponent } from './grades-for-admin/grades-for-admin.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateQestionComponent } from './create-qestion/create-qestion.component';
import { TeatcherPageComponent } from './teatcher-page/teatcher-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',canActivate:[AuthGuard,StudentTeatcherGuard],component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'BeforeRegister',component:BeforeRegisterComponent},
  {path:'StudentData',canActivate:[AuthGuard,adminGuard],component:StudentDataComponent},
  {path:'TeacherData',canActivate:[AuthGuard,adminGuard],component:TeacherDataComponent},
  {path:'AdminHome',component:AdminPageComponent},
  {path:'TeacherHome',component:TeatcherPageComponent},
  {path:'StudentHome',component:StudentPageComponent},
  {path:'GradesStudent/:id',canActivate:[AuthGuard],component:GradesForAdminComponent},
  {path:'CreateExam',canActivate:[AuthGuard,StudentTeatcherGuard],component:CreateExamComponent},
  {path:'CreateQestion/:id',canActivate:[AuthGuard,StudentTeatcherGuard],component:CreateQestionComponent},




  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }