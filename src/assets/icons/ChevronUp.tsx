import { IconProps } from '../../data/types'

const ChevronUp = ({ color }: IconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.41074 6.91073C9.73617 6.5853 10.2638 6.5853 10.5892 6.91073L15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0892C15.2638 13.4147 14.7362 13.4147 14.4107 13.0892L9.99999 8.6785L5.58925 13.0892C5.26381 13.4147 4.73617 13.4147 4.41073 13.0892C4.0853 12.7638 4.0853 12.2362 4.41073 11.9107L9.41074 6.91073Z'
        fill={color}
      />
    </svg>
  )
}

export default ChevronUp
