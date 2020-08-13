const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
const json = require('koa-json')
const Redis =require('koa-redis')
const cors = require('koa2-cors')
import dbConfig from './db/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import search from './interface/search'
import geo from './interface/geo'
import province from './interface/province'
import home from './interface/home'
const app = new Koa()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.keys = ['mt', 'keyskeys']
app.proxy = true
app.use(cors());
app.use(session({
  key:'mt',
  prefix: 'mt:uid',
  store: new Redis()
}))
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
app.use(json())
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
})
app.use(passport.initialize())
app.use(passport.session())
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())
  app.use(home.routes()).use(home.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(province.routes()).use(province.allowedMethods())
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
