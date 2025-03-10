import { baseUrl } from "../../../helpers/baseUrl";
import { getCategories, getCategoriesError, getCategoriesSuccess } from "../../features/category/categorySlice";

export const fetchCategories = () => {
    return async (dispatch: AppDispatch) => {
      dispatch(getCategories());
      try {
        const response = await fetch(`${baseUrl}/categories`);

        if (!response.ok) {
            dispatch(getCategoriesError("Помилка при отриманні категорій"));
            return;
        }

        const categories = await response.json();
        dispatch(getCategoriesSuccess(categories));
      } 
      catch(e: any) {
        dispatch(getCategoriesError(e.message));
      }
    };
  };