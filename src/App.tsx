import { Fragment } from 'react/jsx-runtime'
import './App.css'
import { MoviesContainer } from './pages/home/MoviesContainer'

function App() {

  return (
    <Fragment>
      <h1>Movie List</h1>
      <p>Created using React, Typescript, Redux, and Redux Saga</p>
      <div className="card">
        <MoviesContainer />
      </div>
    </Fragment>
  )
}

export default App
