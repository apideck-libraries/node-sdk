# Apideck.Accounting

## Class Name
**AccountingApi**

## Methods

* [Create Account](#accountsAdd)
* [List Accounts](#accountsAll)
* [Delete Account](#accountsDelete)
* [Get Account](#accountsOne)
* [Update Account](#accountsUpdate)
* [Create Company](#companiesAdd1)
* [List Companies](#companiesAll1)
* [Delete Company](#companiesDelete1)
* [Get Company](#companiesOne1)
* [Update Company](#companiesUpdate1)
* [Create Invoice](#invoicesAdd)
* [List Invoices](#invoicesAll)
* [Delete Invoice](#invoicesDelete)
* [Get Invoice](#invoicesOne)
* [Update Invoice](#invoicesUpdate)
* [Create Tax Rate](#taxRatesAdd)
* [List Tax Rates](#taxRatesAll)
* [Delete Tax Rate](#taxRatesDelete)
* [Get Tax Rate](#taxRatesOne)
* [Update Tax Rate](#taxRatesUpdate)

<a name="accountsAdd"></a>
# Create Account


Method: **accountsAdd**

```typescript
accountingApi.accountsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [Account](../models/Account.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateAccountResponse`](../models/CreateAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Account | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  account: {
    nominalCode: '091',
    classification: 'asset',
    type: 'bank',
    subType: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fullyQualifiedName: 'Asset.Bank.Checking_Account',
    description: 'The main checking account',
    openingBalance: 75000,
    currentBalance: 20000,
    currency: 'USD',
    taxType: 'USD',
    taxCode: 'N-T',
    level: '2',
    active: true,
    bankAccount: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsbNumber: '062-001',
      bankCode: 'BNH',
      accountNumber: '123456789',
      accountName: 'SPACEX LLC'
    },
    parentAccount: {},
    subAccount: true,
    subAccounts: [
      {}
    ]
  }
}

try {
  const { data } = await apideck.accounting.accountsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="accountsAll"></a>
# List Accounts


Method: **accountsAll**

```typescript
accountingApi.accountsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetAccountsResponse`](../models/GetAccountsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Accounts | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.accountsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="accountsDelete"></a>
# Delete Account


Method: **accountsDelete**

```typescript
accountingApi.accountsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`DeleteAccountResponse`](../models/DeleteAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Account | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.accountsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="accountsOne"></a>
# Get Account


Method: **accountsOne**

```typescript
accountingApi.accountsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`GetAccountResponse`](../models/GetAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Account | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.accountsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="accountsUpdate"></a>
# Update Account


Method: **accountsUpdate**

```typescript
accountingApi.accountsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [Account](../models/Account.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateAccountResponse`](../models/UpdateAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Account | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  account: {
    nominalCode: '091',
    classification: 'asset',
    type: 'bank',
    subType: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fullyQualifiedName: 'Asset.Bank.Checking_Account',
    description: 'The main checking account',
    openingBalance: 75000,
    currentBalance: 20000,
    currency: 'USD',
    taxType: 'USD',
    taxCode: 'N-T',
    level: '2',
    active: true,
    bankAccount: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsbNumber: '062-001',
      bankCode: 'BNH',
      accountNumber: '123456789',
      accountName: 'SPACEX LLC'
    },
    parentAccount: {},
    subAccount: true,
    subAccounts: [
      {}
    ]
  }
}

try {
  const { data } = await apideck.accounting.accountsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesAdd1"></a>
# Create Company


Method: **companiesAdd1**

```typescript
accountingApi.companiesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [Company](../models/Company.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateCompanyResponse1`](../models/CreateCompanyResponse1.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Companies | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  companies1: {
    name: 'SpaceX',
    ownerId: '12345',
    image: 'https://www.spacex.com/static/images/share.jpg',
    description: 'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
    vatNumber: 'BE0689615164',
    currency: 'USD',
    status: 'Open',
    fax: '+12129876543',
    annualRevenue: '+$35m',
    numberOfEmployees: '500-1000',
    industry: 'Apparel',
    ownership: 'Public',
    salesTaxNumber: '12456EN',
    payeeNumber: '78932EN',
    abnOrTfn: '46 115 614 695',
    abnBranch: '123',
    acn: 'XXX XXX XXX',
    bankAccounts: [
      {
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        bsbNumber: '062-001',
        bankCode: 'BNH',
        accountNumber: '123456789',
        accountName: 'SPACEX LLC'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638'
      }
    ],
    socialLinks: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck-io',
        type: 'twitter'
      }
    ],
    phoneNumbers: [
      {
        id: '12345',
        number: '111-111-1111',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    tags: [
      'New'
    ],
    readOnly: false
  }
}

try {
  const { data } = await apideck.accounting.companiesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesAll1"></a>
# List Companies


Method: **companiesAll1**

```typescript
accountingApi.companiesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetCompaniesResponse1`](../models/GetCompaniesResponse1.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Company | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.companiesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesDelete1"></a>
# Delete Company


Method: **companiesDelete1**

```typescript
accountingApi.companiesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`DeleteCompanyResponse1`](../models/DeleteCompanyResponse1.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.companiesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesOne1"></a>
# Get Company


Method: **companiesOne1**

```typescript
accountingApi.companiesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`GetCompanyResponse1`](../models/GetCompanyResponse1.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.companiesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesUpdate1"></a>
# Update Company


Method: **companiesUpdate1**

```typescript
accountingApi.companiesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [Company](../models/Company.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateCompanyResponse1`](../models/UpdateCompanyResponse1.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  companies1: {
    name: 'SpaceX',
    ownerId: '12345',
    image: 'https://www.spacex.com/static/images/share.jpg',
    description: 'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
    vatNumber: 'BE0689615164',
    currency: 'USD',
    status: 'Open',
    fax: '+12129876543',
    annualRevenue: '+$35m',
    numberOfEmployees: '500-1000',
    industry: 'Apparel',
    ownership: 'Public',
    salesTaxNumber: '12456EN',
    payeeNumber: '78932EN',
    abnOrTfn: '46 115 614 695',
    abnBranch: '123',
    acn: 'XXX XXX XXX',
    bankAccounts: [
      {
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        bsbNumber: '062-001',
        bankCode: 'BNH',
        accountNumber: '123456789',
        accountName: 'SPACEX LLC'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638'
      }
    ],
    socialLinks: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck-io',
        type: 'twitter'
      }
    ],
    phoneNumbers: [
      {
        id: '12345',
        number: '111-111-1111',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    tags: [
      'New'
    ],
    readOnly: false
  }
}

try {
  const { data } = await apideck.accounting.companiesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesAdd"></a>
# Create Invoice


Method: **invoicesAdd**

```typescript
accountingApi.invoicesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [Invoice](../models/Invoice.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateInvoiceResponse`](../models/CreateInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  invoice: {
    type: 'Service',
    number: 'OIT00546',
    customer: {
      name: 'The boring company'
    },
    customerContact: {
      name: 'Belon Tusk'
    },
    date: '2020-09-30',
    dueDate: '2020-10-30',
    poNumber: '90000117',
    status: 'open',
    currency: 'USD',
    subTotal: 27500,
    totalTax: 1000,
    total: 28500,
    balance: 26500,
    deposit: 2000,
    customerMemo: 'Thank you for your business and have a great day!',
    lineItems: [
      {
        lineNumber: 1,
        description: 'Rock Fountain',
        type: 'Transaction',
        taxAmount: 27500,
        totalAmount: 27500,
        quantity: 2,
        unitPrice: 27500,
        discountPercentage: 15,
        itemId: 12344,
        taxRate: {
          name: '15% GST on Expenses',
          code: 'ABN'
        },
        generalLedgerAccount: {
          name: 'Bank account'
        }
      }
    ],
    billingAddress: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638'
    },
    shippingAddress: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638'
    }
  }
}

try {
  const { data } = await apideck.accounting.invoicesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesAll"></a>
# List Invoices


Method: **invoicesAll**

```typescript
accountingApi.invoicesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetInvoicesResponse`](../models/GetInvoicesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.invoicesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesDelete"></a>
# Delete Invoice


Method: **invoicesDelete**

```typescript
accountingApi.invoicesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`DeleteInvoiceResponse`](../models/DeleteInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoicesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesOne"></a>
# Get Invoice


Method: **invoicesOne**

```typescript
accountingApi.invoicesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`GetInvoiceResponse`](../models/GetInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoicesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesUpdate"></a>
# Update Invoice


Method: **invoicesUpdate**

```typescript
accountingApi.invoicesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [Invoice](../models/Invoice.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateInvoiceResponse`](../models/UpdateInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  invoice: {
    type: 'Service',
    number: 'OIT00546',
    customer: {
      name: 'The boring company'
    },
    customerContact: {
      name: 'Belon Tusk'
    },
    date: '2020-09-30',
    dueDate: '2020-10-30',
    poNumber: '90000117',
    status: 'open',
    currency: 'USD',
    subTotal: 27500,
    totalTax: 1000,
    total: 28500,
    balance: 26500,
    deposit: 2000,
    customerMemo: 'Thank you for your business and have a great day!',
    lineItems: [
      {
        lineNumber: 1,
        description: 'Rock Fountain',
        type: 'Transaction',
        taxAmount: 27500,
        totalAmount: 27500,
        quantity: 2,
        unitPrice: 27500,
        discountPercentage: 15,
        itemId: 12344,
        taxRate: {
          name: '15% GST on Expenses',
          code: 'ABN'
        },
        generalLedgerAccount: {
          name: 'Bank account'
        }
      }
    ],
    billingAddress: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638'
    },
    shippingAddress: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638'
    }
  }
}

try {
  const { data } = await apideck.accounting.invoicesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesAdd"></a>
# Create Tax Rate


Method: **taxRatesAdd**

```typescript
accountingApi.taxRatesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxRate** | [TaxRate](../models/TaxRate.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateTaxRateResponse`](../models/CreateTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  taxRate: {
    name: '15% GST on Expenses',
    code: 'ABN',
    description: 'No ABN Withholding',
    effectiveTaxRate: 10,
    totalTaxRate: 10,
    components: [
      {
        name: 'City tax',
        rate: 10,
        compound: true
      }
    ],
    specialTaxType: 'NONE',
    originalTaxRateId: '12345',
    active: true
  }
}

try {
  const { data } = await apideck.accounting.taxRatesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesAll"></a>
# List Tax Rates


Method: **taxRatesAll**

```typescript
accountingApi.taxRatesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetTaxRatesResponse`](../models/GetTaxRatesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.taxRatesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesDelete"></a>
# Delete Tax Rate


Method: **taxRatesDelete**

```typescript
accountingApi.taxRatesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`DeleteTaxRateResponse`](../models/DeleteTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.taxRatesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesOne"></a>
# Get Tax Rate


Method: **taxRatesOne**

```typescript
accountingApi.taxRatesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`GetTaxRateResponse`](../models/GetTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.taxRatesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesUpdate"></a>
# Update Tax Rate


Method: **taxRatesUpdate**

```typescript
accountingApi.taxRatesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxRate** | [TaxRate](../models/TaxRate.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateTaxRateResponse`](../models/UpdateTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  taxRate: {
    name: '15% GST on Expenses',
    code: 'ABN',
    description: 'No ABN Withholding',
    effectiveTaxRate: 10,
    totalTaxRate: 10,
    components: [
      {
        name: 'City tax',
        rate: 10,
        compound: true
      }
    ],
    specialTaxType: 'NONE',
    originalTaxRateId: '12345',
    active: true
  }
}

try {
  const { data } = await apideck.accounting.taxRatesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

