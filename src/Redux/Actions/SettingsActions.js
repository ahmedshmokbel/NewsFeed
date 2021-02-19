
import { CHANGE_LANGUAGE, } from "../types";
 

export const ChangeLanguage = (lang, rtl) => dispatch => {


  dispatch({ type: CHANGE_LANGUAGE, payload: lang, View: rtl });


}
 