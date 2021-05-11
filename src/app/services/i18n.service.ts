import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization/ngx';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  public language: string;

  public intro: any;
  public home: any;
  public modes: any;
  public setings: any;
  public modal: any;
  public pay: any;
  

  constructor(
    private globalization: Globalization,
    private _translate: TranslateService
  ) { }

  _initialiseTranslation(): void {
    this._translate.get('intro').subscribe((res: string) => {
      this.intro = res;
    });
    this._translate.get('home').subscribe((res: string) => {
      this.home = res;
    });
    this._translate.get('modes').subscribe((res: string) => {
      this.modes = res;
    });
    this._translate.get('setings').subscribe((res: string) => {
      this.setings = res;
    });
    this._translate.get('modal').subscribe((res: string) => {
      this.modal = res;
    });
    this._translate.get('pay').subscribe((res: string) => {
      this.pay = res;
    });
  }

  getDeviceLanguage() {
    if (window.Intl && typeof window.Intl === 'object') {
      this._initTranslate(navigator.language.substr(0, 2))
    }
    else {
      this.globalization.getPreferredLanguage()
        .then(res => {
          this._initTranslate(res.value)
        })
        .catch(e => {console.log(e);});
    }
  }

  _initTranslate(language) {
    this._translate.setDefaultLang('en');
    if (language) {
      this.language = language;
    }
    else {
      this.language = 'en';
    }
    this._translateLanguage();
  }

  _translateLanguage(): void {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }
}
