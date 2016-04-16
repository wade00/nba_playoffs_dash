import React                             from 'react'
import { render }                        from 'react-dom'
import { renderToString }                from 'react-dom/server'
import Router, { match, RoutingContext } from 'react-router'

import Routes    from './js/routes.jsx'
// import AuthStore from './js/app/stores/auth-store'
// import './css/application.scss'

function runApp() {
  render(
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      {Routes}
    </Router>,
    document.getElementById('app')
  )
}

// Client render
typeof document !== 'undefined' ? runApp() : null

// Server render
module.exports = function(path, props, callback) {
  match({routes: <div>{Routes}</div>, location: path}, (err,b,renderProps) => {
    const html = renderToString(<RoutingContext {...renderProps} />)
    callback(
      `<!doctype html>
       <html>
         <head>
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="referrer" content="always">
           <meta charset="UTF-8">
           <title>2016 NBA Playoffs Dashboard</title>
           <link href="/styles.css" rel="stylesheet" type="text/css">
         </head>
         <body>
           <div id="app">
            ${html}
           </div>
           <script src="/bundle.js" charset="utf-8"></script>
         </body>
       </html>`
    )
  })
}
