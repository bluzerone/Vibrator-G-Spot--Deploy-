import { Component, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
import { I18nService } from './services/i18n.service';
import { StorageService } from './services/storage.service';
import { ModalController } from '@ionic/angular';
import { PayPage } from './pay/pay.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public vibrateIconDark: string;
  public themeDark: any;
  public activeLink: any = '1';
  public activeMode: string;
  public pay = false;

  public loaded:   boolean = false;
  public tabIndex: number  = 0;

  public navigate: any[] = [
    {
      id: '1',
      icon: 'assets/ModeIcons/Dark/Active/yin-yang.png',
      iconLight: 'assets/ModeIcons/Light/Active/yin-yang.png',
      router: ['/modes'],
      active: false
    },
    {
      id: '2',
      icon: 'assets/ModeIcons/Dark/Active/LogoActive.png',
      iconLight: 'assets/ModeIcons/Light/bigLogo.png',
      router: ['/home'],
      active: true
    },
    {
      id: '3',
      icon: 'assets/ModeIcons/Dark/Active/setings.png',
      iconLight: 'assets/ModeIcons/Light/Active/setings.png',
      router: ['/settings'],
      active: false
    }
  ];

  constructor(
    private renderer: Renderer2,
    public platform: Platform,
    public i18nService: I18nService,
    public modalController: ModalController,
    public storageService: StorageService,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.i18nService.getDeviceLanguage();
      this.themeDark = this.storageService.themeDark;
    });
  }

  changeNavigate(id) {
    // this.transition(id);
    this.navigate.forEach(element => {
      element.id === id ? element.active = true : element.active = false;
    });

  }
  public showModal: boolean = false;

  async presentModal() {
    const modal = await this.modalController.create({
     component: PayPage,
     cssClass: 'my-custom-class'
    });
    console.log(this.storageService.showModal);

    if (!this.storageService.showModal) {
      this.storageService.showModal = true;
      return await modal.present();
    }

  }

  // private getAnimationDirection(index:number):string {
  //   var currentIndex = this.tabIndex;
  //
  //   this.tabIndex = index;
  //
  //   switch (true){
  //     case (currentIndex < index):
  //       return('left');
  //     case (currentIndex > index):
  //       return('right');
  //   }
  // }
  //
  // public transition(e:any):void {
  //   let options: NativeTransitionOptions = {
  //    direction:this.getAnimationDirection(e),
  //    duration: 250,
  //    slowdownfactor: -1,
  //    slidePixels: 0,
  //    iosdelay: 20,
  //    androiddelay: 0,
  //    fixedPixelsTop: 0,
  //    fixedPixelsBottom: 48
  //   };
  //
  //   if (!this.loaded) {
  //     this.loaded = true;
  //     return;
  //   }
  //
  //   this.nativePageTransitions.slide(options);
  // }

}
