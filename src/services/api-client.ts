import axios from 'axios';

const query = `
{
  portfolioItemCollection {
    items {
      title
      thumbnail {
        url
      }
      video {
        url
      }
    }
  }
}`

export default axios.create({
    baseURL: 'https://graphql.contentful.com/content/v1/spaces/' + process.env.VITE_CONTENTFUL_SPACE_ID,
    params: {
        key: 'process.env.CONTENTFUL_API_KEY'
    }
});