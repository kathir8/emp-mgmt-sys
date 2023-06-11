import { createAction, props } from "@ngrx/store"


export const addEmp = createAction(
    'addEmp',
    props<{empObj:any}>()
)