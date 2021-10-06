import { createStore , combineReducers , applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'; // Lets us bring form state into store, so form state can persist across views (contrast to LocalForm)
import{ Dishes } from './dishes';
import{ Comments } from './comments';
import{ Promotions } from './promotions';
import{ Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';  // Logs action nicely to console (prev state, action, next state)
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}