import { createFeatureSelector, createSelector } from "@ngrx/store";

const getEmpState = createFeatureSelector<any>('employee')


export const getEmp = createSelector(getEmpState, state => {
    return state.empData
})