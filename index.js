<<<<<<< HEAD
const express = require('express')
const app = express()
app.use(express.json())
app.use('/products', require('./routes/products'))

const PORT = 3000

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
=======
console.log('holagit');
>>>>>>> origin
