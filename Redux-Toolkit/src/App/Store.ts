import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/TodoSlice' // but we dont have any var named todoReducer in the file,so how can we import it?The import statement `import todoReducer from '../Features/TodoSlice'` is valid because the `TodoSlice.ts` file exports a default reducer at the end of the file with the line `export default todoSlice.reducer;`.
export const store = configureStore({
    reducer: todoReducer
}) 

