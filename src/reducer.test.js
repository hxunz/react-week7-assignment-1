import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginFields,
  changeReviewFields,
  setAccessToken,
  logout,
  setReviews,
  clearReviewFields,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      accessToken: '',
      loginFields: {
        email: '',
        password: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginFields', () => {
    context('when email changed', () => {
      it('changes Login Field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(initialState, changeLoginFields({ name: 'email', value: 'test' }));
        expect(state.loginFields.email).toBe('test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password changed', () => {
      it('changes Login Field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(initialState, changeLoginFields({ name: 'password', value: 'test' }));
        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('test');
      });
    });
  });

  describe('changeReviewFields', () => {
    context('when score changed', () => {
      it('changes Review Field', () => {
        const initialState = {
          reviewFields: {
            score: '',
            description: '',
          },
        };

        const state = reducer(initialState, changeReviewFields({ name: 'score', value: '5' }));
        expect(state.reviewFields.score).toBe('5');
        expect(state.reviewFields.description).toBe('');
      });
    });

    context('when description changed', () => {
      it('changes Review Field', () => {
        const initialState = {
          reviewFields: {
            score: '5',
            description: '',
          },
        };

        const state = reducer(initialState, changeReviewFields({ name: 'description', value: '맛있어요' }));
        expect(state.reviewFields.score).toBe('5');
        expect(state.reviewFields.description).toBe('맛있어요');
      });
    });
  });

  describe('clearReviewFields', () => {
    it('clears review fields', () => {
      const initialState = {
        reviewFields: {
          score: 5,
          description: '맛있어요',
        },
      };

      const state = reducer(initialState, clearReviewFields());
      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('setAccessToken', () => {
    it('changes selected category', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('setReviews', () => {
    it('changes reviews of current restaurant', () => {
      const reviews = [
        {
          id: 1,
          name: '테스터',
          score: 5,
          description: '맛있어요',
        },
      ];
      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const state = reducer(initialState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
    });
  });
});
