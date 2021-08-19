const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const webhookList = [];

app.post('/webhooks', function(request, response) {
  const webhook = request.body;

  const { id, state } = webhook.resource;

  webhookList.push({
    id,
    state
  })

  return response.json({ id, state });
});

app.get('/webhooks', function(request, response) {
  return response.json(webhookList);
});

app.listen(process.env.PORT || 3030);
