import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

interface contactData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contact: contactData = {
    nom: '',
    email: '',
    sujet: '',
    message: '',
  };
  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    this.contactService.sendContactForm(contactForm.value).subscribe(
      response => {
        alert(response.msg);
        
        contactForm.reset();
      },
      error => {
        alert(error.error.err)
      }
    );
  }
}