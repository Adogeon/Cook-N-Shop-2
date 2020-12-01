export const getOneRecipeById = async (recipeId) => {
  const query = `
    query findRecipeById($id: ID!) {
      recipeById(id: $id) {
        __typename
        ... on ErrorResult {
          code
          message
        }
        ... on Recipe {
          id
          name
          ingredients {
            ingredient {
            name
          }
            quantity
            unit
          }
        }
      }
    }`;

  const response = await fetch("/api/playground", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id: recipeId },
    }),
  });

  const result = await response.json();
  console.log("data result: ", result);
  return result.data.recipeById;
};

export const getAllRecipes = async () => {
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
