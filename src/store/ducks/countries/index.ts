import selectors from './selectors';
import slice from './slices';
import thunks from './thunks';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
