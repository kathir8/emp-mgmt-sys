import { createReducer, on } from "@ngrx/store"
import { initialState } from "./emp.state"
import { addEmp } from "./emp.action"
import { Node } from "../linked-list"

export const empReducer = createReducer(
    initialState,
    on(addEmp, (state: any, { empObj }) => {
        const newNode = new Node(empObj, state.empData.head);
        // To check linked list is empty or not
        const tail = state.empData.tail ?? newNode
        return {
            ...state,
            empData: {
                head: newNode,
                tail,
                length: state.empData.length + 1
            }
        };

    })
)
