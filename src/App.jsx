
import './App.css';
import { useJsonFetch } from './hooks/useJsonFetch';

function App() {
  const dataUrl = 'https://backend-use-json.onrender.com/data'
  const loadingUrl = 'https://backend-use-json.onrender.com/loading'
  const errorUrl = 'https://backend-use-json.onrender.com/error'
  
  const [data] = useJsonFetch(dataUrl)
  const [loading] = useJsonFetch(loadingUrl)
  const [error] = useJsonFetch(errorUrl)
 
  
  return (
    <div className="App">
      <div className="getData">Статус получения данных: {data.status}</div>
      <div className="getError">В ходе запроса произошла ошибка: {error.status}</div>
      <div className="loadingStatus">{loading ? 'Loading...' : null}</div>
    </div>
  );
}

export default App;
