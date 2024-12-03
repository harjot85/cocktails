const cocktails = [
  {
    name: "Old Fashioned",
    ingredients: ["Bourbon", "Cointreau", "Orange bitters", "bitters"],
    garnish: ["cherry", "orange peel", "lemon peel"],
  },
  {
    name: "Green Eyes",
    ingredients: [
      "Gin 1½",
      "Chartreuse ¾",
      "Simple Syrup ½",
      "Egg white ½ (optional)",
    ],
    garnish: ["slice of lime", "cherry"],
  },
  {
    name: "White Lady",
    ingredients: [
      "Gin",
      "Cointreau",
      "Simple Syrup",
      "Lemon",
      "Egg White (optional)",
    ],
    garnish: ["Orange peel"],
  },
  {
    name: "Sidecar (Classic or Bourbon)",
    ingredients: ["VSOP Cognac", "Cointreau", "Lemon juice"],
    garnish: ["Orange or Lemon twist"],
  },
  {
    name: "Margarita",
    ingredients: ["tequila", "Cointreau", "Lime juice", "Simple Syrup"],
    garnish: ["Salted glass rim", "lime wedge"],
  },
  {
    name: "First Valentine",
    ingredients: [
      "Red Empress",
      "Rose water",
      "Simple Syrup",
      "lime juice",
      "egg white",
    ],
    garnish: ["rose pedals"],
  },
  {
    name: "Smoke Screen",
    ingredients: [
      "Grouse Scotch",
      "Laphroaig Scotch",
      "Chartreuse",
      "Lime Juice",
      "Mint",
    ],
    garnish: ["Mint"],
  },
  {
    name: "Last Word",
    ingredients: ["Dry Gin", "Green Chartreuse", "Cherry liquor", "Lime juice"],
    garnish: ["Cherry"],
  },
  {
    name: "Empress's Kiss",
    ingredients: ["Empress Gin Blue", "blueberries"],
    garnish: ["A purple flower"],
  },
  {
    name: "Basil Blackberry Bourbon",
    ingredients: ["Bourbon", "Blackberries", "Simple Syrup", "Basil"],
    garnish: ["Basil leaves"],
  },
];

export default function CocktailList() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Cocktail List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cocktails.map((cocktail, index) => (
          <div key={index} className="bg-gray-800 border-gray-700 py-5">
            <div>
              <div className="text-2xl font-semibold text-amber-400">
                {cocktail.name}
              </div>
            </div>
            <div>
              <div className="mb-4 py-2">
                <p className="text-gray-300">
                  {cocktail.ingredients.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  Garnish
                </h3>
                <ul className="list-disc list-inside">
                  <p className="text-gray-300">{cocktail.garnish.join(", ")}</p>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
