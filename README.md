## Purpose

The goal is to demonstrate how an API consumer and an API producer can work in parallel rather than in a liner fashion when creating a new API (or even modifying an API).

### Steps

1. Team comes together to figure out what the JSON schema / payload looks like.
1. Once agreed on, turn on the mock server (mock server below)
1. Consumer team can go write their code against the mock server, which will respond with JSON
1. Producer team can go work on developing the real API that will produce that JSON 
1. When API is ready, turn off the mock
1. Profit!

### Example

`customers.json` was created to show customer information. The business rule being implemented is asking for a field to indicate if the customer's last name has too many Z's in it. 

The mock `customers.json` has 2 examples, one with one Z and another with more than 1 Z, which is the business rule we're going to implement. The consumer now has examples of both situations so they can code for the response. 

In `real-api`, you can see we've implemented that business logic and modify the customer response to inject that calculation where it did not previously exist. 

We now have the mock server and the real-api returning JSON that conform to the same schema. The mock instance took 2 minutes to create and deploy, allowing the consumer to develop their code rather than wait the entire time it took to implement the real-api. 

## Commands 

### Mock Server

`json-server --watch customers.json`

### Real API

```
cd real-api
npm start
```