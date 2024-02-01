import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore({
  id: 'favorites',
  state: () => ({
    favorites: [] as number[],
  }),
  actions: {
    addToFavorites(productId: number) {
      if (!this.favorites.includes(productId)) {
        this.favorites.push(productId);
      }
    },
    removeFromFavorites(productId: number) {
      this.favorites = this.favorites.filter((id) => id !== productId);
    },
  },
});
