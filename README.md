# express-tl
fastest, smallest and simplest template engine, using JS's literal template feature, in an express template engine

This is just a simple wrapper for Express, around [template-literal](https://github.com/Drulac/template-literal).

## Easy to use
`npm i express-tl`
append it to your app code :
```javascript
const tl = require('express-tl')

app.engine('tl', tl)
app.set('views', './views') // specify the views directory
app.set('view engine', 'tl') // register the template engine
```

Watch [template-literal](https://github.com/Drulac/template-literal) to know how to use it

You can see an example app in [examples/](examples/)

# Donate
You can make me a donation to support my work :
- With Liberapay : [https://liberapay.com/drulac/](https://liberapay.com/drulac/)
- With Paypal : drulac@protonmail.com
