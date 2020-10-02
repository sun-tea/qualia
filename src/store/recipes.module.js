import { RecipesService } from '@/common/api.service';
import { GET_RECIPES_BY_INGREDIENTS } from './actions.type';
import { SET_RECIPES, SET_IS_LOADING } from './mutations.type';

const initialState = {
  results: {},
  resultsLength: 0,
  isLoading: false,
};

export const state = { ...initialState };

export const actions = {
  async [GET_RECIPES_BY_INGREDIENTS]({ commit }, ingredients) {
    commit(SET_IS_LOADING, true);
    const { data } = await RecipesService.get('complexSearch', {
      includeIngredients: ingredients,
      number: 20,
      addRecipeInformation: true,
      fillIngredients: true,
      instructionsRequired: true,
      addRecipeNutrition: true,
    });
    commit(SET_RECIPES, data);
    commit(SET_IS_LOADING, false);

    return data;
  },
};

export const mutations = {
  [SET_IS_LOADING](state, value) {
    state.isLoading = value;
  },

  [SET_RECIPES](state, { results }) {
    state.results = {};
    state.resultsLength = Object.keys(results).length;

    results.forEach(recipe => {
      recipe.uniqueIngredients = [];
      recipe.missedIngredients.forEach(ingredient => {
        const i = recipe.uniqueIngredients.findIndex(current => current.id === ingredient.id);
        if (i <= -1) {
          recipe.uniqueIngredients.push(ingredient);
        }
      });

      state.results[recipe.id] = recipe;
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
