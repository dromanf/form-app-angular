import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  contactForm: FormGroup;
  formMessage = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.contactForm = new FormGroup({
      'fullName': new FormControl('', Validators.required),
      'company': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'category': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const comment = this.contactForm.value;
    this.contactService.sendComment(comment);
    this.contactForm.reset();
    this.formMessage = 'Gracias por contactarnos!';
  }

}
