import { Component, OnInit, ViewChild } from '@angular/core';
import { I18nService } from './../services/i18n.service';
import { IonSlides } from "@ionic/angular";
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };

  public closeSlide: boolean = false;

  @ViewChild("mySlider") slides: IonSlides;

  constructor(
    public i18nService: I18nService,
    public storageService: StorageService) { }

  ngOnInit() {
    document.querySelector<HTMLElement>('.bottom__navigate__container').style.display = 'none';
  }

  slideNextEnd() {
    this.slides.getActiveIndex().then(index => {
      if (index) {
        document.querySelector<HTMLElement>('.swiper-pagination-bullets').style.display = 'none';
        document.querySelector<HTMLElement>('.swiper-pagination').style.display = 'none';
      }
    });
    setTimeout(() => {
      this.closeSlide = true;
    }, 3000);
  }

  swipeNext() {
    this.slides.slideNext();
  }

}
