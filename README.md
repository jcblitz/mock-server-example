## Purpose

The goal is to demonstrate how an API consumer and an API producer can work in parallel rather than in a liner fashion when creating a new API (or even modifying an API).

### Steps

1. Team comes together to figure out what the JSON schema / payload looks like.
1. Once agreed on, turn on the mock server (mock server below)
1. Consumer team can go write their code against the mock server, which will respond with JSON
1. Producer team can go work on developing the real API that will produce that JSON 
1. When API is ready, turn off the mock
1. Profit!

## Commands 

### Mock Server

`json-server --watch customers.json`

### Real API

```
cd real-api
npm start
```