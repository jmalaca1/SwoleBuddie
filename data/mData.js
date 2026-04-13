export const MEALS = [
  {
    id: "1",
    name: "Grilled Salmon with Veggies",
    description: "High-protein, omega-3 rich meal perfect for muscle building and heart health",
    image: "https://images.unsplash.com/photo-1601314212732-047d4bdffd22?w=1080",
    price: 12.50,
    calories: 450,
    prepTime: 25,
    tags: ["High-Protein", "Low-Carb", "Omega-3"],
    goals: ["muscle-gain", "heart-health", "weight-loss"],
    ingredients: [
      "6 oz salmon fillet",
      "2 cups broccoli florets",
      "1 cup cherry tomatoes",
      "2 tbsp olive oil",
      "1 lemon",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Fresh dill"
    ],
    instructions: [
      "Preheat grill to medium-high heat (375-450°F)",
      "Season salmon with salt, pepper, and minced garlic",
      "Drizzle olive oil over salmon and vegetables",
      "Grill salmon for 4-5 minutes per side until cooked through",
      "Grill vegetables for 8-10 minutes, turning occasionally",
      "Squeeze fresh lemon juice over salmon and garnish with dill",
      "Serve immediately while hot"
    ]
  },
  {
    id: "2",
    name: "Quinoa Buddha Bowl",
    description: "Plant-based protein packed bowl with fresh vegetables",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1080",
    price: 10.99,
    calories: 520,
    prepTime: 20,
    tags: ["Plant-Based", "High-Fiber", "Gluten-Free"],
    goals: ["plant-based", "weight-loss", "balanced"],
    ingredients: [
      "1 cup quinoa",
      "2 cups mixed greens",
      "1 avocado",
      "1/2 cup chickpeas",
      "1/4 cup pumpkin seeds",
      "Lemon tahini dressing"
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Chop vegetables and avocado",
      "Assemble bowl with greens as base",
      "Top with quinoa, chickpeas, and avocado",
      "Sprinkle pumpkin seeds",
      "Drizzle with dressing"
    ]
  }
  // Add the other 3 meals from your Figma code here
];

export const BADGES = [
  {
    id: "1",
    name: "First Meal",
    description: "Generated your first meal",
    icon: "🍽️",
    unlocked: true,
    progress: 1,
    requirement: 1
  },
  {
    id: "2",
    name: "5 Day Streak",
    description: "Maintained a 5 day streak",
    icon: "🔥",
    unlocked: false,
    progress: 3,
    requirement: 5
  },
  {
    id: "3",
    name: "Protein Pro",
    description: "Generated 10 high-protein meals",
    icon: "💪",
    unlocked: false,
    progress: 4,
    requirement: 10
  }
  // Add more badges from Figma
];

export const GOAL_OPTIONS = [
  { id: "weight-loss", label: "Weight Loss", color: "bg-emerald-100 text-emerald-700" },
  { id: "muscle-gain", label: "Muscle Gain", color: "bg-blue-100 text-blue-700" },
  { id: "heart-health", label: "Heart Health", color: "bg-red-100 text-red-700" },
  { id: "plant-based", label: "Plant-Based", color: "bg-green-100 text-green-700" },
  { id: "quick-meals", label: "Quick Meals", color: "bg-orange-100 text-orange-700" },
  { id: "energy-boost", label: "Energy Boost", color: "bg-yellow-100 text-yellow-700" },
  { id: "balanced", label: "Balanced Diet", color: "bg-purple-100 text-purple-700" }
];