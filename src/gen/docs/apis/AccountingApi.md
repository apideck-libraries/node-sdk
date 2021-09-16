# Apideck.Accounting

## Class Name
**AccountingApi**

## Methods

* [Get Company Info](#companyInfoOne)
* [Create Customer](#customersAdd)
* [List Customers](#customersAll)
* [Delete Customer](#customersDelete)
* [Get Customer](#customersOne)
* [Update Customer](#customersUpdate)
* [Create Invoice Item](#invoiceItemsAdd)
* [List Invoice Items](#invoiceItemsAll)
* [Delete Invoice Item](#invoiceItemsDelete)
* [Get Invoice Item](#invoiceItemsOne)
* [Update Invoice Item](#invoiceItemsUpdate)
* [Create Invoice](#invoicesAdd)
* [List Invoices](#invoicesAll)
* [Delete Invoice](#invoicesDelete)
* [Get Invoice](#invoicesOne)
* [Update Invoice](#invoicesUpdate)
* [Create Ledger Account](#ledgerAccountsAdd)
* [List Ledger Accounts](#ledgerAccountsAll)
* [Delete Ledger Account](#ledgerAccountsDelete)
* [Get Ledger Account](#ledgerAccountsOne)
* [Update Ledger Account](#ledgerAccountsUpdate)
* [Create Tax Rate](#taxRatesAdd)
* [List Tax Rates](#taxRatesAll)
* [Delete Tax Rate](#taxRatesDelete)
* [Get Tax Rate](#taxRatesOne)
* [Update Tax Rate](#taxRatesUpdate)

<a name="companyInfoOne"></a>
# Get Company Info


Method: **companyInfoOne**

```typescript
accountingApi.companyInfoOne(body)
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

[`GetCompanyInfoResponse`](../models/GetCompanyInfoResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | CompanyInfo | 
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
  const { data } = await apideck.accounting.companyInfoOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersAdd"></a>
# Create Customer


Method: **customersAdd**

```typescript
accountingApi.customersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [Customer](../models/Customer.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateCustomerResponse`](../models/CreateCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Customers | 
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
  customer: {
    id: '12345',
    company_name: 'SpaceX',
    first_name: 'Elon',
    last_name: 'Musk',
    individual: true,
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
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        contact_name: '111-111-1111',
        salutation: '111-111-1111',
        phone_number: '111-111-1111',
        fax: '111-111-1111',
        email: '111-111-1111',
        website: '111-111-1111'
      }
    ],
    notes: 'Some notes about this customer',
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
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
    tax_rate: {
      id: '12345',
      code: 'N-T'
    },
    tax_number: 'US123945459',
    currency: 'USD',
    bank_accounts: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsb_number: '062-001',
      bank_code: 'BNH',
      account_number: '123456789',
      account_name: 'SPACEX LLC'
    },
    status: 'Customer status'
  }
}

try {
  const { data } = await apideck.accounting.customersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersAll"></a>
# List Customers


Method: **customersAll**

```typescript
accountingApi.customersAll(body)
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

[`GetCustomersResponse`](../models/GetCustomersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
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
  const { data } = await apideck.accounting.customersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersDelete"></a>
# Delete Customer


Method: **customersDelete**

```typescript
accountingApi.customersDelete(body)
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

[`DeleteCustomerResponse`](../models/DeleteCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
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
  const { data } = await apideck.accounting.customersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersOne"></a>
# Get Customer


Method: **customersOne**

```typescript
accountingApi.customersOne(body)
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

[`GetCustomerResponse`](../models/GetCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
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
  const { data } = await apideck.accounting.customersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersUpdate"></a>
# Update Customer


Method: **customersUpdate**

```typescript
accountingApi.customersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [Customer](../models/Customer.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateCustomerResponse`](../models/UpdateCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
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
  customer: {
    id: '12345',
    company_name: 'SpaceX',
    first_name: 'Elon',
    last_name: 'Musk',
    individual: true,
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
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        contact_name: '111-111-1111',
        salutation: '111-111-1111',
        phone_number: '111-111-1111',
        fax: '111-111-1111',
        email: '111-111-1111',
        website: '111-111-1111'
      }
    ],
    notes: 'Some notes about this customer',
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
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
    tax_rate: {
      id: '12345',
      code: 'N-T'
    },
    tax_number: 'US123945459',
    currency: 'USD',
    bank_accounts: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsb_number: '062-001',
      bank_code: 'BNH',
      account_number: '123456789',
      account_name: 'SPACEX LLC'
    },
    status: 'Customer status'
  }
}

try {
  const { data } = await apideck.accounting.customersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsAdd"></a>
# Create Invoice Item


Method: **invoiceItemsAdd**

```typescript
accountingApi.invoiceItemsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceItem** | [InvoiceItem](../models/InvoiceItem.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateInvoiceItemResponse`](../models/CreateInvoiceItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | InvoiceItems | 
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
  invoiceItem: {
    id: '12345',
    code: '120-C',
    sold: true,
    name: 'Model Y',
    description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
    type: 'inventory',
    sales_details: {
      unit_price: 27500.5,
      unit_of_measure: 'hour',
      tax_inclusive: true,
      tax_rate: {
        id: '12345',
        code: 'N-T'
      }
    },
    quantity: 2,
    unit_price: 27500.5,
    ledger_account: {
      id: '12345',
      name: 'Bank account'
    },
    active: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoiceItemsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsAll"></a>
# List Invoice Items


Method: **invoiceItemsAll**

```typescript
accountingApi.invoiceItemsAll(body)
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

[`GetInvoiceItemsResponse`](../models/GetInvoiceItemsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
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
  const { data } = await apideck.accounting.invoiceItemsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsDelete"></a>
# Delete Invoice Item


Method: **invoiceItemsDelete**

```typescript
accountingApi.invoiceItemsDelete(body)
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
**200** | InvoiceItems | 
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
  const { data } = await apideck.accounting.invoiceItemsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsOne"></a>
# Get Invoice Item


Method: **invoiceItemsOne**

```typescript
accountingApi.invoiceItemsOne(body)
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

[`GetInvoiceItemResponse`](../models/GetInvoiceItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
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
  const { data } = await apideck.accounting.invoiceItemsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsUpdate"></a>
# Update Invoice Item


Method: **invoiceItemsUpdate**

```typescript
accountingApi.invoiceItemsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceItem** | [InvoiceItem](../models/InvoiceItem.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateInvoiceItemsResponse`](../models/UpdateInvoiceItemsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
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
  invoiceItem: {
    id: '12345',
    code: '120-C',
    sold: true,
    name: 'Model Y',
    description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
    type: 'inventory',
    sales_details: {
      unit_price: 27500.5,
      unit_of_measure: 'hour',
      tax_inclusive: true,
      tax_rate: {
        id: '12345',
        code: 'N-T'
      }
    },
    quantity: 2,
    unit_price: 27500.5,
    ledger_account: {
      id: '12345',
      name: 'Bank account'
    },
    active: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoiceItemsUpdate(params)
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
**201** | Invoice created | 
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
    id: '12345',
    type: 'Service',
    number: 'OIT00546',
    customer: {
      id: '12345',
      company_name: 'The boring company'
    },
    invoice_date: '2020-09-30',
    due_date: '2020-10-30',
    po_number: '90000117',
    status: 'paid',
    currency: 'USD',
    tax_inclusive: true,
    sub_total: 27500,
    total_tax: 1000,
    total: 28500,
    balance: 26500,
    deposit: 2000,
    customer_memo: 'Thank you for your business and have a great day!',
    line_items: [
      {
        id: '12345',
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'Inventory',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 2,
        unit_price: 27500.5,
        discount_percentage: 15,
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '12345',
          code: 'N-T'
        },
        ledger_account: {
          id: '12345',
          name: 'Bank account'
        },
        row_version: '1-12345'
      }
    ],
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      contact_name: '111-111-1111',
      salutation: '111-111-1111',
      phone_number: '111-111-1111',
      fax: '111-111-1111',
      email: '111-111-1111',
      website: '111-111-1111'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      contact_name: '111-111-1111',
      salutation: '111-111-1111',
      phone_number: '111-111-1111',
      fax: '111-111-1111',
      email: '111-111-1111',
      website: '111-111-1111'
    },
    row_version: '1-12345'
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
**200** | Invoice deleted | 
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
**200** | Invoice | 
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
**200** | Invoice updated | 
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
    id: '12345',
    type: 'Service',
    number: 'OIT00546',
    customer: {
      id: '12345',
      company_name: 'The boring company'
    },
    invoice_date: '2020-09-30',
    due_date: '2020-10-30',
    po_number: '90000117',
    status: 'paid',
    currency: 'USD',
    tax_inclusive: true,
    sub_total: 27500,
    total_tax: 1000,
    total: 28500,
    balance: 26500,
    deposit: 2000,
    customer_memo: 'Thank you for your business and have a great day!',
    line_items: [
      {
        id: '12345',
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'Inventory',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 2,
        unit_price: 27500.5,
        discount_percentage: 15,
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '12345',
          code: 'N-T'
        },
        ledger_account: {
          id: '12345',
          name: 'Bank account'
        },
        row_version: '1-12345'
      }
    ],
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      contact_name: '111-111-1111',
      salutation: '111-111-1111',
      phone_number: '111-111-1111',
      fax: '111-111-1111',
      email: '111-111-1111',
      website: '111-111-1111'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      contact_name: '111-111-1111',
      salutation: '111-111-1111',
      phone_number: '111-111-1111',
      fax: '111-111-1111',
      email: '111-111-1111',
      website: '111-111-1111'
    },
    row_version: '1-12345'
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

<a name="ledgerAccountsAdd"></a>
# Create Ledger Account


Method: **ledgerAccountsAdd**

```typescript
accountingApi.ledgerAccountsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerAccount** | [LedgerAccount](../models/LedgerAccount.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateLedgerAccountResponse`](../models/CreateLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | LedgerAccount created | 
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
  ledgerAccount: {
    id: '12345',
    nominal_code: '091',
    classification: 'asset',
    type: 'bank',
    sub_type: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fully_qualified_name: 'Asset.Bank.Checking_Account',
    description: 'Main checking account',
    opening_balance: 75000,
    current_balance: 20000,
    currency: 'USD',
    tax_type: 'USD',
    tax_rate: {
      id: '12345',
      code: 'N-T'
    },
    level: 2,
    active: true,
    header: true,
    bank_account: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsb_number: '062-001',
      bank_code: 'BNH',
      account_number: '123456789',
      account_name: 'SPACEX LLC'
    },
    sub_account: true
  }
}

try {
  const { data } = await apideck.accounting.ledgerAccountsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsAll"></a>
# List Ledger Accounts


Method: **ledgerAccountsAll**

```typescript
accountingApi.ledgerAccountsAll(body)
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

[`GetLedgerAccountsResponse`](../models/GetLedgerAccountsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccounts | 
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
  const { data } = await apideck.accounting.ledgerAccountsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsDelete"></a>
# Delete Ledger Account


Method: **ledgerAccountsDelete**

```typescript
accountingApi.ledgerAccountsDelete(body)
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

[`DeleteLedgerAccountResponse`](../models/DeleteLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount deleted | 
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
  const { data } = await apideck.accounting.ledgerAccountsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsOne"></a>
# Get Ledger Account


Method: **ledgerAccountsOne**

```typescript
accountingApi.ledgerAccountsOne(body)
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

[`GetLedgerAccountResponse`](../models/GetLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount | 
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
  const { data } = await apideck.accounting.ledgerAccountsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsUpdate"></a>
# Update Ledger Account


Method: **ledgerAccountsUpdate**

```typescript
accountingApi.ledgerAccountsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerAccount** | [LedgerAccount](../models/LedgerAccount.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateLedgerAccountResponse`](../models/UpdateLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount updated | 
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
  ledgerAccount: {
    id: '12345',
    nominal_code: '091',
    classification: 'asset',
    type: 'bank',
    sub_type: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fully_qualified_name: 'Asset.Bank.Checking_Account',
    description: 'Main checking account',
    opening_balance: 75000,
    current_balance: 20000,
    currency: 'USD',
    tax_type: 'USD',
    tax_rate: {
      id: '12345',
      code: 'N-T'
    },
    level: 2,
    active: true,
    header: true,
    bank_account: {
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      bsb_number: '062-001',
      bank_code: 'BNH',
      account_number: '123456789',
      account_name: 'SPACEX LLC'
    },
    sub_account: true
  }
}

try {
  const { data } = await apideck.accounting.ledgerAccountsUpdate(params)
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
**201** | TaxRate created | 
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
    id: '12345',
    name: '15% GST on Expenses',
    code: 'ABN',
    description: 'No ABN Withholding',
    effective_tax_rate: 10,
    total_tax_rate: 10,
    components: [
      {
        name: 'City tax',
        rate: 10,
        compound: true
      }
    ],
    special_tax_type: 'NONE',
    original_tax_rate_id: '12345',
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
**200** | TaxRates deleted | 
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
**200** | TaxRate | 
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
**200** | TaxRate updated | 
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
    id: '12345',
    name: '15% GST on Expenses',
    code: 'ABN',
    description: 'No ABN Withholding',
    effective_tax_rate: 10,
    total_tax_rate: 10,
    components: [
      {
        name: 'City tax',
        rate: 10,
        compound: true
      }
    ],
    special_tax_type: 'NONE',
    original_tax_rate_id: '12345',
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

