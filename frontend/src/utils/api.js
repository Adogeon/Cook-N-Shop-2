export const createNewRecipe = async newRecipe => {
  const query = ` mutation createRecipe ($newRecipe: RecipeInput) {
    newRecipe(input: $newRecipe) {
      id
    }
  }`;

  console.log(newRecipe);
  const response = await fetch("/api/playground", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query,
      variables: { newRecipe: newRecipe }
    })
  });

  const result = await response.json();
  console.log("data result: ", result);
  return result.data;
};
