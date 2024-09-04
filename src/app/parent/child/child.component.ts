import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data:{counter:number}={counter:0};
  
  constructor(
    private cdr: ChangeDetectorRef, 
    private counterService: CounterService
  ) {}

  counter : number =0;

  updateCounter() {
    this.counter++;
    this.counterService.setCounter(this.counter); 
  }

  markForCheck() {
    // Manually triggering change detection
    this.cdr.markForCheck();
  }

  getCounterFromService() {
    this.counter = this.counterService.getCounter();  // Retrieve service counter
  }
}
