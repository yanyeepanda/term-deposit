export type InterestPaidFrenquency =
  | "monthly"
  | "quarterly"
  | "annually"
  | "at_maturity";

const termDeposit = (
  start: number,
  rate: number,
  term: number,
  interestPaid: InterestPaidFrenquency
): number | null => {
  if (start >= 0 && rate >= 0 && term >= 0) {
    switch (interestPaid) {
      case "at_maturity":
        return Math.round(start * (1 + (rate / 100) * term));
      case "annually":
        return Math.round(start * Math.pow(1 + rate / 100, term));
      case "quarterly":
        return Math.round(start * Math.pow(1 + rate / 100 / 4, term * 4));
      case "monthly":
        return Math.round(start * Math.pow(1 + rate / 100 / 12, term * 12));
    }
  } else {
    console.warn("Please check the inputs");
    return null;
  }
};
export default termDeposit;
