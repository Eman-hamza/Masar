import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'مسار';
  // currentLang:string;

constructor(public translate:TranslateService){
  // this.currentLang=localStorage.getItem('currentLang')|| 'ar'
  // this.translate.use(this.currentLang)
}
// changecurrentLang(lang:string){
// this.translate.use(lang);
// localStorage.setItem('currentLang',lang)
// }
}
