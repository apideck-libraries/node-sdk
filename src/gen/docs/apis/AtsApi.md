# Apideck.Ats

## Class Name
**AtsApi**

## Methods

* [Create Applicant](#applicantsAdd)
* [List Applicants](#applicantsAll)
* [Delete Applicant](#applicantsDelete)
* [Get Applicant](#applicantsOne)
* [Update Applicant](#applicantsUpdate)
* [Create Application](#applicationsAdd)
* [List Applications](#applicationsAll)
* [Delete Application](#applicationsDelete)
* [Get Application](#applicationsOne)
* [Update Application](#applicationsUpdate)
* [List Jobs](#jobsAll)
* [Get Job](#jobsOne)

<a name="applicantsAdd"></a>
# Create Applicant


Method: **applicantsAdd**

```typescript
atsApi.applicantsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant** | [Applicant](../models/Applicant.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateApplicantResponse`](../models/CreateApplicantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Applicants | 
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
  applicant: {
    position_id: '123',
    name: 'Elon Musk',
    first_name: 'Elon',
    last_name: 'Musk',
    middle_name: 'D.',
    initials: 'EM',
    birthday: '2000-08-12',
    cover_letter: 'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
    photo_url: 'https://unavatar.io/elon-musk',
    headline: 'PepsiCo, Inc, Central Perk',
    title: 'CEO',
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
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
    addresses: [
      {
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
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    social_links: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck',
        type: 'twitter'
      }
    ],
    stage_id: '12345',
    recruiter_id: '12345',
    coordinator_id: '12345',
    application_ids: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    applications: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    followers: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    sources: [
      'Job site'
    ],
    confidential: false,
    anonymized: true,
    tags: [
      'New'
    ],
    archived: false,
    owner_id: '54321',
    record_url: 'https://app.intercom.io/contacts/12345',
    custom_mappings: {},
    deleted: true
  }
}

try {
  const { data } = await apideck.ats.applicantsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicantsAll"></a>
# List Applicants


Method: **applicantsAll**

```typescript
atsApi.applicantsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **ApplicantsFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetApplicantsResponse`](../models/GetApplicantsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applicants | 
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
  const { data } = await apideck.ats.applicantsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicantsDelete"></a>
# Delete Applicant


Method: **applicantsDelete**

```typescript
atsApi.applicantsDelete(body)
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

[`DeleteApplicantResponse`](../models/DeleteApplicantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applicants | 
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
  const { data } = await apideck.ats.applicantsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicantsOne"></a>
# Get Applicant


Method: **applicantsOne**

```typescript
atsApi.applicantsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetApplicantResponse`](../models/GetApplicantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applicants | 
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
  const { data } = await apideck.ats.applicantsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicantsUpdate"></a>
# Update Applicant


Method: **applicantsUpdate**

```typescript
atsApi.applicantsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicant** | [Applicant](../models/Applicant.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateApplicantResponse`](../models/UpdateApplicantResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applicants | 
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
  applicant: {
    position_id: '123',
    name: 'Elon Musk',
    first_name: 'Elon',
    last_name: 'Musk',
    middle_name: 'D.',
    initials: 'EM',
    birthday: '2000-08-12',
    cover_letter: 'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
    photo_url: 'https://unavatar.io/elon-musk',
    headline: 'PepsiCo, Inc, Central Perk',
    title: 'CEO',
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
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
    addresses: [
      {
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
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    social_links: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck',
        type: 'twitter'
      }
    ],
    stage_id: '12345',
    recruiter_id: '12345',
    coordinator_id: '12345',
    application_ids: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    applications: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    followers: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    sources: [
      'Job site'
    ],
    confidential: false,
    anonymized: true,
    tags: [
      'New'
    ],
    archived: false,
    owner_id: '54321',
    record_url: 'https://app.intercom.io/contacts/12345',
    custom_mappings: {},
    deleted: true
  }
}

try {
  const { data } = await apideck.ats.applicantsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicationsAdd"></a>
# Create Application


Method: **applicationsAdd**

```typescript
atsApi.applicationsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [Application](../models/Application.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateApplicationResponse`](../models/CreateApplicationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Applications | 
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
  application: {
    applicant_id: '12345',
    job_id: '12345',
    status: 'open',
    stage: {
      id: '12345',
      name: '12345'
    },
    custom_mappings: {}
  }
}

try {
  const { data } = await apideck.ats.applicationsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicationsAll"></a>
# List Applications


Method: **applicationsAll**

```typescript
atsApi.applicationsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20



### Response Type

[`GetApplicationsResponse`](../models/GetApplicationsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applications | 
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
  const { data } = await apideck.ats.applicationsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicationsDelete"></a>
# Delete Application


Method: **applicationsDelete**

```typescript
atsApi.applicationsDelete(body)
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

[`DeleteApplicationResponse`](../models/DeleteApplicationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applications | 
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
  const { data } = await apideck.ats.applicationsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicationsOne"></a>
# Get Application


Method: **applicationsOne**

```typescript
atsApi.applicationsOne(body)
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

[`GetApplicationResponse`](../models/GetApplicationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applications | 
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
  const { data } = await apideck.ats.applicationsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="applicationsUpdate"></a>
# Update Application


Method: **applicationsUpdate**

```typescript
atsApi.applicationsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [Application](../models/Application.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateApplicationResponse`](../models/UpdateApplicationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Applications | 
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
  application: {
    applicant_id: '12345',
    job_id: '12345',
    status: 'open',
    stage: {
      id: '12345',
      name: '12345'
    },
    custom_mappings: {}
  }
}

try {
  const { data } = await apideck.ats.applicationsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="jobsAll"></a>
# List Jobs


Method: **jobsAll**

```typescript
atsApi.jobsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetJobsResponse`](../models/GetJobsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Jobs | 
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
  const { data } = await apideck.ats.jobsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="jobsOne"></a>
# Get Job


Method: **jobsOne**

```typescript
atsApi.jobsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetJobResponse`](../models/GetJobResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Jobs | 
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
  const { data } = await apideck.ats.jobsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

