export interface AnnualData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export interface InvestmentData {
    annualInvestment: number, 
    initialInvestment: number, 
    expectedReturn: number, 
    duration: number
}