import { AfterContentInit, Component, OnInit, Signal, inject, signal } from '@angular/core';
import { VehicleTypeService } from '../../services/vehicle-type.service';
import { CalculatorService } from '../../services/calculator.service';
import { BidDTO } from '../../interfaces/bidDTO.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  public value = signal<number>(0);
  public type = signal<string>('Luxury');
  private vehicleTypeService = inject(VehicleTypeService);
  private calculatorService = inject(CalculatorService);
  public vehicleTypes = signal<string[]>([]);
  public isLoaded = signal(false);
  public bid = signal<BidDTO | undefined>(undefined);
  public isCalculated = signal<boolean>(false);
  ngOnInit(): void {
    this.loadValues();

  }


  private loadValues() {
    this.vehicleTypeService.getVehicleType().subscribe(
      {
        next: (vehicleTypes) => {
          console.log(vehicleTypes);
          this.vehicleTypes.set(vehicleTypes);
          this.isLoaded.set(true);
        },
        error: (error) => {
          alert(error);
          this.isLoaded.set(true);
        }
      }

    );
  }
  setValue($event: number) {
    this.value.set($event);
    this.calculateBid();
  }
  setType(type: string) {
    this.type.set(type);
    this.calculateBid();
  }
  calculateBid() {
    //this.isLoaded.set(false);
    this.calculatorService.calculateBid(this.value(), this.type()).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          this.bid.set(resp);
          //this.isLoaded.set(true);
          this.isCalculated.set(true);
        },
        error: (error) => {
          alert(error);
          //this.isLoaded.set(true);
          this.isCalculated.set(true);
        }
      }

    );
  }


}
