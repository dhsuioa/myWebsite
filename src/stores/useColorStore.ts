// src/stores/useColorStore.ts
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb.replace(/[^\d,]/g, '').split(',').map(Number)
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }).join('')
}

export const useColorStore = defineStore('color', () => {
  const getInitialColor = (): string => {
    const savedColor = localStorage.getItem('primaryColor')
    if (savedColor) {
      return savedColor
    }
    return '#008000'
  }

  const primaryColor = ref<string>(getInitialColor())

  const setPrimaryColor = (color: string) => {
    primaryColor.value = color
    document.documentElement.style.setProperty('--primary-color', color)
    localStorage.setItem('primaryColor', color)
  }

  const loadPrimaryColor = () => {
    const primaryFromCSS = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim()

    const color = primaryFromCSS.startsWith('#') 
      ? primaryFromCSS 
      : rgbToHex(primaryFromCSS)

    setPrimaryColor(color)
  }

  setPrimaryColor(primaryColor.value)

  watch(primaryColor, (newColor) => {
    setPrimaryColor(newColor)
  })

  return {
    primaryColor,
    setPrimaryColor,
    loadPrimaryColor
  }
})