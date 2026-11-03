var recipesList = [
    {
        name: "Chicken Stir-Fry",
        description: "Quick and healthy stir-fry with colorful vegetables",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
        rating: "4.5",
        reviews: "(324 reviews)",
        difficulty: "Easy",
        cuisine: "Asian",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "4 people",
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],
        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes."
        ],
        nutrition: [
            { name: "Calories", value: "320 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "34g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "18g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "12g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "5g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "840mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    },
    {
        name: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=900&q=80",
        rating: "4.8",
        reviews: "(356 reviews)",
        difficulty: "Easy",
        cuisine: "Seafood",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest"
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and cook 1 min.",
            "Add shrimp, cook until pink on both sides (3-4 mins). Set aside.",
            "Add white wine to pan, simmer for 2 mins. Add butter and lemon juice.",
            "Toss pasta and shrimp into sauce, top with chopped parsley and serve."
        ],
        nutrition: [
            { name: "Calories", value: "480 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "36g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "42g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "16g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "3g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "620mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use fresh lemon juice rather than bottled for optimum brightness",
            "Don't overcook shrimp; remove immediately when they turn pink",
            "Use reserved pasta water to emulsify the butter sauce"
        ]
    },
    {
        name: "Creamy Tuscan Salmon",
        description: "Pan-seared salmon fillet in rich garlic, spinach, and sun-dried tomato cream",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
        rating: "4.9",
        reviews: "(412 reviews)",
        difficulty: "Medium",
        cuisine: "Italian",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        ingredients: [
            "4 fresh salmon fillets",
            "2 cups baby spinach",
            "1/2 cup sun-dried tomatoes",
            "1 cup heavy whipping cream",
            "4 cloves garlic, minced",
            "1/2 cup grated parmesan",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Season salmon fillets on both sides with salt and pepper.",
            "Sear salmon fillets skin-side down 5 minutes, flip and cook 3 minutes. Remove.",
            "In the same skillet, sauté garlic and sun-dried tomatoes.",
            "Pour heavy cream and stir in parmesan cheese.",
            "Add spinach until wilted, then place the salmon back into sauce."
        ],
        nutrition: [
            { name: "Calories", value: "560 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "42g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "9g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "38g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "3g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "490mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Pat salmon dry with paper towel before searing",
            "Simmer the cream gently on low heat"
        ]
    },
    {
        name: "Classic Beef Burger",
        description: "Juicy beef patty with melted cheddar, lettuce, and homemade sauce",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
        rating: "4.6",
        reviews: "(510 reviews)",
        difficulty: "Easy",
        cuisine: "American",
        prepTime: "20 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "400g ground beef (80/20)",
            "2 brioche burger buns",
            "2 slices cheddar cheese",
            "1 tomato, sliced",
            "Crispy lettuce leaves",
            "Burger sauce"
        ],
        instructions: [
            "Form ground beef into two equal patties and season generously with salt.",
            "Heat cast iron skillet over high heat.",
            "Sear patties 3-4 minutes per side, placing cheese on top in the final minute.",
            "Toast brioche buns lightly on skillet.",
            "Assemble burger with sauce, lettuce, patty, and tomato."
        ],
        nutrition: [
            { name: "Calories", value: "650 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "38g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "40g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "36g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "2g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "920mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not press down on patties while searing to preserve juices",
            "Let patties rest for 2 minutes before assembling"
        ]
    },
    {
        name: "Margherita Pizza",
        description: "Traditional Italian crust topped with fresh mozzarella and basil",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=80",
        rating: "4.9",
        reviews: "(620 reviews)",
        difficulty: "Medium",
        cuisine: "Italian",
        prepTime: "30 min",
        cookTime: "12 min",
        servings: "3 people",
        ingredients: [
            "1 pizza dough ball",
            "1/2 cup San Marzano tomato sauce",
            "200g fresh mozzarella cheese",
            "Fresh basil leaves",
            "2 tbsp extra virgin olive oil"
        ],
        instructions: [
            "Preheat oven with pizza stone to maximum temperature.",
            "Stretch dough evenly onto a floured surface.",
            "Spread tomato sauce lightly, leaving crust edge clear.",
            "Distribute mozzarella cheese evenly.",
            "Bake 10-12 minutes until crust is blistered and golden, then add fresh basil."
        ],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "22g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "64g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "20g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "780mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Drain excess water from fresh mozzarella before baking",
            "Add basil after taking the pizza out of oven"
        ]
    },
    {
        name: "Creamy Alfredo Pasta",
        description: "Fettuccine pasta coated in rich parmesan butter cream sauce",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
        rating: "4.7",
        reviews: "(290 reviews)",
        difficulty: "Easy",
        cuisine: "Italian",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        ingredients: [
            "250g fettuccine pasta",
            "1/2 cup unsalted butter",
            "1 cup heavy cream",
            "1 cup freshly grated parmesan",
            "2 cloves garlic, crushed",
            "Pinch of nutmeg"
        ],
        instructions: [
            "Boil pasta in salted water until al dente.",
            "Melt butter with heavy cream and garlic in a saucepan.",
            "Simmer for 4 minutes, then lower heat and whisk in parmesan cheese.",
            "Season with salt, pepper, and pinch of nutmeg.",
            "Toss fettuccine directly into hot sauce."
        ],
        nutrition: [
            { name: "Calories", value: "680 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "18g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "42g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "2g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "560mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use freshly grated cheese; pre-shredded cheese will not melt smoothly",
            "Serve immediately while hot"
        ]
    },
    {
        name: "Chicken Shawarma Plate",
        description: "Spiced grilled chicken slices with garlic toum sauce and flatbread",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
        rating: "4.9",
        reviews: "(480 reviews)",
        difficulty: "Medium",
        cuisine: "Middle Eastern",
        prepTime: "25 min",
        cookTime: "20 min",
        servings: "3 people",
        ingredients: [
            "600g chicken thighs, sliced",
            "1 tbsp shawarma spice blend",
            "3 tbsp plain yogurt",
            "2 tbsp lemon juice",
            "Garlic toum sauce",
            "Pickled cucumbers"
        ],
        instructions: [
            "Marinate chicken with spices, yogurt, and lemon juice for 30 minutes.",
            "Heat skillet over high heat with oil.",
            "Sear chicken in batches until well charred and cooked through.",
            "Serve on platter with garlic dip, pickles, and warm flatbread."
        ],
        nutrition: [
            { name: "Calories", value: "490 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "44g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "14g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "28g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "2g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "790mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use chicken thighs instead of breasts for juicy meat",
            "Sear in high heat without crowding skillet"
        ]
    },
    {
        name: "Beef Tacos",
        description: "Crispy taco shells loaded with seasoned ground beef and pico de gallo",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=80",
        rating: "4.8",
        reviews: "(390 reviews)",
        difficulty: "Easy",
        cuisine: "Mexican",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "3 people",
        ingredients: [
            "400g ground beef",
            "6 taco shells",
            "1 packet taco seasoning",
            "Shredded cheddar cheese",
            "Fresh pico de gallo",
            "Sour cream"
        ],
        instructions: [
            "Brown ground beef in a skillet over medium heat.",
            "Add taco seasoning and 1/3 cup water, simmer until thickened.",
            "Warm taco shells in oven for 3 minutes.",
            "Fill each shell with seasoned beef, shredded cheese, and pico de gallo."
        ],
        nutrition: [
            { name: "Calories", value: "460 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "26g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "32g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "24g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "670mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Warm taco shells to keep them crunchy and prevent breaking",
            "Top with fresh lime juice before eating"
        ]
    },
    {
        name: "Greek Salad Bowl",
        description: "Crisp cucumber, tomatoes, kalamata olives, and block of feta cheese",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        rating: "4.6",
        reviews: "(210 reviews)",
        difficulty: "Easy",
        cuisine: "Greek",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
        ingredients: [
            "2 large tomatoes, cut into wedges",
            "1 English cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives",
            "150g authentic Greek feta cheese",
            "3 tbsp extra virgin olive oil",
            "Dried oregano"
        ],
        instructions: [
            "Combine tomatoes, cucumber, red onion, and olives in a large salad bowl.",
            "Place slab of feta cheese on top of vegetables.",
            "Drizzle generously with extra virgin olive oil and red wine vinegar.",
            "Sprinkle whole dish with dried oregano and pinch of salt."
        ],
        nutrition: [
            { name: "Calories", value: "280 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "9g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "11g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "540mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not add lettuce; traditional Greek salad has no greens",
            "Use Greek olive oil and whole feta block for best flavor"
        ]
    },
    {
        name: "Teriyaki Chicken Bowl",
        description: "Glazed tender chicken bites over steamed white rice with broccoli",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
        rating: "4.8",
        reviews: "(340 reviews)",
        difficulty: "Easy",
        cuisine: "Japanese",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "2 people",
        ingredients: [
            "450g boneless chicken thigh, diced",
            "1/3 cup soy sauce",
            "3 tbsp mirin or brown sugar",
            "1 tbsp cornstarch",
            "Steamed jasmine rice",
            "Toasted sesame seeds"
        ],
        instructions: [
            "Pan-fry diced chicken in a skillet until golden on all sides.",
            "Whisk soy sauce, sugar, and cornstarch with 2 tbsp water.",
            "Pour sauce over chicken and simmer 2 minutes until thick and glossy.",
            "Serve over steamed rice, garnished with sesame seeds and green onions."
        ],
        nutrition: [
            { name: "Calories", value: "490 kcal", icon: "fa-fire", type: "calories" },
            { name: "Protein", value: "37g", icon: "fa-dumbbell", type: "protein" },
            { name: "Carbohydrates", value: "52g", icon: "fa-wheat-awn", type: "carbs" },
            { name: "Fat", value: "14g", icon: "fa-droplet", type: "fat" },
            { name: "Fiber", value: "2g", icon: "fa-seedling", type: "fiber" },
            { name: "Sodium", value: "860mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Simmer sauce until it coats the back of a spoon",
            "Toast sesame seeds lightly in dry pan before sprinkling"
        ]
    }
];

var currentIndex = 0;
var currentTab = "ingredients";

function displayTabContent() {
    var recipe = recipesList[currentIndex];
    var cartona = "";
    var i;

    if (currentTab == "ingredients") {
        cartona += '<div class="ingredients-box">';
        for (i = 0; i < recipe.ingredients.length; i++) {
            cartona += '<div class="ingredient-item">' +
                '<span class="item-circle-num">' + (i + 1) + '</span>' +
                '<span class="item-text">' + recipe.ingredients[i] + '</span>' +
                '</div>';
        }
        cartona += '</div>';
    }
    else if (currentTab == "instructions") {
        cartona += '<div class="instructions-list">';
        for (i = 0; i < recipe.instructions.length; i++) {
            cartona += '<div class="instruction-item">' +
                '<span class="item-circle-num">' + (i + 1) + '</span>' +
                '<span class="item-text">' + recipe.instructions[i] + '</span>' +
                '</div>';
        }
        cartona += '</div>';
    }
    else if (currentTab == "nutrition") {
        cartona += '<div class="nutrition-grid">';
        for (i = 0; i < recipe.nutrition.length; i++) {
            cartona += '<div class="nutrition-item">' +
                '<div class="nutrition-left">' +
                '<span class="nutrition-icon-badge icon-' + recipe.nutrition[i].type + '">' +
                '<i class="fa-solid ' + recipe.nutrition[i].icon + '"></i>' +
                '</span>' +
                '<span class="nutrition-name">' + recipe.nutrition[i].name + '</span>' +
                '</div>' +
                '<span class="nutrition-value">' + recipe.nutrition[i].value + '</span>' +
                '</div>';
        }
        cartona += '</div>';
    }
    else if (currentTab == "tips") {
        cartona += '<div class="tips-list">';
        for (i = 0; i < recipe.tips.length; i++) {
            cartona += '<div class="chef-tip-card">' +
                '<i class="fa-solid fa-circle-check tip-check-icon"></i>' +
                '<p class="tip-text">' + recipe.tips[i] + '</p>' +
                '</div>';
        }
        cartona += '</div>';
    }

    document.getElementById("tab-content-area").innerHTML = cartona;
}

function displayCurrentRecipe() {
    var recipe = recipesList[currentIndex];

    document.getElementById("recipe-img").src = recipe.image;
    document.getElementById("recipe-title").innerHTML = recipe.name;
    document.getElementById("recipe-desc").innerHTML = recipe.description;
    document.getElementById("recipe-rating").innerHTML = recipe.rating;
    document.getElementById("recipe-reviews").innerHTML = recipe.reviews;

    document.getElementById("stat-prep").innerHTML = recipe.prepTime;
    document.getElementById("stat-cook").innerHTML = recipe.cookTime;
    document.getElementById("stat-servings").innerHTML = recipe.servings;

    var tagsCartona = '<span class="badge-tag badge-difficulty">' + recipe.difficulty + '</span>' +
        '<span class="badge-tag badge-cuisine">' + recipe.cuisine + '</span>';
    document.getElementById("recipe-tags").innerHTML = tagsCartona;

    displayTabContent();
}

function changeTab(tabName) {
    currentTab = tabName;

    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    var selectedBtn = document.getElementById("tab-btn-" + tabName);
    if (selectedBtn) {
        selectedBtn.className += " active";
    }

    displayTabContent();
}

function nextRecipe() {
    currentIndex++;
    if (currentIndex >= recipesList.length) {
        currentIndex = 0;
    }
    displayCurrentRecipe();
}

window.onload = function () {
    displayCurrentRecipe();
};