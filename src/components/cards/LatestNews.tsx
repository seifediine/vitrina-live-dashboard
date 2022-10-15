import { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper, Grid, Box, Typography } from '@mui/material'
import { File, ExternalLink } from '../../assets/icons'
import { Link } from 'react-router-dom'
import NewsItem from './NewsItem'

type newsItemProps = {
  about?: { name: string; readLink: string; _type: string }[]
  category: string
  datePublished: string
  description: string
  image: {
    thumbnail: {
      contentUrl: string
      height: number
      width: number
      _type: string
    }
    _type: string
  }
  name: string
  provider?: {}[]
  _type: string
  url: string
}

const styles = {
  paper: {
    // height: '620px',
    padding: '25px',
    borderRadius: '10px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '50px',
  },
  cardTitle: {
    color: '#21b8f9',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardLink: {
    color: '#21b8f9',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&freshness=Day&count=8',
  params: { safeSearch: 'Off', textFormat: 'Raw' },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ff0fb4cbcemsh011afff03ce18fep12520djsncc2141137d41',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  },
}

const LatestNews = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = () => {
      axios
        .request(options)
        .then((res) => {
          console.log(res.data)
          setNews(res.data.value)
        })
        .catch((err) => console.error(err))
    }
    fetchNews()
  }, [])

  return (
    <Paper sx={styles.paper}>
      <Box style={styles.cardHeader}>
        <Box style={styles.cardTitle}>
          <File color='#103B66' />
          <Typography variant='h6' color='#103B66'>
            Latest news
          </Typography>
        </Box>
        <Link to='/' style={styles.cardLink}>
          <Typography>Visit our blog</Typography>
          <ExternalLink color='#21b8f9' />
        </Link>
      </Box>
      <Grid container spacing={2}>
        {news.map((newsItem: newsItemProps) => (
          <Grid item md={4} lg={6} key={newsItem.name}>
            <NewsItem {...newsItem} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default LatestNews
