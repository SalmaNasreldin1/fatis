import { Component } from '@angular/core';
import { HeaderComponent } from "../../../partials/header/header.component";
import { Category1Component } from "../../../partials/category1/category1.component";
import { AboutpartComponent } from "../../../partials/aboutpart/aboutpart.component";
import { FooterComponent } from "../../../partials/footer/footer.component";
import { StartComponent } from "../../../partials/start/start.component";

@Component({
    selector: 'app-aboutus',
    standalone: true,
    templateUrl: './aboutus.component.html',
    styleUrl: './aboutus.component.css',
    imports: [HeaderComponent, Category1Component, AboutpartComponent, FooterComponent, StartComponent]
})
export class AboutusComponent {

}
