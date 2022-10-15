// import Str from '@supercharge/strings'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type NewsProps = {
  category: string
  name: string
  url: string
  image: {
    thumbnail: {
      contentUrl: string
      height: number
      width: number
      _type: string
    }
    _type: string
  }
  provider?: Array<{
    _type?: string
    name: string
    image?: {
      thumbnail: {
        _type: string
        contentUrl: string
      }
    }
  }>
}

const styles = {
  card: {
    height: '100px',
    display: 'flex',
    padding: '5px 0',
    gap: '5px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 16px',
  },
  title: {
    color: '#103b66',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
  },
  category: {
    color: '#21b8f9',
    fontSize: '11px',
    lineHeight: '13px',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  estimated: {
    color: '#103b66',
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: 300,
    textDecoration: 'underline',
  },
  link: {
    textDecoration: 'none',
  },
}

const NewsItem = ({ category, name, url, image, provider }: NewsProps) => {
  // const title = Str(name).limit(50, '...').get()

  return (
    <Box sx={styles.card}>
      <Box>
        <img
          src={image.thumbnail.contentUrl}
          style={{ height: '100%' }}
          alt='thumbnail'
        />
      </Box>
      <Box sx={styles.cardContent}>
        <Typography variant='subtitle2' sx={styles.category}>
          {category}
        </Typography>
        <Link to={url} style={styles.link}>
          <Typography variant='subtitle2' style={styles.title}>
            {name}
          </Typography>
        </Link>

        <Typography variant='subtitle2' style={styles.estimated}>
          Estimated reading: 4min
        </Typography>
      </Box>
    </Box>
  )
}

export default NewsItem
