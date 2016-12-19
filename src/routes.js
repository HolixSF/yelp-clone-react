import React from 'react'
import { browserHistory, Route, Router, Redirect } from 'react-router'

import makeMainRoutes from './views/Main/routes'

const makeRoutes = () => {
  const main = makeMainRoutes()

  return (
    <Route path=''>
      {main}
    </Route>
  )
}

export default makeRoutes
