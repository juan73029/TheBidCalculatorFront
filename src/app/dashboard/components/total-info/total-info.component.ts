import { Component, Input, signal } from '@angular/core';
import { BidDTO } from '../../interfaces/bidDTO.interface';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.css']
})
export class TotalInfoComponent {

  @Input() bid = signal<BidDTO | undefined>(undefined);
}
