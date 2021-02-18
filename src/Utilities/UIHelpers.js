import { I18nManager, Platform } from "react-native";

export const rtlView = () => {
    
    console.log('RTLView', I18nManager.isRTL)
  
    if (I18nManager.isRTL) {
  
      return {
        back: Platform.OS === "ios" ? "ios-arrow-forward" : "ios-arrow-round-forward", direction: 'rtl',
        drawerPostion: 'right',
        textAlign: 'right',
        writingDirection: 'rtl'
      }
    } else {
      return {
        back: Platform.OS === "ios" ? "ios-arrow-back" : "ios-arrow-round-back",
        direction: 'ltr',
        drawerPostion: 'left', textAlign: 'left',
        writingDirection: 'ltr'
      }
    }
    // return lang "ar" ? { flexDirection: "row-reverse" }:{ flexDirection: "row-reverse" };
  };