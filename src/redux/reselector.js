import { createSelector } from '@reduxjs/toolkit'

export const userSelector = createSelector(
    store => store.persistedReducer.user.user,
    item => item
);