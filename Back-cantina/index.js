const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001 || process.env.PORT;
const quotesRouter = require('./routes/quotes');

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.json({message: 'alive'});
// });

app.use('/quotes', quotesRouter);
app.use('/', quotesRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});