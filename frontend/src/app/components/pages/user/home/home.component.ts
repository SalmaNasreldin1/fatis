import { Component } from '@angular/core';
import { HeaderComponent } from "../../../partials/header/header.component";
import { AutoplaySectionComponent } from "../../../partials/autoplay-section/autoplay-section.component";
import { ArticleContainerComponent } from "../../../partials/article-container/article-container.component";
import { DonutofthemonthComponent } from "../../../partials/donutofthemonth/donutofthemonth.component";
import { FooterComponent } from "../../../partials/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, AutoplaySectionComponent, ArticleContainerComponent, DonutofthemonthComponent, FooterComponent]
})
export class HomeComponent {

}
