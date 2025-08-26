import { PricingPlan } from "../types/pricing";

/**
 * Mock pricing service
 */
export const pricingService = {
  /**
   * Get pricing plans
   */
  async getPlans(): Promise<{ monthly: PricingPlan[]; annual: PricingPlan[] }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const monthlyPlans: PricingPlan[] = [
      {
        id: "beginner-monthly",
        name: "Title",
        description: "Perfect for getting started",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item", "List item"],
        sku: "1-beginner",
      },
      {
        id: "advanced-monthly",
        name: "Title",
        description: "For growing businesses",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item", "List item"],
        popular: true,
        sku: "2-advanced",
      },
      {
        id: "business-monthly",
        name: "Title",
        description: "Enterprise-grade features",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item", "List item"],
        sku: "3-business",
      },
    ];

    const annualPlans: PricingPlan[] = [
      {
        id: "beginner-annual",
        name: "Title",
        description: "Perfect for getting started",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item", "List item"],
        sku: "1-beginner",
      },
      {
        id: "advanced-annual",
        name: "Title",
        description: "For growing businesses",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item", "List item"],
        popular: true,
        sku: "2-advanced",
      },
      {
        id: "business-annual",
        name: "Title",
        description: "Enterprise-grade features",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item", "List item"],
        sku: "3-business",
      },
    ];

    return { monthly: monthlyPlans, annual: annualPlans };
  },

  /**
   * Calculate cart total
   */
  calculateTotal(plans: PricingPlan[]): number {
    return plans.reduce((total, plan) => total + plan.price, 0);
  },
};
