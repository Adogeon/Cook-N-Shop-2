export const getAllRecipes = () => {
  return {
    data: [
      {
        name: "Recipe A",
      },
      {
        name: "Recipe B",
      },
      {
        name: "Recipe C",
      },
    ],
  };
};

export const getAllRecipesGraph = async () => {
  const query = `query {
    allRecipe {
      recipes {
        id
        name
        description
        ingredients {
          ingredient {
            name
          }
          quantity
          unit
        }
      }
      count
    }
  }`;

  const response = await fetch("/api/playground", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const result = await response.json();
  return result.data.allRecipe;
};
