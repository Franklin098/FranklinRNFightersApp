import {AppDispatch, RootState} from './store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDisptatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
