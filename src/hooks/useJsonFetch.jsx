import { useEffect, useState } from 'react';

export function useJsonFetch(url, opts) {

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, opts)
        if(!response) throw new Error(`${response.url} ${response.status} ${response.statusText}`)
        const data = await response.json()
        setData(data)
      } catch(e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])



  return [data, loading, error]
  
}
