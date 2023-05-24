# Apideck Node.js SDK

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

### AtsApi

Read the full documentation of the AtsApi [here](./src/gen/docs/apis/AtsApi.md).

### ConnectorApi

Read the full documentation of the ConnectorApi [here](./src/gen/docs/apis/ConnectorApi.md).

### CrmApi

Read the full documentation of the CrmApi [here](./src/gen/docs/apis/CrmApi.md).

### EcommerceApi

Read the full documentation of the EcommerceApi [here](./src/gen/docs/apis/EcommerceApi.md).

### FileStorageApi

Read the full documentation of the FileStorageApi [here](./src/gen/docs/apis/FileStorageApi.md).

### HrisApi

Read the full documentation of the HrisApi [here](./src/gen/docs/apis/HrisApi.md).

### IssueTrackingApi

Read the full documentation of the IssueTrackingApi [here](./src/gen/docs/apis/IssueTrackingApi.md).

### LeadApi

Read the full documentation of the LeadApi [here](./src/gen/docs/apis/LeadApi.md).

### PosApi

Read the full documentation of the PosApi [here](./src/gen/docs/apis/PosApi.md).

### SmsApi

Read the full documentation of the SmsApi [here](./src/gen/docs/apis/SmsApi.md).

### VaultApi

Read the full documentation of the VaultApi [here](./src/gen/docs/apis/VaultApi.md).

### WebhookApi

Read the full documentation of the WebhookApi [here](./src/gen/docs/apis/WebhookApi.md).


### Utils

#### uploadFile

A utility for uploading files using the File Storage API. `uploadFile` will automatically use upload sessions for files larger than 4MB. Smaller files will be uploaded with a simple upload call.

**Example Usage**

```ts
const apideck = new Apideck({
  apiKey: '<insert-api-key-here>',
  appId: '<insert-application-id-here>',
  consumerId: '<insert-consumer-id-here>'
});


const file = await apideck.utils.uploadFile({
  serviceId: 'dropbox',
  file: buffer, // Buffer | string
  name: "test.jpg",
  size: fileSize, // file size in bytes
  contentType: "image/jpg", // optional
});
```

## Support

Open an [issue][3]!

## License

[Apache-2.0][4]

[1]: https://apideck.com
[2]: https://developers.apideck.com/
[3]: https://github.com/apideck-libraries/node-sdk/issues/new
[4]: https://github.com/apideck-libraries/node-sdk/blob/master/LICENSE
