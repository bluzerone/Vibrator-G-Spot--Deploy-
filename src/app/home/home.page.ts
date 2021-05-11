import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import { Options } from '@angular-slider/ngx-slider';
import { AppComponent } from './../app.component'
import { StorageService } from './../services/storage.service';
import { I18nService } from './../services/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public powerBtns: any[] = [
    {
      id: 1,
      url : "/assets/ModeIcons/Dark/Active/pwr-1.png",
      urlLight: "/assets/ModeIcons/Light/Active/pwr-1.png",
      pay: true,
      active: true
    },
    {
      id: 2,
      url : "/assets/ModeIcons/Dark/Active/pwr-2.png",
      urlLight: "/assets/ModeIcons/Light/Active/pwr-2.png",
      pay: true,
      active: false
    },
    {
      id: 3,
      url : "/assets/ModeIcons/Dark/Active/pwr-3.png",
      urlLight: "/assets/ModeIcons/Light/Active/pwr-3.png",
      pay: true,
      active: false
    }
  ]


  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 7,
    vertical: true,
    showTicks: false,
    animateOnMove: true,
    animate: true,
    hidePointerLabels: true,
    hideLimitLabels: true,
    showSelectionBar: true,
    maxLimit: 7
  };

  public svgOpacity: string = '0.1';

  private bottomPosition: number = 7;
  public luckImg: any = "/assets/ModeIcons/Dark/padlock.png";
  public luckImgLight: any = "/assets/ModeIcons/Light/padlockIcon.png";
  public luckEmiter: boolean = false;
  public holdUnlock: any = "/assets/ModeIcons/Dark/holdToUnLock.png";
  public powerQuantity: any;

  public i18nIntro: any = {};
  public i18nHome: any = {};

  public intervalVibro: any;
  public thisUrl: string;

  constructor(
    public vibration: Vibration,
    public taptic: TapticEngine,
    public appComponent: AppComponent,
    public storageService: StorageService,
    public i18nService: I18nService
  ) {}

  ngOnInit(): void {
    document.querySelector<HTMLElement>('.bottom__navigate__container').style.display = 'flex';
    setTimeout(() => {
      document.querySelector<HTMLElement>('.bottom__navigate__container').style.opacity = '1';
      this.i18nIntro = this.i18nService.intro;
      this.i18nHome = this.i18nService.home;
    }, 400);
  };

  ionViewWillEnter() {
    if (this.storageService.themeDark === 'false') {
      document.querySelector<HTMLElement>('.toggle__body .ngx-slider .ngx-slider-pointer').style.background = '#FE175C';
      document.querySelector<HTMLElement>('.toggle__body .ngx-slider .ngx-slider-selection-bar .ngx-slider-selection').style.opacity = '0.2';
    } else {
      document.querySelector<HTMLElement>('.toggle__body .ngx-slider .ngx-slider-pointer').style.background = '#ffffff';
      document.querySelector<HTMLElement>('.toggle__body .ngx-slider .ngx-slider-selection-bar .ngx-slider-selection').style.opacity = '1';
    }
    this.checkPay();
    this.thisUrl = document.location.pathname;
    this.appComponent.navigate.forEach((elem) => {
      if(elem.router[0] === this.thisUrl){
        elem.active = true;
      }else{
        elem.active = false
      }
    })
  }

  sliderEvent() {
    if (this.value > 3 && !this.appComponent.pay) {
      this.appComponent.presentModal();
      this.value = 3;
    }
  };

  startVibrate(time, timeOut, style1, style2) {
    this.intervalVibro = setInterval(() => {
      setTimeout(() => {
        (<any>window).TapticEngine.impact({style: style1});
        (<any>window).TapticEngine.selection();
      }, timeOut);
      setTimeout(() => {
        (<any>window).TapticEngine.impact({style: style2});
        (<any>window).TapticEngine.selection();
      }, timeOut);
    }, time);
  }

  valueChange(){

    if (this.value === 0) {
      clearInterval(this.intervalVibro);
    }

    if (this.value === 1) {
      clearInterval(this.intervalVibro);
      this.startVibrate(350, 150, 'light', 'light');
    }

    if (this.value === 2) {
      clearInterval(this.intervalVibro);
      this.startVibrate(300, 100, 'light', 'light');
    }

    if (this.value === 3) {
      clearInterval(this.intervalVibro);
      this.startVibrate(200, 100, 'light', 'light');
    }

  }

  vibroPower(id) {
    if (id > 1 && !this.appComponent.pay) {
      this.appComponent.presentModal();
    }
    this.powerBtns.forEach(element => {
      if (!this.appComponent.pay) {
        this.powerBtns[0].active = true;
      } else {
        if (element.pay && element.id === id) {
          element.id === id ? element.active = true : element.active = false;
          console.log('Запуск мощности ' + id);

        } else {
          element.active = false
        }
      }
    });
    this.powerQuantity = id;
  }

  luckEvent(e){
    if (!this.luckEmiter) {
      document.querySelector<HTMLElement>('.bottom__navigate__disabled').style.display = 'flex';
      document.querySelector<HTMLElement>('.bottom__navigate').style.display = 'none';
      this.luckImg = "/assets/ModeIcons/Dark/luckClose.png";
      this.luckEmiter = true;
    }
  }

  onPress($event) {
    setTimeout(() => {
      this.luckEmiter = false;
      this.luckImg = "/assets/ModeIcons/Dark/padlock.png";
      document.querySelector<HTMLElement>('.bottom__navigate__disabled').style.display = 'none';
      document.querySelector<HTMLElement>('.bottom__navigate').style.display = 'flex';
    }, 500);
  }

  eventVip() {
    this.appComponent.presentModal();
  }

  checkPay(){
    if(!this.appComponent.pay){
      this.powerBtns.forEach(e => {
        e.id > 1 ? e.pay = false : e.pay = true;
      })
    } else {
      this.powerBtns.forEach(e => {
        e.pay = true;
      })
    }
  }

  startVibrate2() {
    (<any>window).TapticEngine.unofficial.strongBoom(
      function() {
        // note that unsupported iOS devices like the simulator also end up here, at the moment
        console.log("strongBoom weakly, if available.");
      }, function () {
        console.log("You're running on Android. Meh.");
      }
    )
  }

  startVibrate3() {
    this.vibration.vibrate(1000);
    setTimeout(() => {
      (<any>window).TapticEngine.unofficial.burst(
        function() {
          // note that unsupported iOS devices like the simulator also end up here, at the moment
          console.log("burst weakly, if available.");
        }, function () {
          console.log("You're running on Android. Meh.");
        }
      )
    }, 800);

  }

}
