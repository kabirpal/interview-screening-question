import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [CounterService] // This makes a new instance of MyService at the parent level
})
export class ParentComponent {
  primitiveData: number = 0;
  nonPrimitiveData: {counter:number}= {counter:0};

  constructor(private counterService: CounterService) {}

  updatePrimitiveCounter(){
    this.primitiveData++;
    this.counterService.setCounter(this.primitiveData);
  }

  updateNonPrimitiveCounter(){
    this.nonPrimitiveData.counter++;
  }

  getCounterFromService() {
    this.primitiveData = this.counterService.getCounter();  // Retrieve service counter
  }
}
