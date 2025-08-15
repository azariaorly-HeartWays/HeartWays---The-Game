export type Emotion = 'calm'|'curious'|'sad'|'joy'|'focused'
let current: Emotion = 'curious'
export const getEmotion = () => current
export const setEmotion = (e: Emotion) => { current = e }
