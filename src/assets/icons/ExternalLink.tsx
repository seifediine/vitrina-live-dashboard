import { IconProps } from '../../data/types'

const ExternalLink = ({ color }: IconProps) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5 13V19C18.5 19.5304 18.2893 20.0391 17.9142 20.4142C17.5391 20.7893 17.0304 21 16.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V8C3.5 7.46957 3.71071 6.96086 4.08579 6.58579C4.46086 6.21071 4.96957 6 5.5 6H11.5'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 3H21.5V9'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 14L21.5 3'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ExternalLink
