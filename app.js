const Huncwot = require('huncwot')
const { ok } = require('huncwot/response')
const users = require('./users.json')

const app = new Huncwot()

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

app.get('/', () => 'something is working')
app.get('/users', async ({ params }) => {
  const { q } = params

  console.log(`backend hit with : ${q}`)

  if (!q) return ok(users)

  if (q === 'le') await delay(2000)

  const filtered = users.filter(({ name }) => name.match(q))
  return ok(filtered)
})

app.listen(5544)
