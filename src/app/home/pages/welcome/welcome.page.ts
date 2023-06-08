import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { DateFormatDirective } from 'src/app/shared/directives/date-format.directive';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  standalone: true,
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    DateFormatDirective,
  ],
})
export class WelcomePage {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private router: Router
  ) {}

  listForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  finish() {
    this.localStorageService.setItem('list', this.listForm.value);
    this.router.navigate(['/home/prancheta']);
  }
}
