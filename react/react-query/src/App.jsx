import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { AddHeroPage } from './components/AddHero.page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RQSuperHeroPage } from './components/RQSuperHero.page'
import { ParallerQueriesPage } from './components/ParallerQueries.pages'
import { DaynemicParallerPages } from './components/DaynemicParaller.pages'
import { DependentsQueriesPages } from './components/DependentsQueries.pages'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/add-hero'>Add Hero (Mutation)</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>Paraller Queries</Link>
              </li>
              <li>
                <Link to='/rq-daynamic-paraller'>Daynemic Paraller</Link>
              </li>
            </ul>
          </nav>
          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/rq-super-hero/:heroId' element={<RQSuperHeroPage />} />
            <Route path='/rq-daynamic-paraller' element={<DaynemicParallerPages herosId={[1, 2]} />} />
            <Route path='/rq-dependent' element={<DependentsQueriesPages email="vishwas@example.com" />} />
            <Route path='/rq-parallel' element={<ParallerQueriesPage />} />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/add-hero' element={<AddHeroPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
