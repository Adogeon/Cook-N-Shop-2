import useQuery from "urql";
import { ref } from "vue";

export const $_GET_ALL_RECIPE = `{
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

export const $_GET_ONE_RECIPE = `
  findRecipeById($id: ID!) {
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

const useRecipeQuery = async query => {
  const data = ref(null);
  const error = ref(null);

  const { resultData, resultError } = await useQuery({
    query: query
  });

  if (resultError) {
    error.value = resultError;
  } else {
    data.value = resultData;
  }

  return { data, error };
};

export default useRecipeQuery;
