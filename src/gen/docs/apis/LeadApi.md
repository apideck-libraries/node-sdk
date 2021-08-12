# Apideck.Lead

## Class Name
**LeadApi**

## Methods

* [Create Lead](#leadsAdd)
* [List Leads](#leadsAll)
* [Delete Lead](#leadsDelete)
* [Get Lead](#leadsOne)
* [Update Lead](#leadsUpdate)

<a name="leadsAdd"></a>
# Create Lead


Method: **leadsAdd**

```typescript
leadApi.leadsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead** | [Lead](../models/Lead.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`InlineResponse201`](../models/InlineResponse201.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Lead created | 
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
  lead: {
    name: 'Elon Musk',
    companyName: 'Spacex',
    ownerId: '54321',
    companyId: '2',
    contactId: '2',
    leadSource: 'Cold Call',
    firstName: 'Elon',
    lastName: 'Musk',
    description: 'A thinker',
    prefix: 'Sir',
    title: 'CEO',
    language: 'EN',
    status: 'New',
    monetaryAmount: 75000,
    currency: 'USD',
    fax: '+12129876543',
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
    ]
  }
}

try {
  const { data } = await apideck.lead.leadsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsAll"></a>
# List Leads


Method: **leadsAll**

```typescript
leadApi.leadsAll(body)
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

[`InlineResponse200`](../models/InlineResponse200.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Leads | 
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
  const { data } = await apideck.lead.leadsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsDelete"></a>
# Delete Lead


Method: **leadsDelete**

```typescript
leadApi.leadsDelete(body)
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

[`InlineResponse201`](../models/InlineResponse201.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Lead deleted | 
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
  const { data } = await apideck.lead.leadsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsOne"></a>
# Get Lead


Method: **leadsOne**

```typescript
leadApi.leadsOne(body)
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

[`InlineResponse2001`](../models/InlineResponse2001.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Lead | 
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
  const { data } = await apideck.lead.leadsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsUpdate"></a>
# Update Lead


Method: **leadsUpdate**

```typescript
leadApi.leadsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead** | [Lead](../models/Lead.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`InlineResponse201`](../models/InlineResponse201.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Lead updated | 
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
  lead: {
    name: 'Elon Musk',
    companyName: 'Spacex',
    ownerId: '54321',
    companyId: '2',
    contactId: '2',
    leadSource: 'Cold Call',
    firstName: 'Elon',
    lastName: 'Musk',
    description: 'A thinker',
    prefix: 'Sir',
    title: 'CEO',
    language: 'EN',
    status: 'New',
    monetaryAmount: 75000,
    currency: 'USD',
    fax: '+12129876543',
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
    ]
  }
}

try {
  const { data } = await apideck.lead.leadsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

