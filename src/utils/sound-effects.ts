import pairMatchSoundSrc from "../assets/sound-effects/pair-match.mp3"
import victorySoundSrc from "../assets/sound-effects/victory.mp3"
import defeatSoundSrc from "../assets/sound-effects/defeat.mp3"

export const playPairMatchSoundEffect = () => {
  new Audio(pairMatchSoundSrc).play();
}

export const playVictorySoundEffect = () => {
  new Audio(victorySoundSrc).play();
}

export const playDefeatSoundEffect = () => {
  new Audio(defeatSoundSrc).play();
}