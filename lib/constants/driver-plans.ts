export const driverPlans = {
  daily: {
    id: "daily",
    name: "Daily Driver Service",
    description:
      "Perfect for one-time needs or short-term requirements. Book by the day for maximum flexibility.",
    baseRate: 30000,
    features: [
      "8-hour minimum",
      "Flexible scheduling",
      "Professional demeanor",
      "Basic route knowledge",
      "Same-day booking available",
    ],
  },
  weekday: {
    id: "weekday",
    name: "Weekday Driver (Mon-Fri)",
    description:
      "Professional driver for your weekday needs. Perfect for work commutes and business meetings.",
    baseRate: 175000,
    features: [
      "Daily schedule",
      "Familiarity with Lagos routes",
      "Defensive driving",
      "Background checked & verified",
      "Neat Appearance",
    ],
  },
  weekdayPlus: {
    id: "weekdayPlus",
    name: "Weekday+ Driver (Mon-Sat)",
    description:
      "Extended coverage including Saturdays. Ideal for professionals with weekend commitments.",
    baseRate: 195000,
    features: [
      "Defensive driving",
      "Flexible scheduling",
      "Professional demeanor",
      "Basic route knowledge",
      "Saturday coverage included",
    ],
  },
} as const;

export const salaryRates = {
  weekdays: 155000,
  fullWeek: 200000,
  shift: 30000,
} as const;

export type DriverPlanId = keyof typeof driverPlans;
export type DriverPlan = (typeof driverPlans)[DriverPlanId];
