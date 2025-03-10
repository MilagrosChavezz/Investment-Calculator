import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from "./investment-form/investment-form.component";
import { ResultsComponent } from "./results/results.component";
import { AnnualData } from './investment-form/annualData.model';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, InvestmentFormComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InvestmentCalculator';

  annualData!: AnnualData[];

  isCalculated = false;
  
  showResults(annualData: AnnualData[]) {
    this.isCalculated = true;
    this.annualData = annualData;
  }
}
