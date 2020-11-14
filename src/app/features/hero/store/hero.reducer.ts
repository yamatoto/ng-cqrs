import { createReducer } from '@ngrx/store';

export interface AuthState {
  heroes: {id: string; name: string}[];
}

export const initialAuthState: AuthState = {
  heroes: null
};

export const authReducer = createReducer(
  initialAuthState,
);
