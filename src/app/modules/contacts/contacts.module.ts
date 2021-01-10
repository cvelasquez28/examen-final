import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
