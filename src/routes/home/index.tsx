import { h } from 'preact'
import { Link } from 'preact-router'
import { useEffect } from 'preact/hooks'

import { useCounter } from 'src/contexts/counter'

const Home = () => {
  const [count, setCount] = useCounter()

  useEffect(() => {
    setCount(0)
  }, [setCount])

  return (
    <>
      <Link href="/profile">To Profile</Link>

      <h1>Home</h1>

      <p>Counter: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

export default Home
