import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from "./pages/Home"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/workouts' element={<Workouts />} />
          <Route path='/workouts/new' element={<NewWorkout />} />
          <Route path='/workouts/:id' element={<EditWorkout />} /> */}
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
