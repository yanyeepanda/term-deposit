import termDeposit from "./termDeposit";

describe("Term Deposit", () => {
  it("When start amount, rate and term are all 0, should return 0 at any frenquency", () => {
    const totalAnnual = termDeposit(0, 0, 0, "annually");
    expect(totalAnnual).toEqual(0);
    const totalQuarterly = termDeposit(0, 0, 0, "quarterly");
    expect(totalQuarterly).toEqual(0);
    const totalMonthly = termDeposit(0, 0, 0, "monthly");
    expect(totalMonthly).toEqual(0);
    const totalAtMaturity = termDeposit(0, 0, 0, "at_maturity");
    expect(totalAtMaturity).toEqual(0);
  });

  it("When start amount, rate and term have negative number, should not do the calculation and return null", () => {
    const totalAnnual = termDeposit(-1, 0, 0, "annually");
    expect(totalAnnual).toEqual(null);
    const totalQuarterly = termDeposit(0, -1, 0, "quarterly");
    expect(totalQuarterly).toEqual(null);
    const totalMonthly = termDeposit(0, 0, -1, "monthly");
    expect(totalMonthly).toEqual(null);
    const totalAtMaturity = termDeposit(-1, -1, -1, "at_maturity");
    expect(totalAtMaturity).toEqual(null);
  });

  it("When start amount, rate and term are within normal range, should calculate total amount correctly", () => {
    const totalAnnual = termDeposit(20000, 4, 2, "annually");
    expect(totalAnnual).toEqual(21632);
    const totalQuarterly = termDeposit(20000, 4, 2, "quarterly");
    expect(totalQuarterly).toEqual(21657);
    const totalMonthly = termDeposit(20000, 4, 2, "monthly");
    expect(totalMonthly).toEqual(21663);
    const totalAtMaturity = termDeposit(20000, 4, 2, "at_maturity");
    expect(totalAtMaturity).toEqual(21600);
  });
});
