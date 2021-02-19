
import { CHANGE_LANGUAGE, } from "../Types";
 

export const ChangeLanguage = (lang, rtl) => dispatch => {


  dispatch({ type: CHANGE_LANGUAGE, payload: lang, View: rtl });


}
 