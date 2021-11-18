import logo from './logo.svg'
import './App.css'
import { useQuery, gql } from '@apollo/client'

const AnimeList = gql`
  query Query {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
        coverImage {
          medium
        }
        bannerImage
        volumes
        episodes
      }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(AnimeList)
  console.log(data?.Page?.media[0])
  if (loading) return <>Loading</>
  if (error) return <>{JSON.stringify(error)}</>
  return (
    <>
      <div>
        <h1>Anime Lis</h1>
        {data?.Page?.media.map((anime) => (
          <>
            <div>
              <img src={anime.coverImage.medium} />
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default App
