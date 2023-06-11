import { createReducer, on } from "@ngrx/store" 
import { initialState } from "./emp.state"
import { addEmp } from "./emp.action"

export const empReducer = createReducer(
    initialState,
    on(addEmp, (state: any, action: any) => {
        return {
            ...state,
            empData: [...state.empData, action.empObj]
        }
    }),
)
