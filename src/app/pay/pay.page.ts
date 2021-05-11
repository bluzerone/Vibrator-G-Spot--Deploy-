import { Component, OnInit } from '@angular/core';
import { I18nService } from './../services/i18n.service';
import { ModalController } from '@ionic/angular';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(
    public i18nService: I18nService,
    public modalController: ModalController,
    public storageService: StorageService) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
    this.storageService.showModal = false;
  }

}
