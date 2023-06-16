import { createFeatureSelector, createSelector } from "@ngrx/store";

const getEmpState = createFeatureSelector<any>('employee')


// export const getEmp = createSelector(getEmpState, state => {
//     return state.empData
// })

export const getEmp = createSelector(getEmpState,
    (state) => {
        if (!state.empData.head) {
            return null
        } 
        
        const items = [];
        let currentNode = state.empData.head;

        while (currentNode) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return items;
    });