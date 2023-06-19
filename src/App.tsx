import { FC, Suspense } from 'react'
import { Router } from 'routes/Router';
import Preloader from 'components/Preloader';

export const App: FC = () => {
  return (
    <Suspense fallback={<Preloader customText="loading" />}>
      <Router />
    </Suspense>
  )
}
