import { Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private renderer: Renderer2;
  public getThemStoroge: any;
  public themeDark: any;
  public showModal: boolean = false;

  constructor(
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.setThems();
  }

  setThems() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.getThemStoroge = window.localStorage.getItem("theme");

    if (this.getThemStoroge === 'true') {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
      this.themeDark = 'true';
    } else if (this.getThemStoroge === 'false') {
      this.renderer.setAttribute(document.body, "color-theme", "light");
      this.themeDark = 'false';
      console.log(this.themeDark);
    } else {
      window.localStorage.setItem("theme", String(prefersDark.matches));
      this.themeDark = String(prefersDark.matches);
      if (prefersDark.matches) {
        this.renderer.setAttribute(document.body, "color-theme", "dark");
      } else {
        this.renderer.setAttribute(document.body, "color-theme", "light");
      }
    }
  }

  setItem(val) {
    window.localStorage.setItem("theme", String(val.detail.checked));
    if (val.detail.checked) {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
      this.themeDark = 'true';
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "light");
      this.themeDark = 'false';
    }
  }

}
