import { IconProps } from '../../data/types'

const Menu = ({ color }: IconProps) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.25116 12H21.2512'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.25116 6H21.2512'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.25116 18H21.2512'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Menu
