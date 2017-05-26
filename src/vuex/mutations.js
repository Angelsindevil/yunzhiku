/* eslint-disable*/
// import {HIDENEED, HIDEERROR}from './mutation-types'
// export
// default {
//   [HIDENEED] (state) {
//     state.isHideNeed = !state.isHideNeed
//     state.isHideMask = !state.isHideMask
//   },
//   [HIDEERROR] (state) {
//     state.isHideError = !state.isHideError
//     state.isHideMask = !state.isHideMask
//   }
// }
export const hideNeed = state => {
	state.isHideNeed = !state.isHideNeed
    state.isHideMask = !state.isHideMask
}
export const hideError = state => {
	state.isHideError = !state.isHideError
    state.isHideMask =  !state.isHideMask
}
export const hideLogin = state => {
	state.isHideLogin = !state.isHideLogin
    state.isHideMask =  !state.isHideMask
}
export const showBtn = state => {
	state.isHideBtn = true
}
export const hideBtn = state => {
	state.isHideBtn = false
}