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
$ npm install @apideck/node
```

or Yarn

```console
$ yarn add @apideck/node
```

## Getting started

The module supports all Apideck API endpoints. For complete information about the API, head
to the [docs][2].


### Configuration

A new Apideck instance is initialized by passing in required settings to the configuration.

```typescript
import Apideck from '@apideck/node';

const apideck = new Apideck({
  apiKey: '<insert-api-key-here>',
  appId: '<insert-application-id-here>',
  consumerId: '<insert-consumer-id-here>'
})

const { crm } = apideck

```

Top level parameters (except for apiKey) can be overriden in specific resource calls.

```typescript
// Declare Unify Api to use
const { crm } = apideck

// Override consumerId serviceId as declared in initial configuration for this operation.
const response = await crm.contactsAll({
  // serviceId: 'salesforce', // optional
  limit: '10'
})
```

## Example

Retrieving a list of all contacts and updating the first record with a new address.

```typescript

import Apideck, { PhoneNumberType } from '@apideck/node';

const apideck = new Apideck({
  apiKey: '<insert-api-key-here>',
  appId: '<insert-application-id-here>',
  consumerId: '<insert-consumer-id-here>'
})

const { crm } = apideck

const { data } = await crm.contactsAll({
  limit: 10
})

const result = await crm.contactsUpdate({
  id: data[0].id!,
  contact: {
    name: "John Doe",
    first_name: "John",
    last_name: "Doe",
    addresses: [{
      city: "Hoboken",
      line1: "Streetname 19",
      state: "NY"
    }],
    phone_numbers: [{
      number: '0486565656',
      phoneType: PhoneNumberType.Home
    }]
  }
})

console.info(result)
```

<a name="documentation-for-api-endpoints"></a>
## Apideck Unified Apis

The following Apis are currently available:

### AccountingApi

Read the full documentation of the AccountingApi [here](./src/gen/docs/apis/AccountingApi.md).

### CrmApi

Read the full documentation of the CrmApi [here](./src/gen/docs/apis/CrmApi.md).

### LeadApi

Read the full documentation of the LeadApi [here](./src/gen/docs/apis/LeadApi.md).

### VaultApi

Read the full documentation of the VaultApi [here](./src/gen/docs/apis/VaultApi.md).



## Support

Open an [issue][3]!

## License

[MIT][4]

[1]: https://apideck.com
[2]: https://developers.apideck.com/
[3]: https://github.com/apideck-libraries/node-sdk/issues/new
[4]: https://github.com/apideck-libraries/node-sdk/blob/master/LICENSE
