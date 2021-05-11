import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component'
import { AlertController } from '@ionic/angular';
import { I18nService } from './../services/i18n.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public theme: boolean;
  public thisUrl: string;

  constructor(
    public appComponent: AppComponent,
    public alertController: AlertController,
    public i18nService: I18nService,
    public storageService: StorageService
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'how',
      header: this.i18nService.modal['Does not vibrate?'],
      message: '<div class="alert__text">' + this.i18nService.modal['Make sure that'] + '</div>'+
      '<div class="alert__text">' + this.i18nService.modal['settings1'] + '</div>'+
      '<div class="alert__text">' + this.i18nService.modal['settings2'] +'</div>',
      buttons: [this.i18nService.modal['Ok, close']]
    });
    await alert.present();
  }

  setActive(){
    this.appComponent.changeNavigate('2');
  }

  ionViewWillEnter() {
    this.thisUrl = document.location.pathname;
    this.appComponent.navigate.forEach((elem) => {
      if(elem.router[0] === this.thisUrl){
        elem.active = true;
      }else{
        elem.active = false;
      }
    })
  }





}
