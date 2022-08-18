# Apideck.Pos

## Class Name
**PosApi**

## Methods

* [Create Item](#itemsAdd)
* [List Items](#itemsAll)
* [Delete Item](#itemsDelete)
* [Get Item](#itemsOne)
* [Update Item](#itemsUpdate)
* [Create Location](#locationsAdd)
* [List Locations](#locationsAll)
* [Delete Location](#locationsDelete)
* [Get Location](#locationsOne)
* [Update Location](#locationsUpdate)
* [Create Merchant](#merchantsAdd)
* [List Merchants](#merchantsAll)
* [Delete Merchant](#merchantsDelete)
* [Get Merchant](#merchantsOne)
* [Update Merchant](#merchantsUpdate)
* [Create Modifier Group](#modifierGroupsAdd)
* [List Modifier Groups](#modifierGroupsAll)
* [Delete Modifier Group](#modifierGroupsDelete)
* [Get Modifier Group](#modifierGroupsOne)
* [Update Modifier Group](#modifierGroupsUpdate)
* [Create Modifier](#modifiersAdd)
* [List Modifiers](#modifiersAll)
* [Delete Modifier](#modifiersDelete)
* [Get Modifier](#modifiersOne)
* [Update Modifier](#modifiersUpdate)
* [Create Order Type](#orderTypesAdd)
* [List Order Types](#orderTypesAll)
* [Delete Order Type](#orderTypesDelete)
* [Get Order Type](#orderTypesOne)
* [Update Order Type](#orderTypesUpdate)
* [Create Order](#ordersAdd)
* [List Orders](#ordersAll)
* [Delete Order](#ordersDelete)
* [Get Order](#ordersOne)
* [Pay Order](#ordersPay)
* [Update Order](#ordersUpdate)
* [Create Payment](#paymentsAdd)
* [List Payments](#paymentsAll)
* [Delete Payment](#paymentsDelete)
* [Get Payment](#paymentsOne)
* [Update Payment](#paymentsUpdate)
* [Create Tender](#tendersAdd)
* [List Tenders](#tendersAll)
* [Delete Tender](#tendersDelete)
* [Get Tender](#tendersOne)
* [Update Tender](#tendersUpdate)

<a name="itemsAdd"></a>
# Create Item


Method: **itemsAdd**

```typescript
posApi.itemsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [Item](../models/Item.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateItemResponse`](../models/CreateItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Items | 
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
  item: {
    id: '#cocoa',
    idempotency_key: 'random_string',
    name: 'Cocoa',
    description: 'Hot Chocolate',
    abbreviation: 'Ch',
    product_type: 'regular',
    price_amount: 10,
    pricing_type: 'fixed',
    price_currency: 'USD',
    cost: 2,
    tax_ids: [
      '12345',
      '67890'
    ],
    absent_at_location_ids: [
      '12345',
      '67890'
    ],
    present_at_all_locations: false,
    available_for_pickup: false,
    available_online: false,
    sku: '11910345',
    code: '11910345',
    categories: [
      {
        id: '12345',
        name: 'Food',
        image_ids: [
          '12345',
          '67890'
        ]
      }
    ],
    options: [
      {
        id: '12345',
        name: 'Option 1',
        attribute_id: '12345'
      }
    ],
    variations: [
      {
        id: '12345',
        name: 'Food',
        sku: '11910345',
        item_id: '12345',
        sequence: 0,
        pricing_type: 'fixed',
        price_amount: 10,
        price_currency: 'USD',
        image_ids: [
          '12345',
          '67890'
        ]
      }
    ],
    modifier_groups: [
      {
        id: '12345'
      }
    ],
    available: true,
    hidden: true,
    deleted: true
  }
}

try {
  const { data } = await apideck.pos.itemsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="itemsAll"></a>
# List Items


Method: **itemsAll**

```typescript
posApi.itemsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetItemsResponse`](../models/GetItemsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Items | 
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
  const { data } = await apideck.pos.itemsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="itemsDelete"></a>
# Delete Item


Method: **itemsDelete**

```typescript
posApi.itemsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteItemResponse`](../models/DeleteItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Items | 
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
  const { data } = await apideck.pos.itemsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="itemsOne"></a>
# Get Item


Method: **itemsOne**

```typescript
posApi.itemsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetItemResponse`](../models/GetItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Items | 
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
  const { data } = await apideck.pos.itemsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="itemsUpdate"></a>
# Update Item


Method: **itemsUpdate**

```typescript
posApi.itemsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [Item](../models/Item.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateItemResponse`](../models/UpdateItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Items | 
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
  item: {
    id: '#cocoa',
    idempotency_key: 'random_string',
    name: 'Cocoa',
    description: 'Hot Chocolate',
    abbreviation: 'Ch',
    product_type: 'regular',
    price_amount: 10,
    pricing_type: 'fixed',
    price_currency: 'USD',
    cost: 2,
    tax_ids: [
      '12345',
      '67890'
    ],
    absent_at_location_ids: [
      '12345',
      '67890'
    ],
    present_at_all_locations: false,
    available_for_pickup: false,
    available_online: false,
    sku: '11910345',
    code: '11910345',
    categories: [
      {
        id: '12345',
        name: 'Food',
        image_ids: [
          '12345',
          '67890'
        ]
      }
    ],
    options: [
      {
        id: '12345',
        name: 'Option 1',
        attribute_id: '12345'
      }
    ],
    variations: [
      {
        id: '12345',
        name: 'Food',
        sku: '11910345',
        item_id: '12345',
        sequence: 0,
        pricing_type: 'fixed',
        price_amount: 10,
        price_currency: 'USD',
        image_ids: [
          '12345',
          '67890'
        ]
      }
    ],
    modifier_groups: [
      {
        id: '12345'
      }
    ],
    available: true,
    hidden: true,
    deleted: true
  }
}

try {
  const { data } = await apideck.pos.itemsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsAdd"></a>
# Create Location


Method: **locationsAdd**

```typescript
posApi.locationsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [Location](../models/Location.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateLocationResponse`](../models/CreateLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Locations | 
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
  location: {
    name: 'Dunkin Donuts',
    business_name: 'Dunkin Donuts LLC',
    address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: 40.759211,
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      row_version: '1-12345'
    },
    status: 'active',
    merchant_id: '12345',
    currency: 'USD'
  }
}

try {
  const { data } = await apideck.pos.locationsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsAll"></a>
# List Locations


Method: **locationsAll**

```typescript
posApi.locationsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetLocationsResponse`](../models/GetLocationsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Locations | 
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
  const { data } = await apideck.pos.locationsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsDelete"></a>
# Delete Location


Method: **locationsDelete**

```typescript
posApi.locationsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteLocationResponse`](../models/DeleteLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Locations | 
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
  const { data } = await apideck.pos.locationsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsOne"></a>
# Get Location


Method: **locationsOne**

```typescript
posApi.locationsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetLocationResponse`](../models/GetLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Locations | 
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
  const { data } = await apideck.pos.locationsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsUpdate"></a>
# Update Location


Method: **locationsUpdate**

```typescript
posApi.locationsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [Location](../models/Location.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateLocationResponse`](../models/UpdateLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Locations | 
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
  location: {
    name: 'Dunkin Donuts',
    business_name: 'Dunkin Donuts LLC',
    address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: 40.759211,
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      row_version: '1-12345'
    },
    status: 'active',
    merchant_id: '12345',
    currency: 'USD'
  }
}

try {
  const { data } = await apideck.pos.locationsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="merchantsAdd"></a>
# Create Merchant


Method: **merchantsAdd**

```typescript
posApi.merchantsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant** | [Merchant](../models/Merchant.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateMerchantResponse`](../models/CreateMerchantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Merchants | 
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
  merchant: {
    name: 'Dunkin Donuts',
    address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: 40.759211,
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      row_version: '1-12345'
    },
    owner_id: '12345',
    main_location_id: '12345',
    status: 'active',
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ],
    language: 'EN',
    currency: 'USD'
  }
}

try {
  const { data } = await apideck.pos.merchantsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="merchantsAll"></a>
# List Merchants


Method: **merchantsAll**

```typescript
posApi.merchantsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetMerchantsResponse`](../models/GetMerchantsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Merchants | 
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
  const { data } = await apideck.pos.merchantsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="merchantsDelete"></a>
# Delete Merchant


Method: **merchantsDelete**

```typescript
posApi.merchantsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteMerchantResponse`](../models/DeleteMerchantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Merchants | 
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
  const { data } = await apideck.pos.merchantsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="merchantsOne"></a>
# Get Merchant


Method: **merchantsOne**

```typescript
posApi.merchantsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetMerchantResponse`](../models/GetMerchantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Merchants | 
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
  const { data } = await apideck.pos.merchantsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="merchantsUpdate"></a>
# Update Merchant


Method: **merchantsUpdate**

```typescript
posApi.merchantsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant** | [Merchant](../models/Merchant.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateMerchantResponse`](../models/UpdateMerchantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Merchants | 
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
  merchant: {
    name: 'Dunkin Donuts',
    address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: 40.759211,
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      row_version: '1-12345'
    },
    owner_id: '12345',
    main_location_id: '12345',
    status: 'active',
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ],
    language: 'EN',
    currency: 'USD'
  }
}

try {
  const { data } = await apideck.pos.merchantsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifierGroupsAdd"></a>
# Create Modifier Group


Method: **modifierGroupsAdd**

```typescript
posApi.modifierGroupsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifierGroup** | [ModifierGroup](../models/ModifierGroup.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateModifierGroupResponse`](../models/CreateModifierGroupResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | ModifierGroups | 
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
  modifierGroup: {
    name: 'Modifier',
    alternate_name: 'Modifier New',
    minimum_required: 1,
    maximum_allowed: 5,
    selection_type: 'single',
    present_at_all_locations: false,
    modifiers: [
      {
        id: '12345',
        name: 'Modifier',
        alternate_name: 'Modifier New',
        price_amount: 10,
        currency: 'USD',
        available: true
      }
    ],
    deleted: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.pos.modifierGroupsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifierGroupsAll"></a>
# List Modifier Groups


Method: **modifierGroupsAll**

```typescript
posApi.modifierGroupsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetModifierGroupsResponse`](../models/GetModifierGroupsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ModifierGroups | 
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
  const { data } = await apideck.pos.modifierGroupsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifierGroupsDelete"></a>
# Delete Modifier Group


Method: **modifierGroupsDelete**

```typescript
posApi.modifierGroupsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteModifierGroupResponse`](../models/DeleteModifierGroupResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ModifierGroups | 
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
  const { data } = await apideck.pos.modifierGroupsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifierGroupsOne"></a>
# Get Modifier Group


Method: **modifierGroupsOne**

```typescript
posApi.modifierGroupsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetModifierGroupResponse`](../models/GetModifierGroupResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ModifierGroups | 
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
  const { data } = await apideck.pos.modifierGroupsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifierGroupsUpdate"></a>
# Update Modifier Group


Method: **modifierGroupsUpdate**

```typescript
posApi.modifierGroupsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifierGroup** | [ModifierGroup](../models/ModifierGroup.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateModifierGroupResponse`](../models/UpdateModifierGroupResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | ModifierGroups | 
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
  modifierGroup: {
    name: 'Modifier',
    alternate_name: 'Modifier New',
    minimum_required: 1,
    maximum_allowed: 5,
    selection_type: 'single',
    present_at_all_locations: false,
    modifiers: [
      {
        id: '12345',
        name: 'Modifier',
        alternate_name: 'Modifier New',
        price_amount: 10,
        currency: 'USD',
        available: true
      }
    ],
    deleted: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.pos.modifierGroupsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifiersAdd"></a>
# Create Modifier


Method: **modifiersAdd**

```typescript
posApi.modifiersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifier** | [Modifier](../models/Modifier.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateModifierResponse`](../models/CreateModifierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Modifiers | 
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
  modifier: {
    idempotency_key: 'random_string',
    name: 'Modifier',
    alternate_name: 'Modifier New',
    price_amount: 10,
    currency: 'USD',
    modifier_group_id: '123',
    available: true
  }
}

try {
  const { data } = await apideck.pos.modifiersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifiersAll"></a>
# List Modifiers


Method: **modifiersAll**

```typescript
posApi.modifiersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetModifiersResponse`](../models/GetModifiersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Modifiers | 
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
  const { data } = await apideck.pos.modifiersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifiersDelete"></a>
# Delete Modifier


Method: **modifiersDelete**

```typescript
posApi.modifiersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **filter** | **ModifierGroupFilter** | Apply filters (beta) | (optional) 



### Response Type

[`DeleteModifierResponse`](../models/DeleteModifierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Modifiers | 
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
  const { data } = await apideck.pos.modifiersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifiersOne"></a>
# Get Modifier


Method: **modifiersOne**

```typescript
posApi.modifiersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **filter** | **ModifierGroupFilter** | Apply filters (beta) | (optional) 



### Response Type

[`GetModifierResponse`](../models/GetModifierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Modifiers | 
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
  const { data } = await apideck.pos.modifiersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="modifiersUpdate"></a>
# Update Modifier


Method: **modifiersUpdate**

```typescript
posApi.modifiersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifier** | [Modifier](../models/Modifier.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateModifierResponse`](../models/UpdateModifierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Modifiers | 
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
  modifier: {
    idempotency_key: 'random_string',
    name: 'Modifier',
    alternate_name: 'Modifier New',
    price_amount: 10,
    currency: 'USD',
    modifier_group_id: '123',
    available: true
  }
}

try {
  const { data } = await apideck.pos.modifiersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="orderTypesAdd"></a>
# Create Order Type


Method: **orderTypesAdd**

```typescript
posApi.orderTypesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderType** | [OrderType](../models/OrderType.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateOrderTypeResponse`](../models/CreateOrderTypeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | OrderTypes | 
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
  orderType: {
    name: 'Default order type',
    default: true
  }
}

try {
  const { data } = await apideck.pos.orderTypesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="orderTypesAll"></a>
# List Order Types


Method: **orderTypesAll**

```typescript
posApi.orderTypesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetOrderTypesResponse`](../models/GetOrderTypesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | OrderTypes | 
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
  const { data } = await apideck.pos.orderTypesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="orderTypesDelete"></a>
# Delete Order Type


Method: **orderTypesDelete**

```typescript
posApi.orderTypesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteOrderTypeResponse`](../models/DeleteOrderTypeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | OrderTypes | 
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
  const { data } = await apideck.pos.orderTypesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="orderTypesOne"></a>
# Get Order Type


Method: **orderTypesOne**

```typescript
posApi.orderTypesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetOrderTypeResponse`](../models/GetOrderTypeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | OrderTypes | 
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
  const { data } = await apideck.pos.orderTypesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="orderTypesUpdate"></a>
# Update Order Type


Method: **orderTypesUpdate**

```typescript
posApi.orderTypesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderType** | [OrderType](../models/OrderType.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateOrderTypeResponse`](../models/UpdateOrderTypeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | OrderTypes | 
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
  orderType: {
    name: 'Default order type',
    default: true
  }
}

try {
  const { data } = await apideck.pos.orderTypesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersAdd"></a>
# Create Order


Method: **ordersAdd**

```typescript
posApi.ordersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [Order](../models/Order.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateOrderResponse`](../models/CreateOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Orders | 
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
  order: {
    idempotency_key: 'random_string',
    order_number: '1F',
    order_date: '2022-08-12',
    closed_date: '2022-08-13',
    reference_id: 'my-order-001',
    status: 'open',
    payment_status: 'open',
    currency: 'USD',
    title: 'string',
    note: 'string',
    merchant_id: '12345',
    customer_id: '12345',
    employee_id: '12345',
    location_id: '12345',
    order_type_id: '12345',
    table: '1F',
    seat: '23F',
    total_amount: 275,
    total_tip: 700,
    total_tax: 275,
    total_discount: 300,
    total_refund: 0,
    total_service_charge: 0,
    refunded: false,
    customers: [
      {
        first_name: 'Elon',
        middle_name: 'D.',
        last_name: 'Musk',
        phone_numbers: [
          {
            id: '12345',
            country_code: '1',
            area_code: '323',
            number: '111-111-1111',
            extension: '105',
            type: 'primary'
          }
        ],
        emails: [
          {
            id: '123',
            email: 'elon@musk.com',
            type: 'primary'
          }
        ]
      }
    ],
    fulfillments: [
      {
        id: '12345',
        status: 'proposed',
        type: 'shipment',
        pickup_details: {
          auto_complete_duration: 'P1W3D',
          cancel_reason: 'Not hungry',
          expires_at: '2016-09-04T23:59:33.123Z',
          schedule_type: 'scheduled',
          pickup_at: '2016-09-04T23:59:33.123Z',
          pickup_window_duration: 'P1W3D',
          prep_time_duration: 'P1W3D',
          note: 'Pickup in the back.',
          placed_at: '2016-09-04T23:59:33.123Z',
          rejected_at: '2016-09-04T23:59:33.123Z',
          ready_at: '2016-09-04T23:59:33.123Z',
          expired_at: '2016-09-04T23:59:33.123Z',
          picked_up_at: '2016-09-04T23:59:33.123Z',
          canceled_at: '2016-09-04T23:59:33.123Z',
          is_curbside_pickup: true,
          curbside_pickup_details: {
            curbside_details: 'string',
            buyer_arrived_at: '2016-09-04T23:59:33.123Z'
          },
          recipient: {
            customer_id: '12345',
            display_name: 'Elon Musk',
            address: [Object],
            phone_number: [Object],
            email: [Object]
          }
        },
        shipment_details: {}
      }
    ],
    line_items: [
      {
        name: 'New York Strip Steak',
        item: {},
        total_tax: 2000,
        total_discount: 3000,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        applied_taxes: [
          {
            tax_id: 'sales-tax',
            amount: 27500,
            currency: 'USD'
          }
        ],
        applied_discounts: [
          {
            discount_id: '12345',
            amount: 27500,
            currency: 'USD'
          }
        ],
        modifiers: [
          {
            name: 'New York Strip Steak - no cheese',
            amount: 27500,
            currency: 'USD'
          }
        ]
      }
    ],
    payments: [
      {
        amount: 27500,
        currency: 'USD'
      }
    ],
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ],
    refunds: [
      {
        amount: 27500,
        currency: 'USD',
        reason: 'The reason for the refund being issued.',
        status: 'pending'
      }
    ],
    taxes: [
      {
        id: 'state-sales-tax',
        name: 'State Sales Tax',
        amount: 27500,
        currency: 'USD',
        percentage: 15,
        scope: 'order',
        type: 'unknown',
        auto_applied: true
      }
    ],
    discounts: [
      {
        name: '10% off',
        type: 'percentage',
        amount: 27500,
        currency: 'USD',
        scope: 'order'
      }
    ],
    tenders: [
      {
        name: '10% off',
        type: 'cash',
        note: 'An optional note associated with the tender at the time of payment.',
        amount: 27500,
        percentage: 10,
        currency: 'USD',
        total_amount: 27.5,
        total_tip: 7,
        total_processing_fee: 0,
        total_tax: 2.75,
        total_discount: 3,
        total_refund: 0,
        total_service_charge: 0,
        buyer_tendered_cash_amount: 27500,
        change_back_cash_amount: 27500,
        card: {
          bin: '41111',
          card_brand: 'visa',
          card_type: 'credit',
          prepaid_type: 'prepaid',
          cardholder_name: 'John Doe',
          customer_id: '12345',
          merchant_id: '12345',
          exp_month: 1,
          exp_year: 2022,
          fingerprint: ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
          last_4: 'The last 4 digits of the card number.',
          enabled: true,
          billing_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          reference_id: 'card-001',
          version: '230320320320'
        },
        card_status: 'authorized',
        card_entry_method: 'swiped'
      }
    ],
    voided: false,
    version: '230320320320'
  }
}

try {
  const { data } = await apideck.pos.ordersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersAll"></a>
# List Orders


Method: **ordersAll**

```typescript
posApi.ordersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20
 **locationId** | [**string**] | ID of the location. | (optional) 



### Response Type

[`GetOrdersResponse`](../models/GetOrdersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Orders | 
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
  const { data } = await apideck.pos.ordersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersDelete"></a>
# Delete Order


Method: **ordersDelete**

```typescript
posApi.ordersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteOrderResponse`](../models/DeleteOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Orders | 
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
  const { data } = await apideck.pos.ordersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersOne"></a>
# Get Order


Method: **ordersOne**

```typescript
posApi.ordersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetOrderResponse`](../models/GetOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Orders | 
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
  const { data } = await apideck.pos.ordersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersPay"></a>
# Pay Order


Method: **ordersPay**

```typescript
posApi.ordersPay(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [Order](../models/Order.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateOrderResponse`](../models/CreateOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Orders | 
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
  order: {
    idempotency_key: 'random_string',
    order_number: '1F',
    order_date: '2022-08-12',
    closed_date: '2022-08-13',
    reference_id: 'my-order-001',
    status: 'open',
    payment_status: 'open',
    currency: 'USD',
    title: 'string',
    note: 'string',
    merchant_id: '12345',
    customer_id: '12345',
    employee_id: '12345',
    location_id: '12345',
    order_type_id: '12345',
    table: '1F',
    seat: '23F',
    total_amount: 275,
    total_tip: 700,
    total_tax: 275,
    total_discount: 300,
    total_refund: 0,
    total_service_charge: 0,
    refunded: false,
    customers: [
      {
        first_name: 'Elon',
        middle_name: 'D.',
        last_name: 'Musk',
        phone_numbers: [
          {
            id: '12345',
            country_code: '1',
            area_code: '323',
            number: '111-111-1111',
            extension: '105',
            type: 'primary'
          }
        ],
        emails: [
          {
            id: '123',
            email: 'elon@musk.com',
            type: 'primary'
          }
        ]
      }
    ],
    fulfillments: [
      {
        id: '12345',
        status: 'proposed',
        type: 'shipment',
        pickup_details: {
          auto_complete_duration: 'P1W3D',
          cancel_reason: 'Not hungry',
          expires_at: '2016-09-04T23:59:33.123Z',
          schedule_type: 'scheduled',
          pickup_at: '2016-09-04T23:59:33.123Z',
          pickup_window_duration: 'P1W3D',
          prep_time_duration: 'P1W3D',
          note: 'Pickup in the back.',
          placed_at: '2016-09-04T23:59:33.123Z',
          rejected_at: '2016-09-04T23:59:33.123Z',
          ready_at: '2016-09-04T23:59:33.123Z',
          expired_at: '2016-09-04T23:59:33.123Z',
          picked_up_at: '2016-09-04T23:59:33.123Z',
          canceled_at: '2016-09-04T23:59:33.123Z',
          is_curbside_pickup: true,
          curbside_pickup_details: {
            curbside_details: 'string',
            buyer_arrived_at: '2016-09-04T23:59:33.123Z'
          },
          recipient: {
            customer_id: '12345',
            display_name: 'Elon Musk',
            address: [Object],
            phone_number: [Object],
            email: [Object]
          }
        },
        shipment_details: {}
      }
    ],
    line_items: [
      {
        name: 'New York Strip Steak',
        item: {},
        total_tax: 2000,
        total_discount: 3000,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        applied_taxes: [
          {
            tax_id: 'sales-tax',
            amount: 27500,
            currency: 'USD'
          }
        ],
        applied_discounts: [
          {
            discount_id: '12345',
            amount: 27500,
            currency: 'USD'
          }
        ],
        modifiers: [
          {
            name: 'New York Strip Steak - no cheese',
            amount: 27500,
            currency: 'USD'
          }
        ]
      }
    ],
    payments: [
      {
        amount: 27500,
        currency: 'USD'
      }
    ],
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ],
    refunds: [
      {
        amount: 27500,
        currency: 'USD',
        reason: 'The reason for the refund being issued.',
        status: 'pending'
      }
    ],
    taxes: [
      {
        id: 'state-sales-tax',
        name: 'State Sales Tax',
        amount: 27500,
        currency: 'USD',
        percentage: 15,
        scope: 'order',
        type: 'unknown',
        auto_applied: true
      }
    ],
    discounts: [
      {
        name: '10% off',
        type: 'percentage',
        amount: 27500,
        currency: 'USD',
        scope: 'order'
      }
    ],
    tenders: [
      {
        name: '10% off',
        type: 'cash',
        note: 'An optional note associated with the tender at the time of payment.',
        amount: 27500,
        percentage: 10,
        currency: 'USD',
        total_amount: 27.5,
        total_tip: 7,
        total_processing_fee: 0,
        total_tax: 2.75,
        total_discount: 3,
        total_refund: 0,
        total_service_charge: 0,
        buyer_tendered_cash_amount: 27500,
        change_back_cash_amount: 27500,
        card: {
          bin: '41111',
          card_brand: 'visa',
          card_type: 'credit',
          prepaid_type: 'prepaid',
          cardholder_name: 'John Doe',
          customer_id: '12345',
          merchant_id: '12345',
          exp_month: 1,
          exp_year: 2022,
          fingerprint: ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
          last_4: 'The last 4 digits of the card number.',
          enabled: true,
          billing_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          reference_id: 'card-001',
          version: '230320320320'
        },
        card_status: 'authorized',
        card_entry_method: 'swiped'
      }
    ],
    voided: false,
    version: '230320320320'
  }
}

try {
  const { data } = await apideck.pos.ordersPay(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ordersUpdate"></a>
# Update Order


Method: **ordersUpdate**

```typescript
posApi.ordersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [Order](../models/Order.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateOrderResponse`](../models/UpdateOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Orders | 
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
  order: {
    idempotency_key: 'random_string',
    order_number: '1F',
    order_date: '2022-08-12',
    closed_date: '2022-08-13',
    reference_id: 'my-order-001',
    status: 'open',
    payment_status: 'open',
    currency: 'USD',
    title: 'string',
    note: 'string',
    merchant_id: '12345',
    customer_id: '12345',
    employee_id: '12345',
    location_id: '12345',
    order_type_id: '12345',
    table: '1F',
    seat: '23F',
    total_amount: 275,
    total_tip: 700,
    total_tax: 275,
    total_discount: 300,
    total_refund: 0,
    total_service_charge: 0,
    refunded: false,
    customers: [
      {
        first_name: 'Elon',
        middle_name: 'D.',
        last_name: 'Musk',
        phone_numbers: [
          {
            id: '12345',
            country_code: '1',
            area_code: '323',
            number: '111-111-1111',
            extension: '105',
            type: 'primary'
          }
        ],
        emails: [
          {
            id: '123',
            email: 'elon@musk.com',
            type: 'primary'
          }
        ]
      }
    ],
    fulfillments: [
      {
        id: '12345',
        status: 'proposed',
        type: 'shipment',
        pickup_details: {
          auto_complete_duration: 'P1W3D',
          cancel_reason: 'Not hungry',
          expires_at: '2016-09-04T23:59:33.123Z',
          schedule_type: 'scheduled',
          pickup_at: '2016-09-04T23:59:33.123Z',
          pickup_window_duration: 'P1W3D',
          prep_time_duration: 'P1W3D',
          note: 'Pickup in the back.',
          placed_at: '2016-09-04T23:59:33.123Z',
          rejected_at: '2016-09-04T23:59:33.123Z',
          ready_at: '2016-09-04T23:59:33.123Z',
          expired_at: '2016-09-04T23:59:33.123Z',
          picked_up_at: '2016-09-04T23:59:33.123Z',
          canceled_at: '2016-09-04T23:59:33.123Z',
          is_curbside_pickup: true,
          curbside_pickup_details: {
            curbside_details: 'string',
            buyer_arrived_at: '2016-09-04T23:59:33.123Z'
          },
          recipient: {
            customer_id: '12345',
            display_name: 'Elon Musk',
            address: [Object],
            phone_number: [Object],
            email: [Object]
          }
        },
        shipment_details: {}
      }
    ],
    line_items: [
      {
        name: 'New York Strip Steak',
        item: {},
        total_tax: 2000,
        total_discount: 3000,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        applied_taxes: [
          {
            tax_id: 'sales-tax',
            amount: 27500,
            currency: 'USD'
          }
        ],
        applied_discounts: [
          {
            discount_id: '12345',
            amount: 27500,
            currency: 'USD'
          }
        ],
        modifiers: [
          {
            name: 'New York Strip Steak - no cheese',
            amount: 27500,
            currency: 'USD'
          }
        ]
      }
    ],
    payments: [
      {
        amount: 27500,
        currency: 'USD'
      }
    ],
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ],
    refunds: [
      {
        amount: 27500,
        currency: 'USD',
        reason: 'The reason for the refund being issued.',
        status: 'pending'
      }
    ],
    taxes: [
      {
        id: 'state-sales-tax',
        name: 'State Sales Tax',
        amount: 27500,
        currency: 'USD',
        percentage: 15,
        scope: 'order',
        type: 'unknown',
        auto_applied: true
      }
    ],
    discounts: [
      {
        name: '10% off',
        type: 'percentage',
        amount: 27500,
        currency: 'USD',
        scope: 'order'
      }
    ],
    tenders: [
      {
        name: '10% off',
        type: 'cash',
        note: 'An optional note associated with the tender at the time of payment.',
        amount: 27500,
        percentage: 10,
        currency: 'USD',
        total_amount: 27.5,
        total_tip: 7,
        total_processing_fee: 0,
        total_tax: 2.75,
        total_discount: 3,
        total_refund: 0,
        total_service_charge: 0,
        buyer_tendered_cash_amount: 27500,
        change_back_cash_amount: 27500,
        card: {
          bin: '41111',
          card_brand: 'visa',
          card_type: 'credit',
          prepaid_type: 'prepaid',
          cardholder_name: 'John Doe',
          customer_id: '12345',
          merchant_id: '12345',
          exp_month: 1,
          exp_year: 2022,
          fingerprint: ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
          last_4: 'The last 4 digits of the card number.',
          enabled: true,
          billing_address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          reference_id: 'card-001',
          version: '230320320320'
        },
        card_status: 'authorized',
        card_entry_method: 'swiped'
      }
    ],
    voided: false,
    version: '230320320320'
  }
}

try {
  const { data } = await apideck.pos.ordersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsAdd"></a>
# Create Payment


Method: **paymentsAdd**

```typescript
posApi.paymentsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [PosPayment](../models/PosPayment.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreatePosPaymentResponse`](../models/CreatePosPaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | PosPayments | 
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
  payment: {
    source_id: '12345',
    order_id: '12345',
    merchant_id: '12345',
    customer_id: '12345',
    employee_id: '12345',
    location_id: '12345',
    device_id: '12345',
    tender_id: '12345',
    external_payment_id: '12345',
    idempotency_key: 'random_string',
    amount: 27.5,
    currency: 'USD',
    tip: 7,
    tax: 20,
    total: 37.5,
    app_fee: 3,
    change_back_cash_amount: 20,
    approved: 37.5,
    refunded: 37.5,
    processing_fees: [
      {
        amount: 1.05,
        effective_at: '2020-09-30T07:43:32.000Z',
        processing_type: 'initial'
      }
    ],
    source: 'external',
    status: 'approved',
    cash: {
      amount: null,
      charge_back_amount: null
    },
    card_details: {
      card: {
        bin: '41111',
        card_brand: 'visa',
        card_type: 'credit',
        prepaid_type: 'prepaid',
        cardholder_name: 'John Doe',
        customer_id: '12345',
        merchant_id: '12345',
        exp_month: 1,
        exp_year: 2022,
        fingerprint: ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
        last_4: 'The last 4 digits of the card number.',
        enabled: true,
        billing_address: {
          id: '123',
          type: 'primary',
          string: '25 Spring Street, Blackburn, VIC 3130',
          name: 'HQ US',
          line1: 'Main street',
          line2: 'apt #',
          line3: 'Suite #',
          line4: 'delivery instructions',
          street_number: '25',
          city: 'San Francisco',
          state: 'CA',
          postal_code: '94104',
          country: 'US',
          latitude: 40.759211,
          longitude: '-73.984638',
          county: 'Santa Clara',
          contact_name: 'Elon Musk',
          salutation: 'Mr',
          phone_number: '111-111-1111',
          fax: '122-111-1111',
          email: 'elon@musk.com',
          website: 'https://elonmusk.com',
          row_version: '1-12345'
        },
        reference_id: 'card-001',
        version: '230320320320'
      }
    },
    bank_account: {
      bank_name: 'string',
      transfer_type: 'string',
      account_ownership_type: 'string',
      fingerprint: 'string',
      country: 'US',
      statement_description: 'string',
      ach_details: {
        routing_number: 'string',
        account_number_suffix: 'stri',
        account_type: 'string'
      }
    },
    wallet: {
      status: 'authorized'
    },
    external_details: {
      type: 'check',
      source: 'string',
      source_id: 'string',
      source_fee_amount: 2.5
    },
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ]
  }
}

try {
  const { data } = await apideck.pos.paymentsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsAll"></a>
# List Payments


Method: **paymentsAll**

```typescript
posApi.paymentsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetPosPaymentsResponse`](../models/GetPosPaymentsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PosPayments | 
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
  const { data } = await apideck.pos.paymentsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsDelete"></a>
# Delete Payment


Method: **paymentsDelete**

```typescript
posApi.paymentsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeletePosPaymentResponse`](../models/DeletePosPaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PosPayments | 
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
  const { data } = await apideck.pos.paymentsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsOne"></a>
# Get Payment


Method: **paymentsOne**

```typescript
posApi.paymentsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetPosPaymentResponse`](../models/GetPosPaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PosPayments | 
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
  const { data } = await apideck.pos.paymentsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsUpdate"></a>
# Update Payment


Method: **paymentsUpdate**

```typescript
posApi.paymentsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [PosPayment](../models/PosPayment.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdatePosPaymentResponse`](../models/UpdatePosPaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PosPayments | 
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
  payment: {
    source_id: '12345',
    order_id: '12345',
    merchant_id: '12345',
    customer_id: '12345',
    employee_id: '12345',
    location_id: '12345',
    device_id: '12345',
    tender_id: '12345',
    external_payment_id: '12345',
    idempotency_key: 'random_string',
    amount: 27.5,
    currency: 'USD',
    tip: 7,
    tax: 20,
    total: 37.5,
    app_fee: 3,
    change_back_cash_amount: 20,
    approved: 37.5,
    refunded: 37.5,
    processing_fees: [
      {
        amount: 1.05,
        effective_at: '2020-09-30T07:43:32.000Z',
        processing_type: 'initial'
      }
    ],
    source: 'external',
    status: 'approved',
    cash: {
      amount: null,
      charge_back_amount: null
    },
    card_details: {
      card: {
        bin: '41111',
        card_brand: 'visa',
        card_type: 'credit',
        prepaid_type: 'prepaid',
        cardholder_name: 'John Doe',
        customer_id: '12345',
        merchant_id: '12345',
        exp_month: 1,
        exp_year: 2022,
        fingerprint: ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
        last_4: 'The last 4 digits of the card number.',
        enabled: true,
        billing_address: {
          id: '123',
          type: 'primary',
          string: '25 Spring Street, Blackburn, VIC 3130',
          name: 'HQ US',
          line1: 'Main street',
          line2: 'apt #',
          line3: 'Suite #',
          line4: 'delivery instructions',
          street_number: '25',
          city: 'San Francisco',
          state: 'CA',
          postal_code: '94104',
          country: 'US',
          latitude: 40.759211,
          longitude: '-73.984638',
          county: 'Santa Clara',
          contact_name: 'Elon Musk',
          salutation: 'Mr',
          phone_number: '111-111-1111',
          fax: '122-111-1111',
          email: 'elon@musk.com',
          website: 'https://elonmusk.com',
          row_version: '1-12345'
        },
        reference_id: 'card-001',
        version: '230320320320'
      }
    },
    bank_account: {
      bank_name: 'string',
      transfer_type: 'string',
      account_ownership_type: 'string',
      fingerprint: 'string',
      country: 'US',
      statement_description: 'string',
      ach_details: {
        routing_number: 'string',
        account_number_suffix: 'stri',
        account_type: 'string'
      }
    },
    wallet: {
      status: 'authorized'
    },
    external_details: {
      type: 'check',
      source: 'string',
      source_id: 'string',
      source_fee_amount: 2.5
    },
    service_charges: [
      {
        name: 'Charge for delivery',
        amount: 27500,
        percentage: 12.5,
        currency: 'USD',
        active: true,
        type: 'auto_gratuity'
      }
    ]
  }
}

try {
  const { data } = await apideck.pos.paymentsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="tendersAdd"></a>
# Create Tender


Method: **tendersAdd**

```typescript
posApi.tendersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tender** | [Tender](../models/Tender.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateTenderResponse`](../models/CreateTenderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Tenders | 
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
  tender: {
    key: 'com.clover.tender.cash',
    label: 'Cash',
    active: true,
    hidden: true,
    editable: true,
    opens_cash_drawer: true,
    allows_tipping: true
  }
}

try {
  const { data } = await apideck.pos.tendersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="tendersAll"></a>
# List Tenders


Method: **tendersAll**

```typescript
posApi.tendersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetTendersResponse`](../models/GetTendersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Tenders | 
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
  const { data } = await apideck.pos.tendersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="tendersDelete"></a>
# Delete Tender


Method: **tendersDelete**

```typescript
posApi.tendersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteTenderResponse`](../models/DeleteTenderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Tenders | 
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
  const { data } = await apideck.pos.tendersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="tendersOne"></a>
# Get Tender


Method: **tendersOne**

```typescript
posApi.tendersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetTenderResponse`](../models/GetTenderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Tenders | 
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
  const { data } = await apideck.pos.tendersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="tendersUpdate"></a>
# Update Tender


Method: **tendersUpdate**

```typescript
posApi.tendersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tender** | [Tender](../models/Tender.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateTenderResponse`](../models/UpdateTenderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Tenders | 
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
  tender: {
    key: 'com.clover.tender.cash',
    label: 'Cash',
    active: true,
    hidden: true,
    editable: true,
    opens_cash_drawer: true,
    allows_tipping: true
  }
}

try {
  const { data } = await apideck.pos.tendersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

