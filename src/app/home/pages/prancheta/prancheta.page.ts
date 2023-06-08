import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'ceasa-prancheta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prancheta.page.html',
  styleUrls: ['./prancheta.page.scss'],
})
export class PranchetaPage {
  constructor(private readonly localStorageService: LocalStorageService) {}
}
