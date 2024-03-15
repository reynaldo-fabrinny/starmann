import { useState } from 'react';
import './App.scss'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress';
import PastLaunchesGrid from './past-launches-grid/PastLaunchesGrid';
import { LaunchModel } from './models/LaunchModel';
import SearchBox from './search-form/SearchForm';
import SearchResult from './search-result/SearchResult';
import useLaunchesService from './hooks/useLoadPastLaunches';

function App() {
    const [launchResult, setLaunchResult] = useState({});
    const [launchResultError, setLaunchResultError] = useState({});
    
    const AppState  = {
      launchResult, setLaunchResult,
      launchResultError, setLaunchResultError
    }

  const { data, loading } = useLaunchesService({ quantity: 3 });
  const launches: LaunchModel[] = data ? data.docs : [];

  return (
    <Container fixed>
      <SearchBox AppState={AppState} />
      <SearchResult AppState={AppState} />
      {loading ? (
        <CircularProgress />
      ) : (
        <PastLaunchesGrid launches={launches} />
      )}
    </Container>
  );
}

export default App