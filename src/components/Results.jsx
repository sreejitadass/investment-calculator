import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Yearly)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((data) => {
                    const totalInterest = data.valueEndOfYear - (data.year * data.annualInvestment);
                    const totalCapital = data.valueEndOfYear - totalInterest;

                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
