import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'ceasa-prancheta',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './prancheta.page.html',
  styleUrls: ['./prancheta.page.scss'],
})
export class PranchetaPage {
  username = this.localStorageService.getItem('list').name;

  stock = [
    {
      id: 1,
      name: 'Cenoura G',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Cenoura M',
      quantity: 20,
    },
    {
      id: 1,
      name: 'Cenoura G',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Cenoura M',
      quantity: 20,
    },
  ];

  constructor(private readonly localStorageService: LocalStorageService) {}
}
