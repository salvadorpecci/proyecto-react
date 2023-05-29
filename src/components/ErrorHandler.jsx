import { useNavigate } from 'react-router-dom'

export default function ErrorHandler({ error }) {
  const navigate = useNavigate();
  
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error}</pre>
      <button style={{
        margin: '1rem auto'
      }} className='btn' onClick={() => navigate(0)} >Back</button>
    </div>
  )
}
