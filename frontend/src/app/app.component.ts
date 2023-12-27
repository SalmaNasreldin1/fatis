import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { AutoplaySectionComponent } from "./components/partials/autoplay-section/autoplay-section.component";
import { ArticleContainerComponent } from "./components/partials/article-container/article-container.component";
import { DonutofthemonthComponent } from "./components/partials/donutofthemonth/donutofthemonth.component";
import { Category1Component } from "./components/partials/category1/category1.component";
import { AboutpartComponent } from "./components/partials/aboutpart/aboutpart.component";
import { StartComponent } from "./components/partials/start/start.component";
import { ContactUsTitleComponent } from "./components/partials/contact-us-title/contact-us-title.component";
import { MenuIntroComponent } from "./components/partials/menu-intro/menu-intro.component";
import { CategoryButtonsComponent } from "./components/partials/category-buttons/category-buttons.component";
import { CakesComponent } from "./components/partials/cakes/cakes.component";
import { GateauxComponent } from "./components/partials/gateaux/gateaux.component";
import { VeganCakeComponent } from "./components/partials/vegan-cake/vegan-cake.component";
import { LogoComponent } from "./components/partials/logo/logo.component";
import { SigninSignupBoxComponent } from "./components/partials/signin-signup-box/signin-signup-box.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, AutoplaySectionComponent, ArticleContainerComponent, DonutofthemonthComponent, Category1Component, AboutpartComponent, StartComponent, ContactUsTitleComponent, MenuIntroComponent, CategoryButtonsComponent, CakesComponent, GateauxComponent, VeganCakeComponent, LogoComponent, SigninSignupBoxComponent]
})
export class AppComponent {
  title = 'frontend';
}
