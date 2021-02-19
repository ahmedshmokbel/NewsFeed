import React from 'react'

import { I18nManager, Platform, Dimensions, PixelRatio } from "react-native";

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
 };




 const fixedHeight = 812;
 const fixedWidth = 375;
 
 function responsiveHeight(originalValue:number)
 {
     return ((Dimensions.get('window').height * originalValue) / fixedHeight);
 }
 
  function responsiveWidth(originalValue:number)
 {
     return ((Dimensions.get('window').width * originalValue) / fixedWidth);
 }
 
 function scaleFont(size:number) {
     const newSize = size * Dimensions.get('window').width / fixedWidth;
     if (Platform.OS === 'ios') {
       return Math.round(PixelRatio.roundToNearestPixel(newSize))
     } else {
       return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
     }
 }
 
 export default { responsiveHeight , responsiveWidth , scaleFont };