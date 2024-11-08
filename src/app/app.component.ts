import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.loadScript("https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js");
    // this.loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
    // this.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js");
    // this.loadScript("/js/adminlte.js");
    // this.loadScript("https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js");

    // this.loadStyle("https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css");
    // this.loadStyle("https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css");
    // this.loadStyle("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css");
    // this.loadStyle("/css/adminlte.css");
    // this.loadStyle("https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css");
  }

  private loadScript(src: string): void {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }

  private loadStyle(href: string): void {
    const link = document.createElement('link');
    link.href = href;
    link.rel = "stylesheet";
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
}
