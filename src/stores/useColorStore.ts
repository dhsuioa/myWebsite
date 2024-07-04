import { defineStore } from 'pinia'
import { ref } from 'vue'

function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb.replace(/[^\d,]/g, '').split(',').map(Number)
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }).join('')
}

export const useColorStore = defineStore('color', () => {
  const primaryColor = ref<string>('')

  const setPrimaryColor = (color: string) => {
    primaryColor.value = color
    document.documentElement.style.setProperty('--primary-color', color)
  }

  const loadPrimaryColor = () => {
    const primaryFromCSS = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim()

    primaryColor.value = primaryFromCSS.startsWith('#') 
      ? primaryFromCSS 
      : rgbToHex(primaryFromCSS)
  }

  return {
    primaryColor,
    setPrimaryColor,
    loadPrimaryColor
  }
})
