export type ElementColor = 'primary' | 'secondary' | 'gray'
export type ElementVariant = 'solid' | 'soft'

export const elementColorMap = new Map<
  ElementColor,
  {
    bgColor: Record<ElementVariant, string>
    bgColorHover: Record<ElementVariant, string>
    bgColorFocus: Record<ElementVariant, string>
    textColor: Record<ElementVariant, string>
  }
>([
  [
    'primary',
    {
      bgColor: {
        solid: 'bg-primary',
        soft: 'bg-primary/10',
      },
      bgColorHover: {
        solid: 'hover:bg-primary-light',
        soft: 'hover:bg-primary/20',
      },
      bgColorFocus: {
        solid: 'focus-visible:bg-primary-dark',
        soft: 'focus-visible:bg-primary-dark/20',
      },
      textColor: {
        solid: 'text-white',
        soft: 'text-black',
      },
    },
  ],
  [
    'secondary',
    {
      bgColor: {
        solid: 'bg-secondary',
        soft: 'bg-secondary/10',
      },
      bgColorHover: {
        solid: 'hover:bg-secondary-light',
        soft: 'hover:bg-secondary/20',
      },
      bgColorFocus: {
        solid: 'focus-visible:bg-secondary-dark',
        soft: 'focus-visible:bg-secondary-dark/20',
      },
      textColor: {
        solid: 'text-white',
        soft: 'text-black',
      },
    },
  ],
])
