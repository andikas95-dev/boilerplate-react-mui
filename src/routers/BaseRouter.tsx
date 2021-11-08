import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from 'routers/router'
import { createTheme, ThemeProvider } from '@mui/material'

export interface themeProps {
  palette: {
    primary: {
      main: string
    }
  }
}

const theme: themeProps = createTheme()

function BaseRouter() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/auth/api-server" component={AuthPage} /> */}
          {routes?.map((route: any) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default BaseRouter
