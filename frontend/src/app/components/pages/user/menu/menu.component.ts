import { Component } from '@angular/core';
import { HeaderComponent } from "../../../partials/header/header.component";
import { CategoryButtonsComponent } from "../../../partials/category-buttons/category-buttons.component";
import { MenuIntroComponent } from "../../../partials/menu-intro/menu-intro.component";
import { CakesComponent } from "../../../partials/cakes/cakes.component";
import { GateauxComponent } from "../../../partials/gateaux/gateaux.component";
import { VeganCakeComponent } from "../../../partials/vegan-cake/vegan-cake.component";
import { FooterComponent } from "../../../partials/footer/footer.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [HeaderComponent, CategoryButtonsComponent, MenuIntroComponent, CakesComponent, GateauxComponent, VeganCakeComponent, FooterComponent]
})
export class MenuComponent {

}
