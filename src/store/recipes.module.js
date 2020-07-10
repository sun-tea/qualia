import { RecipesService } from '@/common/api.service';
import { FETCH_RECIPES } from './actions.type';
import { SET_RECIPES } from './mutations.type';

const initialState = {
  recipes: [],
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_RECIPES]({ commit }, ingredients) {
    const { data } = await RecipesService.get('complexSearch', {
      includeIngredients: ingredients,
      number: 20,
      addRecipeInformation: true,
      fillIngredients: true,
      instructionsRequired: true,
    });
    commit(SET_RECIPES, data);

    return data;
  },
};

export const mutations = {
  [SET_RECIPES](state, { results }) {
    state.recipes = {};
    results.forEach(recipe => {
      state.recipes[recipe.id] = recipe;
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
