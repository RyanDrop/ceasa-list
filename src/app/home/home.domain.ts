import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: `./home.domain.html`,
  styleUrls: [`./home.domain.scss`],
  imports: [RouterModule],
})
export class HomeDomain {}
