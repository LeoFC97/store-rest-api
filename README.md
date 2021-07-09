# store-rest-api

## Authentication

For autentication this API needs a JWT on http request headers. Following this format:

```
Authorization: Bearer {{JWT TOKEN}}
```

The token must have this structure:

```
{
  "user": {
    "email": String,
    "fullName": String
  },
  "iat": Number
}
```
This token can be genereate at: https://jwt.io, just follow the struct above.


## API Resources


# Create Store

[POST] /store
Request Body:

```
{
	"name":"loja do melhor blitz da região brasileira internacional",
	"pictureUrL":"www.mock.com.xD",
	"address":{
		"cep":"123",
		"street": "rua de teste",
		"number": 245,
		"complement":"oiue"
	}
}
```
Response code: 201

# List all Stores

[GET] /stores

Response Body:{
  [
    {
      "address": {
        "cep": "123",
        "street": "rua de teste",
        "number": 245,
        "complement": "oiue"
      },
      "createdBy": {
        "email": "mock@mock.com",
        "name": "mocked name"
      },
      "_id": "60e7b7c30399e745943b3f25",
      "name": "loja do melhor blitz da região brasileira internacional",
      "pictureUrL": "www.mock.com.xD",
      "createdAt": "2021-07-09T02:43:15.534Z",
      "updatedAt": "2021-07-09T02:43:15.534Z",
      "__v": 0
    }
  ]
}


## Database

I chose to use a non-relational database, in my opinion its better to work with collections instead of tables in this situations.

For hosting database i chose mongoDbAtlas, because it have a free tier that can be hosted on AWS, Google Cloud or Azure. I chose Google Cloud beacuse its the only one that was SouthAmerica (São Paulo) as a region on the free tier.

## Running the Unity tests

There are Unity Tests on the project in order to ensure that it runs cohesively, and they can be found at their respective folders.
The tests cover subjects such as string sanitazing and sorting methods. The tests in place are there to make sure the code isn't broken while the API was being developed - it is essential for present and future maintenance.

```
npm run test
```

## Continuos Integration

For C.I this projects uses GitHub actions to run tests, the script can be foud at [continuosIntegration.yml](./.github/workflows/continuosIntegration.yml)
