export const driverPlans = {
  daily: {
    id: "daily",
    name: "Daily Driver",
    description: "Professional driver for daily commutes",
    baseRate: 30000,
    features: ["8-hour service", "Flexible scheduling", "Professional vehicle"],
  },
  weekday: {
    id: "weekday",
    name: "Weekday Driver",
    description: "Monday to Friday driver service",
    baseRate: 155000,
    features: ["5-day service", "Consistent scheduling", "Premium vehicle"],
  },
  weekdayPlus: {
    id: "weekdayPlus",
    name: "Weekday+ Driver",
    description: "Extended weekday service with additional benefits",
    baseRate: 175000,
    features: [
      "5-day service",
      "Extended hours",
      "Luxury vehicle",
      "Priority support",
    ],
  },
  fullWeek: {
    id: "fullWeek",
    name: "Full Week Driver",
    description: "Complete weekly driver service",
    baseRate: 200000,
    features: [
      "7-day service",
      "24/7 availability",
      "Premium vehicle",
      "Dedicated support",
    ],
  },
  vipSpy: {
    id: "vipSpy",
    name: "VIP Spy Police Driver",
    description: "Elite security-trained driver service",
    baseRate: 300000,
    features: [
      "Security clearance",
      "VIP treatment",
      "Armored vehicle",
      "24/7 protection",
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

