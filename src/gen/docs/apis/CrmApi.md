# Apideck.Crm

## Class Name
**CrmApi**

## Methods

* [Create Activity](#activitiesAdd)
* [List Activities](#activitiesAll)
* [Delete Activity](#activitiesDelete)
* [Get Activity](#activitiesOne)
* [Update Activity](#activitiesUpdate)
* [Create Company](#companiesAdd)
* [List Companies](#companiesAll)
* [Delete Company](#companiesDelete)
* [Get Company](#companiesOne)
* [Update Company](#companiesUpdate)
* [Create Contact](#contactsAdd)
* [List Contacts](#contactsAll)
* [Delete Contact](#contactsDelete)
* [Get Contact](#contactsOne)
* [Update Contact](#contactsUpdate)
* [Create Lead](#leadsAdd1)
* [List Leads](#leadsAll1)
* [Delete Lead](#leadsDelete1)
* [Get Lead](#leadsOne1)
* [Update Lead](#leadsUpdate1)
* [Create Note](#notesAdd)
* [List Notes](#notesAll)
* [Delete Note](#notesDelete)
* [Get Note](#notesOne)
* [Update Note](#notesUpdate)
* [Create Opportunity](#opportunitiesAdd)
* [List Opportunities](#opportunitiesAll)
* [Delete Opportunity](#opportunitiesDelete)
* [Get Opportunity](#opportunitiesOne)
* [Update Opportunity](#opportunitiesUpdate)
* [Create Pipeline](#pipelinesAdd)
* [List Pipelines](#pipelinesAll)
* [Delete Pipeline](#pipelinesDelete)
* [Get Pipeline](#pipelinesOne)
* [Update Pipeline](#pipelinesUpdate)
* [Create User](#usersAdd)
* [List Users](#usersAll)
* [Delete User](#usersDelete)
* [Get User](#usersOne)
* [Update User](#usersUpdate)

<a name="activitiesAdd"></a>
# Create Activity


Method: **activitiesAdd**

```typescript
crmApi.activitiesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | [Activity](../models/Activity.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateActivityResponse`](../models/CreateActivityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Activity | 
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
  activity: {
    activityDatetime: '2021-05-01T12:00:00.000Z',
    durationSeconds: 1800,
    accountId: '12345',
    contactId: '12345',
    companyId: '12345',
    opportunityId: '12345',
    leadId: '12345',
    ownerId: '12345',
    campaignId: '12345',
    caseId: '12345',
    assetId: '12345',
    contractId: '12345',
    productId: '12345',
    solutionId: '12345',
    customObjectId: '12345',
    type: 'meeting',
    title: 'Meeting',
    description: 'More info about the meeting',
    location: 'Space',
    allDayEvent: false,
    private: true,
    groupEvent: true,
    eventSubType: 'debrief',
    groupEventType: 'Proposed',
    child: false,
    archived: false,
    deleted: false,
    showAs: 'busy',
    activityDate: '2021-05-01',
    durationMinutes: 30,
    startDatetime: '2021-05-01T12:00:00.000Z',
    endDatetime: '2021-05-01T12:30:00.000Z',
    endDate: '2021-05-01',
    recurrent: false,
    reminderDatetime: '2021-05-01T17:00:00.000Z',
    reminderSet: false,
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ]
  }
}

try {
  const { data } = await apideck.crm.activitiesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="activitiesAll"></a>
# List Activities


Method: **activitiesAll**

```typescript
crmApi.activitiesAll(body)
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

[`GetActivitiesResponse`](../models/GetActivitiesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Activities | 
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
  const { data } = await apideck.crm.activitiesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="activitiesDelete"></a>
# Delete Activity


Method: **activitiesDelete**

```typescript
crmApi.activitiesDelete(body)
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

[`DeleteActivityResponse`](../models/DeleteActivityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Activity | 
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
  const { data } = await apideck.crm.activitiesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="activitiesOne"></a>
# Get Activity


Method: **activitiesOne**

```typescript
crmApi.activitiesOne(body)
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

[`GetActivityResponse`](../models/GetActivityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Activity | 
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
  const { data } = await apideck.crm.activitiesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="activitiesUpdate"></a>
# Update Activity


Method: **activitiesUpdate**

```typescript
crmApi.activitiesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | [Activity](../models/Activity.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateActivityResponse`](../models/UpdateActivityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Activity | 
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
  activity: {
    activityDatetime: '2021-05-01T12:00:00.000Z',
    durationSeconds: 1800,
    accountId: '12345',
    contactId: '12345',
    companyId: '12345',
    opportunityId: '12345',
    leadId: '12345',
    ownerId: '12345',
    campaignId: '12345',
    caseId: '12345',
    assetId: '12345',
    contractId: '12345',
    productId: '12345',
    solutionId: '12345',
    customObjectId: '12345',
    type: 'meeting',
    title: 'Meeting',
    description: 'More info about the meeting',
    location: 'Space',
    allDayEvent: false,
    private: true,
    groupEvent: true,
    eventSubType: 'debrief',
    groupEventType: 'Proposed',
    child: false,
    archived: false,
    deleted: false,
    showAs: 'busy',
    activityDate: '2021-05-01',
    durationMinutes: 30,
    startDatetime: '2021-05-01T12:00:00.000Z',
    endDatetime: '2021-05-01T12:30:00.000Z',
    endDate: '2021-05-01',
    recurrent: false,
    reminderDatetime: '2021-05-01T17:00:00.000Z',
    reminderSet: false,
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ]
  }
}

try {
  const { data } = await apideck.crm.activitiesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesAdd"></a>
# Create Company


Method: **companiesAdd**

```typescript
crmApi.companiesAdd(body)
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

[`CreateCompanyResponse`](../models/CreateCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Company created | 
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
  company: {
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
  const { data } = await apideck.crm.companiesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesAll"></a>
# List Companies


Method: **companiesAll**

```typescript
crmApi.companiesAll(body)
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
 **filter** | **CompaniesFilter** | Apply filters (beta) | (optional) 
 **sort** | **CompaniesSort** | Apply sorting (beta) | (optional) 



### Response Type

[`GetCompaniesResponse`](../models/GetCompaniesResponse.md)



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

const params = {}

try {
  const { data } = await apideck.crm.companiesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesDelete"></a>
# Delete Company


Method: **companiesDelete**

```typescript
crmApi.companiesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`DeleteCompanyResponse`](../models/DeleteCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Company deleted | 
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
  const { data } = await apideck.crm.companiesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesOne"></a>
# Get Company


Method: **companiesOne**

```typescript
crmApi.companiesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`GetCompanyResponse`](../models/GetCompanyResponse.md)



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

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.crm.companiesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesUpdate"></a>
# Update Company


Method: **companiesUpdate**

```typescript
crmApi.companiesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [Company](../models/Company.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`UpdateCompanyResponse`](../models/UpdateCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Company updated | 
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
  company: {
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
  const { data } = await apideck.crm.companiesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="contactsAdd"></a>
# Create Contact


Method: **contactsAdd**

```typescript
crmApi.contactsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [Contact](../models/Contact.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateContactResponse`](../models/CreateContactResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Contact created | 
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
  contact: {
    name: 'Elon Musk',
    ownerId: '54321',
    type: 'personal',
    companyId: '23456',
    companyName: '23456',
    leadId: '34567',
    firstName: 'Elon',
    middleName: 'D.',
    lastName: 'Musk',
    prefix: 'Mr.',
    suffix: 'PhD',
    title: 'CEO',
    department: 'Engineering',
    language: 'EN',
    gender: 'female',
    birthday: '2000-08-12',
    image: 'https://unavatar.io/elon-musk',
    leadSource: 'Cold Call',
    fax: '+12129876543',
    description: 'Internal champion',
    currentBalance: 10.5,
    status: 'open',
    active: true,
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
  const { data } = await apideck.crm.contactsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="contactsAll"></a>
# List Contacts


Method: **contactsAll**

```typescript
crmApi.contactsAll(body)
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
 **filter** | **ContactsFilter** | Apply filters (beta) | (optional) 
 **sort** | **ContactsSort** | Apply sorting (beta) | (optional) 



### Response Type

[`GetContactsResponse`](../models/GetContactsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Contacts | 
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
  const { data } = await apideck.crm.contactsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="contactsDelete"></a>
# Delete Contact


Method: **contactsDelete**

```typescript
crmApi.contactsDelete(body)
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

[`DeleteContactResponse`](../models/DeleteContactResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Contact deleted | 
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
  const { data } = await apideck.crm.contactsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="contactsOne"></a>
# Get Contact


Method: **contactsOne**

```typescript
crmApi.contactsOne(body)
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

[`GetContactResponse`](../models/GetContactResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Contact | 
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
  const { data } = await apideck.crm.contactsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="contactsUpdate"></a>
# Update Contact


Method: **contactsUpdate**

```typescript
crmApi.contactsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [Contact](../models/Contact.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateContactResponse`](../models/UpdateContactResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Contact updated | 
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
  contact: {
    name: 'Elon Musk',
    ownerId: '54321',
    type: 'personal',
    companyId: '23456',
    companyName: '23456',
    leadId: '34567',
    firstName: 'Elon',
    middleName: 'D.',
    lastName: 'Musk',
    prefix: 'Mr.',
    suffix: 'PhD',
    title: 'CEO',
    department: 'Engineering',
    language: 'EN',
    gender: 'female',
    birthday: '2000-08-12',
    image: 'https://unavatar.io/elon-musk',
    leadSource: 'Cold Call',
    fax: '+12129876543',
    description: 'Internal champion',
    currentBalance: 10.5,
    status: 'open',
    active: true,
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
  const { data } = await apideck.crm.contactsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsAdd1"></a>
# Create Lead


Method: **leadsAdd1**

```typescript
crmApi.leadsAdd(body)
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

[`CreateLeadResponse`](../models/CreateLeadResponse.md)



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
  leads1: {
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
  const { data } = await apideck.crm.leadsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsAll1"></a>
# List Leads


Method: **leadsAll1**

```typescript
crmApi.leadsAll(body)
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
 **filter** | **LeadsFilter** | Apply filters (beta) | (optional) 
 **sort** | **LeadsSort** | Apply sorting (beta) | (optional) 



### Response Type

[`GetLeadsResponse`](../models/GetLeadsResponse.md)



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
  const { data } = await apideck.crm.leadsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsDelete1"></a>
# Delete Lead


Method: **leadsDelete1**

```typescript
crmApi.leadsDelete(body)
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

[`DeleteLeadResponse`](../models/DeleteLeadResponse.md)



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
  const { data } = await apideck.crm.leadsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsOne1"></a>
# Get Lead


Method: **leadsOne1**

```typescript
crmApi.leadsOne(body)
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

[`GetLeadResponse`](../models/GetLeadResponse.md)



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
  const { data } = await apideck.crm.leadsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="leadsUpdate1"></a>
# Update Lead


Method: **leadsUpdate1**

```typescript
crmApi.leadsUpdate(body)
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

[`UpdateLeadResponse`](../models/UpdateLeadResponse.md)



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
  leads1: {
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
  const { data } = await apideck.crm.leadsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="notesAdd"></a>
# Create Note


Method: **notesAdd**

```typescript
crmApi.notesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note** | [Note](../models/Note.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateNoteResponse`](../models/CreateNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Note | 
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
  note: {
    title: 'Meeting Notes',
    content: 'Office hours are 9AM-6PM',
    ownerId: '12345'
  }
}

try {
  const { data } = await apideck.crm.notesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="notesAll"></a>
# List Notes


Method: **notesAll**

```typescript
crmApi.notesAll(body)
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

[`GetNotesResponse`](../models/GetNotesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Notes | 
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
  const { data } = await apideck.crm.notesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="notesDelete"></a>
# Delete Note


Method: **notesDelete**

```typescript
crmApi.notesDelete(body)
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

[`DeleteNoteResponse`](../models/DeleteNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Note | 
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
  const { data } = await apideck.crm.notesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="notesOne"></a>
# Get Note


Method: **notesOne**

```typescript
crmApi.notesOne(body)
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

[`GetNoteResponse`](../models/GetNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Note | 
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
  const { data } = await apideck.crm.notesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="notesUpdate"></a>
# Update Note


Method: **notesUpdate**

```typescript
crmApi.notesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note** | [Note](../models/Note.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateNoteResponse`](../models/UpdateNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Note | 
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
  note: {
    title: 'Meeting Notes',
    content: 'Office hours are 9AM-6PM',
    ownerId: '12345'
  }
}

try {
  const { data } = await apideck.crm.notesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="opportunitiesAdd"></a>
# Create Opportunity


Method: **opportunitiesAdd**

```typescript
crmApi.opportunitiesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [Opportunity](../models/Opportunity.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateOpportunityResponse`](../models/CreateOpportunityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Opportunity | 
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
  opportunity: {
    title: 'New Rocket',
    primaryContactId: '12345',
    description: 'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
    type: 'Existing Customer - Upgrade',
    monetaryAmount: 75000,
    currency: 'USD',
    winProbability: 40,
    closeDate: '2020-10-30',
    lossReasonId: '12345',
    lossReason: 'No budget',
    wonReasonId: '12345',
    wonReason: 'Best pitch',
    pipelineId: '12345',
    pipelineStageId: '12345',
    sourceId: '12345',
    leadId: '12345',
    leadSource: 'Website',
    contactId: '12345',
    companyId: '12345',
    companyName: 'Copper',
    ownerId: '12345',
    priority: 'None',
    status: 'Open',
    statusId: '12345',
    tags: [
      'New'
    ],
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    stageLastChangedAt: '2020-09-30T07:43:32.000Z'
  }
}

try {
  const { data } = await apideck.crm.opportunitiesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="opportunitiesAll"></a>
# List Opportunities


Method: **opportunitiesAll**

```typescript
crmApi.opportunitiesAll(body)
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
 **filter** | **OpportunitiesFilter** | Apply filters (beta) | (optional) 
 **sort** | **OpportunitiesSort** | Apply sorting (beta) | (optional) 



### Response Type

[`GetOpportunitiesResponse`](../models/GetOpportunitiesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Opportunities | 
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
  const { data } = await apideck.crm.opportunitiesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="opportunitiesDelete"></a>
# Delete Opportunity


Method: **opportunitiesDelete**

```typescript
crmApi.opportunitiesDelete(body)
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

[`DeleteOpportunityResponse`](../models/DeleteOpportunityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Opportunity deleted | 
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
  const { data } = await apideck.crm.opportunitiesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="opportunitiesOne"></a>
# Get Opportunity


Method: **opportunitiesOne**

```typescript
crmApi.opportunitiesOne(body)
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

[`GetOpportunityResponse`](../models/GetOpportunityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Opportunity | 
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
  const { data } = await apideck.crm.opportunitiesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="opportunitiesUpdate"></a>
# Update Opportunity


Method: **opportunitiesUpdate**

```typescript
crmApi.opportunitiesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [Opportunity](../models/Opportunity.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateOpportunityResponse`](../models/UpdateOpportunityResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Opportunity updated | 
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
  opportunity: {
    title: 'New Rocket',
    primaryContactId: '12345',
    description: 'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
    type: 'Existing Customer - Upgrade',
    monetaryAmount: 75000,
    currency: 'USD',
    winProbability: 40,
    closeDate: '2020-10-30',
    lossReasonId: '12345',
    lossReason: 'No budget',
    wonReasonId: '12345',
    wonReason: 'Best pitch',
    pipelineId: '12345',
    pipelineStageId: '12345',
    sourceId: '12345',
    leadId: '12345',
    leadSource: 'Website',
    contactId: '12345',
    companyId: '12345',
    companyName: 'Copper',
    ownerId: '12345',
    priority: 'None',
    status: 'Open',
    statusId: '12345',
    tags: [
      'New'
    ],
    customFields: [
      {
        id: 'custom_technologies',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    stageLastChangedAt: '2020-09-30T07:43:32.000Z'
  }
}

try {
  const { data } = await apideck.crm.opportunitiesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="pipelinesAdd"></a>
# Create Pipeline


Method: **pipelinesAdd**

```typescript
crmApi.pipelinesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipeline** | [Pipeline](../models/Pipeline.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreatePipelineResponse`](../models/CreatePipelineResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Pipeline created | 
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
  pipeline: {
    id: 'default',
    name: 'Sales Pipeline',
    currency: 'USD',
    archived: false,
    displayOrder: 1,
    stages: [
      {
        name: 'Contract Sent',
        value: 'CONTRACT_SENT',
        displayOrder: 1
      }
    ]
  }
}

try {
  const { data } = await apideck.crm.pipelinesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="pipelinesAll"></a>
# List Pipelines


Method: **pipelinesAll**

```typescript
crmApi.pipelinesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`GetPipelinesResponse`](../models/GetPipelinesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Pipelines | 
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
  const { data } = await apideck.crm.pipelinesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="pipelinesDelete"></a>
# Delete Pipeline


Method: **pipelinesDelete**

```typescript
crmApi.pipelinesDelete(body)
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

[`DeletePipelineResponse`](../models/DeletePipelineResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Pipeline deleted | 
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
  const { data } = await apideck.crm.pipelinesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="pipelinesOne"></a>
# Get Pipeline


Method: **pipelinesOne**

```typescript
crmApi.pipelinesOne(body)
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

[`GetPipelineResponse`](../models/GetPipelineResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Pipeline | 
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
  const { data } = await apideck.crm.pipelinesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="pipelinesUpdate"></a>
# Update Pipeline


Method: **pipelinesUpdate**

```typescript
crmApi.pipelinesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipeline** | [Pipeline](../models/Pipeline.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdatePipelineResponse`](../models/UpdatePipelineResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Pipeline updated | 
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
  pipeline: {
    id: 'default',
    name: 'Sales Pipeline',
    currency: 'USD',
    archived: false,
    displayOrder: 1,
    stages: [
      {
        name: 'Contract Sent',
        value: 'CONTRACT_SENT',
        displayOrder: 1
      }
    ]
  }
}

try {
  const { data } = await apideck.crm.pipelinesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="usersAdd"></a>
# Create User


Method: **usersAdd**

```typescript
crmApi.usersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [User](../models/User.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateUserResponse`](../models/CreateUserResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | User created | 
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
  user: {
    email: 'elon@musk.com',
    parentId: '54321',
    username: 'masterofcoin',
    firstName: 'Elon',
    lastName: 'Musk',
    image: 'https://logo.clearbit.com/spacex.com?s=128',
    language: 'EN',
    status: 'active',
    password: 'supersecretpassword'
  }
}

try {
  const { data } = await apideck.crm.usersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="usersAll"></a>
# List Users


Method: **usersAll**

```typescript
crmApi.usersAll(body)
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

[`GetUsersResponse`](../models/GetUsersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Users | 
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
  const { data } = await apideck.crm.usersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="usersDelete"></a>
# Delete User


Method: **usersDelete**

```typescript
crmApi.usersDelete(body)
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

[`DeleteUserResponse`](../models/DeleteUserResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | User deleted | 
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
  const { data } = await apideck.crm.usersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="usersOne"></a>
# Get User


Method: **usersOne**

```typescript
crmApi.usersOne(body)
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

[`GetUserResponse`](../models/GetUserResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | User | 
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
  const { data } = await apideck.crm.usersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="usersUpdate"></a>
# Update User


Method: **usersUpdate**

```typescript
crmApi.usersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [User](../models/User.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateUserResponse`](../models/UpdateUserResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | User updated | 
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
  user: {
    email: 'elon@musk.com',
    parentId: '54321',
    username: 'masterofcoin',
    firstName: 'Elon',
    lastName: 'Musk',
    image: 'https://logo.clearbit.com/spacex.com?s=128',
    language: 'EN',
    status: 'active',
    password: 'supersecretpassword'
  }
}

try {
  const { data } = await apideck.crm.usersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

