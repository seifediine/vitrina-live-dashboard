import { IconProps } from '../../data/types'

const Zap = ({ color }: IconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 2L3 14H12L11 22L21 10H12L13 2Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Zap
