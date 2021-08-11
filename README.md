# Apideck Node.js library

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Getting started](#getting-started)
- [Example](#example)
- [Support](#support)
- [License](#license)

## Installation

Install the latest SDK using npm:

```console
$ npm install apideck
```

or Yarn

```console
$ yarn add apideck
```

## Getting started

The module supports all Apideck API endpoints. For complete information about the API, head
to the [docs][2].
All endpoints require a valid apiKey so that's the only required parameter to initialize a new Apideck client:

```typescript
import Apideck from 'apideck';

const apideck = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});
```

All top level parameters (except for apiKey) can be overriden in specific resource calls.

```typescript
const response = await apideck.crm.contacts.list({
  limit: '10',
  serviceId: '<insert-service-id-here>',
  consumerId: <insert-consumer-id-here>
})
```

## Methods
Once you created a new Apideck client you can use following methods:

```typescript
import Apideck from 'apideck';

const apideck = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});
```

### ActivitiesApi
```typescript
  apideck.activities.list(parameters);
  apideck.activities.retrieve(parameters);
  apideck.activities.create(parameters);
  apideck.activities.update(parameters);
  apideck.activities.delete(parameters);
```
### CompaniesApi
```typescript
  apideck.companies.list(parameters);
  apideck.companies.retrieve(parameters);
  apideck.companies.create(parameters);
  apideck.companies.update(parameters);
  apideck.companies.delete(parameters);
```
### ContactsApi
```typescript
  apideck.contacts.list(parameters);
  apideck.contacts.retrieve(parameters);
  apideck.contacts.create(parameters);
  apideck.contacts.update(parameters);
  apideck.contacts.delete(parameters);
```
### LeadsApi
```typescript
  apideck.leads.list(parameters);
  apideck.leads.retrieve(parameters);
  apideck.leads.create(parameters);
  apideck.leads.update(parameters);
  apideck.leads.delete(parameters);
```
### NotesApi
```typescript
  apideck.notes.list(parameters);
  apideck.notes.retrieve(parameters);
  apideck.notes.create(parameters);
  apideck.notes.update(parameters);
  apideck.notes.delete(parameters);
```
### OpportunitiesApi
```typescript
  apideck.opportunities.list(parameters);
  apideck.opportunities.retrieve(parameters);
  apideck.opportunities.create(parameters);
  apideck.opportunities.update(parameters);
  apideck.opportunities.delete(parameters);
```
### PipelinesApi
```typescript
  apideck.pipelines.list(parameters);
  apideck.pipelines.retrieve(parameters);
  apideck.pipelines.create(parameters);
  apideck.pipelines.update(parameters);
  apideck.pipelines.delete(parameters);
```
### UsersApi
```typescript
  apideck.users.list(parameters);
  apideck.users.retrieve(parameters);
  apideck.users.create(parameters);
  apideck.users.update(parameters);
  apideck.users.delete(parameters);
```

## Example

Retrieving a list of all contacts and updating the first record with a new address.

```typescript
import { Apideck, PhoneNumberType } from 'apideck'

const apideck = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});

const { data } = await apideck.crm.contacts.list({
  limit: 10
})

const result = await apideck.crm.contacts.update({
  id: data[0].id!,
  contact: {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    addresses: [{
      city: "Hoboken",
      line1: "Streetname 19",
      state: "NY"
    }],
    phoneNumbers: [{
      number: '0486565656',
      phoneType: PhoneNumberType.Home
    }]
  }
})

console.info(result)
```

## Support

Open an [issue][3]!

## License

[MIT][4]

[1]: https://apideck.com
[2]: https://developers.apideck.com/
[3]: https://github.com/apideck-libraries/apideck-node/issues/new
[4]: https://github.com/apideck-libraries/apideck-node/blob/master/LICENSE
# node-sdk
