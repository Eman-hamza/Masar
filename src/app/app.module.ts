import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TeatcherPageComponent } from './teatcher-page/teatcher-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { GradesForAdminComponent } from './grades-for-admin/grades-for-admin.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateQestionComponent } from './create-qestion/create-qestion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecificxamComponent } from './specificxam/specificxam.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BeforeRegisterComponent,
    PageNotFoundComponent,
    AdminPageComponent,
    TeatcherPageComponent,
    StudentPageComponent,
    TeacherDataComponent,
    StudentDataComponent,
    GradesForAdminComponent,
    CreateExamComponent,
    CreateQestionComponent,
    SpecificxamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot(
      {
        defaultLanguage:'en',
        loader:{
          provide:TranslateLoader,
          useFactory:CreateTranslateLoader,
          deps:[HttpClient]
        }
      }
    ),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function CreateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
