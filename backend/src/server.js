import express from 'express';
import cors from 'cors'

const app = express();
const port = 8000;
// prevents cross site scripting
app.use(cors())
// enables parsing to JSON for incoming requests
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/',(req,res) => {
  res.send('Post request acknowledged')
})

app.put('/', (req,res) => {
  res.send
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
