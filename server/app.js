const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 'https://movie-app-react-graphql-server.herokuapp.com/'; ~

  mongoose.connect(`mongodb+srv://TestUser:pass123@cluster0-q1pic.mongodb.net/graph-ql-app?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});

///-----

// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const schema = require('../schema/schema');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path')

// const app = express();
// const PORT = process.env.PORT || 3005;

// mongoose.connect(`mongodb+srv://TestUser:pass123@cluster0-q1pic.mongodb.net/graph-ql-app?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// app.use(cors());

// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: rootResolver,
//   graphiql: true,
// }));

// app.use(express.static('public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html '))
// })

// const dbConnection = mongoose.connection;
// dbConnection.on('error', err => console.log(`Connection error: ${err}`));
// dbConnection.once('open', () => console.log(`Connection to DB!`));

// app.listen(PORT, err => {
//   err ? console.log(err) : console.log('Server started!');
// });
