import { type Doc, type SpaceXAPIResponse } from '../types/apiTypes.d'

export async function getLatestLaunches (): Promise<SpaceXAPIResponse | undefined> {
  let res
  try {
    res = await fetch('https://api.spacexdata.com/v5/launches/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {},
        options: {
          sort: {
            date_unix: 'asc'
          },
          limit: 12
        }
      })
    })
  } catch (error) {
    return
  }
  const response = await res?.json() as SpaceXAPIResponse
  return response
}

export async function getLaunchesByYear ({ year }: { year: string }): Promise<SpaceXAPIResponse | undefined> {
  let res
  try {
    res = await fetch('https://api.spacexdata.com/v5/launches/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          date_utc: {
            $gte: `${year}-01-01T00:00:00.000Z`,
            $lte: `${year}-12-31T00:00:00.000Z`
          }
        },
        options: {
          sort: {
            date_unix: 'asc'
          },
          limit: 12
        }
      })
    })
  } catch (error) {
    return
  }
  const response = await res?.json() as SpaceXAPIResponse
  return response
}

export async function getLaunchBy ({ id }: { id: string }): Promise<Doc | null> {
  try {
    const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const launch = (await response.json()) as Doc
    return launch
  } catch (error) {
  }
  return null
}
