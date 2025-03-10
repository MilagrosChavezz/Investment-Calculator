import { Component, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { InvestmentData } from './annualData.model';
import { AnnualData } from './annualData.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
  annualInvestment!: number;
  initialInvestment!: number;
  expectedReturn!: number;
  duration!: number;
  investmentForm!: FormGroup;
  @Output() results = new EventEmitter<AnnualData[]>();

  constructor(private calculatorService: CalculatorService) {}

  
  calculateInvestmentData() {
    this.results.emit(this.calculatorService.calculateInvestment({
      annualInvestment: this.annualInvestment,
      initialInvestment: this.initialInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    } as InvestmentData));
  }

}
