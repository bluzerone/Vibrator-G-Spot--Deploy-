import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { StorageService } from './../services/storage.service';
import { I18nService } from './../services/i18n.service';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.page.html',
  styleUrls: ['./modes.page.scss'],
})
export class ModesPage implements OnInit {

  public pay: boolean;
  public activeMode:string = 'Total Harmony';
  public thisUrl: string;


  public modesDark:any = [
    {
      id: '1',
      name: 'Total Harmony',
      active: true,
      iconActive: 'assets/ModeIcons/Dark/Active/yin-yang.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/yin-yang.png',
      paid: true
    },
    {
      id: '2',
      name: 'Spring Rain',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/SpringRain.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/SpringRain.png',
      paid: true
    },
    {
      id: '3',
      name: 'Time for Yourself',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Heart.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Heart.png',
      paid: true
    },
    {
      id: '4',
      name: 'Paradise Island',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/ParadiseIsland.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/ParadiseIsland.png',
      paid: false
    },
    {
      id: '5',
      name: 'Summer Storm',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Cloud.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Cloud.png',
      paid: false
    },
    {
      id: '6',
      name: 'Secrets of Nirvana',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Lotos.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Lotos.png',
      paid: false
    },
    {
      id: '7',
      name: 'Sweet Kiss',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Lips.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Lips.png',
      paid: false
    },
    {
      id: '8',
      name: 'Awakening of Power',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Fire.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Fire.png',
      paid: false
    },
    {
      id: '9',
      name: 'The glow of youth',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Star.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Star.png',
      paid: false
    },
    {
      id: '10',
      name: 'Morning Tenderness',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Flower.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Flower.png',
      paid: false
    },
    {
      id: '11',
      name: 'Balinese Morning',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Sunrise.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Sunrise.png',
      paid: false
    },
    {
      id: '12',
      name: 'Hawaiian storm',
      active: false,
      iconActive: 'assets/ModeIcons/Dark/Active/Tornado.png',
      iconActiveLight: 'assets/ModeIcons/Light/Active/Tornado.png',
      paid: false
    }
  ]

  constructor(
    public appComponent: AppComponent,
    public storageService: StorageService,
    public i18nService: I18nService) { }

  ngOnInit() {
    document.querySelector<HTMLElement>('.bottom__navigate__container').style.display = 'flex';
    setTimeout(() => {
      document.querySelector<HTMLElement>('.bottom__navigate__container').style.opacity = '1';
    }, 300);
  }

  ionViewWillEnter(){
    this.pay = this.appComponent.pay;
    this.getPayAcc();
    this.modesDark.forEach(item => {
      if(item.name === this.appComponent.activeMode){
        item.active = true;
        this.activeMode = this.appComponent.activeMode;
      }
    });
    this.thisUrl = document.location.pathname;
    this.appComponent.navigate.forEach((elem) => {
      if(elem.router[0] === this.thisUrl){
        elem.active = true;
      }else{
        elem.active = false
      }
    })
  }

  changeNavigate(id) {
    this.modesDark.forEach(element => {
      if(element.id === id && element.paid){
        element.active  = true;
        this.activeMode = element.name;
        this.appComponent.activeMode = element.name;
        this.appComponent.navigate.forEach(item => {
          item.id === '1' ? item.icon = element.iconActive : 'assets/ModeIcons/Dark/Active/yin-yang.png';
          item.id === '1' ? item.iconLight = element.iconActiveLight : 'assets/ModeIcons/Light/Active/yin-yang.png';
        });
      }else if(element.id === id && !element.paid){
        // element.active = false;
      }
    });
  }

  getPayAcc(){
    if(this.pay){
      this.modesDark.forEach(element => {
        element.paid = true;
      });
    }
  }

}
