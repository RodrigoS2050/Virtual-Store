import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  state: boolean = false;
  form!: FormGroup;
  constructor(private router: Router, private formBuild: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: [
        '',
        [Validators.required, , Validators.pattern(/[A-Z][a-z]* [A-Z][a-z]*/)],
      ],
      card: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{4}-?\d{4}-?\d{4}-?\d{4}-?$/),
        ],
      ],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
    });
  }
  boughtItem() {
    if (this.form.valid) {
      this.state = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }
  }
}
