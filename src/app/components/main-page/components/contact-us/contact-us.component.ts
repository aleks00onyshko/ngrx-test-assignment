import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public createForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
  });
  public controls = {
    fullName: this.createForm.get('fullName') as FormControl,
    email: this.createForm.get('email') as FormControl,
    phoneNumber: this.createForm.get('phoneNumber') as FormControl,
  };

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public submit() {
    this.snackBar.open('Submit was successfull');
  }
}
