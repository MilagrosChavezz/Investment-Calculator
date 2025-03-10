import { Injectable } from "@angular/core";
import { AnnualData } from "./investment-form/annualData.model";
import { InvestmentData } from "./investment-form/annualData.model";

@Injectable({providedIn: 'root'})
export class CalculatorService {
    
  constructor() { }

  

  calculateInvestment(investmentData: InvestmentData): AnnualData[] {
    const annualData = [];
    let investmentValue = investmentData.initialInvestment;
    let totalInterest = 0;
  
    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
  
     
      const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
  
      
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
  
      
      const totalAmountInvested = investmentData.initialInvestment + investmentData.annualInvestment * year;
  
     
      const totalInterest = investmentValue - totalAmountInvested;
  
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: totalAmountInvested,
      });
    }
  
    return annualData;
  }

}