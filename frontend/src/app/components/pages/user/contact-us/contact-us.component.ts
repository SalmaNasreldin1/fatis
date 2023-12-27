import { Component } from '@angular/core';
import { HeaderComponent } from "../../../partials/header/header.component";
import { ContactUsTitleComponent } from "../../../partials/contact-us-title/contact-us-title.component";
import { FooterComponent } from "../../../partials/footer/footer.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    imports: [HeaderComponent, ContactUsTitleComponent, FooterComponent]
})
export class ContactUsComponent {

}
