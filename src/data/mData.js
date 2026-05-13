export const MEALS = [
  {
    id: "1",
    name: "Grilled Salmon with Veggies",
    description: "High-protein, omega-3 rich meal perfect for muscle building and heart health",
    image: "https://images.unsplash.com/photo-1601314212732-047d4bdffd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ3JpbGxlZCUyMHNhbG1vbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzc0ODM0ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    description: "Nutrient-packed plant-based bowl with complete proteins and fiber",
    image: "https://images.unsplash.com/photo-1679279726937-122c49626802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBidWRkaGElMjBib3dsJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzQ3NjY3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: 9.75,
    calories: 520,
    prepTime: 30,
    tags: ["Vegan", "High-Fiber", "Complete-Protein"],
    goals: ["plant-based", "weight-loss", "energy-boost"],
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas, roasted",
      "1 cup kale, massaged",
      "1/2 avocado, sliced",
      "1/2 cup shredded carrots",
      "1/4 cup red cabbage, shredded",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Cook quinoa according to package directions and let cool",
      "Roast chickpeas with olive oil and spices at 400°F for 20 minutes",
      "Massage kale with a pinch of salt until tender",
      "Prepare tahini dressing by mixing tahini, lemon juice, and water",
      "Arrange quinoa as base in a bowl",
      "Top with chickpeas, kale, carrots, cabbage, and avocado",
      "Drizzle with tahini dressing and sprinkle sesame seeds"
    ]
  },
  {
    id: "3",
    name: "Asian Chicken Stir-Fry",
    description: "Quick and flavorful high-protein meal with colorful vegetables",
    image: "https://images.unsplash.com/photo-1761314025701-34795be5f737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc3RpciUyMGZyeSUyMGFzaWFufGVufDF8fHx8MTc3NDgzNDgxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    price: 10.25,
    calories: 480,
    prepTime: 20,
    tags: ["High-Protein", "Quick", "Asian"],
    goals: ["muscle-gain", "quick-meals", "balanced"],
    ingredients: [
      "8 oz chicken breast, sliced",
      "1 bell pepper, sliced",
      "1 cup snap peas",
      "1 cup broccoli florets",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp cornstarch",
      "Cooked rice for serving"
    ],
    instructions: [
      "Marinate chicken with soy sauce and cornstarch for 10 minutes",
      "Heat sesame oil in a wok or large skillet over high heat",
      "Add chicken and stir-fry for 5-6 minutes until cooked through",
      "Remove chicken and set aside",
      "Add garlic and ginger, stir-fry for 30 seconds",
      "Add vegetables and stir-fry for 4-5 minutes until tender-crisp",
      "Return chicken to pan, toss everything together, and serve over rice"
    ]
  },
  {
    id: "4",
    name: "Avocado Toast Power Breakfast",
    description: "Energy-packed breakfast with healthy fats and complex carbs",
    image: "https://images.unsplash.com/photo-1623691751118-1de275697349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwYnJlYWtmYXN0JTIwYXZvY2FkbyUyMHRvYXN0fGVufDF8fHx8MTc3NDc4ODYzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    price: 8.50,
    calories: 420,
    prepTime: 10,
    tags: ["Breakfast", "Healthy-Fats", "Quick"],
    goals: ["energy-boost", "quick-meals", "heart-health"],
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "Cherry tomatoes, halved",
      "Red pepper flakes",
      "Sea salt and black pepper",
      "Microgreens or arugula",
      "Lemon juice"
    ],
    instructions: [
      "Toast bread until golden and crispy",
      "Mash avocado with lemon juice, salt, and pepper",
      "Cook eggs to your preference (poached or fried recommended)",
      "Spread mashed avocado generously on toast",
      "Top with cooked eggs",
      "Add cherry tomatoes and microgreens",
      "Sprinkle with red pepper flakes and enjoy immediately"
    ]
  },
  {
    id: "5",
    name: "Greek Salad Bowl",
    description: "Mediterranean-inspired fresh salad with authentic flavors",
    image: "https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NDcyMTEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    price: 9.25,
    calories: 380,
    prepTime: 15,
    tags: ["Mediterranean", "Low-Calorie", "Fresh"],
    goals: ["weight-loss", "heart-health", "balanced"],
    ingredients: [
      "2 cups romaine lettuce, chopped",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "4 oz feta cheese, crumbled",
      "3 tbsp olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano"
    ],
    instructions: [
      "Chop all vegetables into bite-sized pieces",
      "Combine lettuce, cucumber, tomatoes, and onion in a large bowl",
      "Add Kalamata olives",
      "Whisk together olive oil, red wine vinegar, and oregano",
      "Pour dressing over salad and toss gently",
      "Top with crumbled feta cheese",
      "Serve immediately or chill for 15 minutes"
    ]
  }
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
    name: "Week Warrior",
    description: "7-day streak",
    icon: "🔥",
    unlocked: true,
    progress: 7,
    requirement: 7
  },
  {
    id: "3",
    name: "Meal Master",
    description: "Generated 25 meals",
    icon: "👨‍🍳",
    unlocked: false,
    progress: 18,
    requirement: 25
  },
  {
    id: "4",
    name: "Budget Boss",
    description: "Saved $100 on meals",
    icon: "💰",
    unlocked: false,
    progress: 67,
    requirement: 100
  },
  {
    id: "5",
    name: "Health Hero",
    description: "30 healthy meals",
    icon: "🥗",
    unlocked: false,
    progress: 22,
    requirement: 30
  },
  {
    id: "6",
    name: "Streak Legend",
    description: "30-day streak",
    icon: "⚡",
    unlocked: false,
    progress: 14,
    requirement: 30
  }
];

export const GOAL_OPTIONS = [
  { id: "weight-loss", label: "Weight Loss" },
  { id: "muscle-gain", label: "Muscle Gain" },
  { id: "heart-health", label: "Heart Health" },
  { id: "plant-based", label: "Plant-Based" },
  { id: "quick-meals", label: "Quick Meals" },
  { id: "energy-boost", label: "Energy Boost" },
  { id: "balanced", label: "Balanced Diet" }
];