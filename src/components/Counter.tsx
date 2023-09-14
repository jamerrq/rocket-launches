import { useState } from 'preact/hooks'

export default function () {
  const [count, setCount] = useState(0)

  return (
    <div
      class="mx-auto my-2 p-2 bg-gray-100 rounded-lg shadow-lg flex flex-row gap-2 items-center justify-center"
    >
      <p>Count: {count}</p>
      <button
        class="px-2 py-1 bg-blue-500 text-white rounded-lg shadow-lg"
        onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        class="px-2 py-1 bg-blue-500 text-white rounded-lg shadow-lg"
        onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}
