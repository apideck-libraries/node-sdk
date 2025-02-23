import fetch from 'node-fetch-commonjs'
import { Apideck } from '../../../'

const { Response } = jest.requireActual('node-fetch-commonjs')

jest.mock('node-fetch-commonjs', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('ConnectorApi', () => {
  describe('#apiResourceCoverageOne', () => {
    const endpoint = '/connector/apis/{id}/resources/{resource_id}/coverage'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: 'companies',
          name: 'Companies',
          status: 'live',
          coverage: [
            {
              downstream_id: 'accounts',
              downstream_name: 'Accounts',
              pagination_supported: true,
              pagination: {
                mode: 'native',
                paging_support: true,
                limit_support: true
              },
              supported_operations: ['all', 'one', 'add', 'update', 'delete'],
              supported_filters: ['name', 'email'],
              supported_sort_by: ['updated_at', 'created_at', 'name'],
              supported_fields: [
                {
                  unified_property: 'owner_id',
                  child_properties: [Array]
                }
              ],
              supported_list_fields: [
                {
                  unified_property: 'owner_id',
                  child_properties: [Array]
                }
              ]
            }
          ]
        },
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example',
        resourceId: 'resource_id_example'
      } as any
      const current = await connector.apiResourceCoverageOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#apiResourcesOne', () => {
    const endpoint = '/connector/apis/{id}/resources/{resource_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: 'companies',
          name: 'Companies',
          status: 'live',
          linked_resources: [
            {
              id: 'companies',
              unified_property: 'owner_id'
            }
          ],
          schema: {
            required: ['name', 'company_name'],
            'x-pii': ['name', 'email', 'first_name', 'last_name'],
            additionalProperties: false,
            properties: {
              id: {
                type: 'string',
                example: '12345',
                readOnly: true
              },
              name: {
                type: 'string',
                example: 'Elon Musk',
                minLength: 1
              },
              updated_at: {
                type: 'string',
                example: '2020-09-30T07:43:32.000Z',
                readOnly: true
              },
              created_at: {
                type: 'string',
                example: '2020-09-30T07:43:32.000Z',
                readOnly: true
              }
            }
          }
        },
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example',
        resourceId: 'resource_id_example'
      } as any
      const current = await connector.apiResourcesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#apisAll', () => {
    const endpoint = '/connector/apis'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: [
          {
            id: 'file-storage',
            type: 'platform',
            name: 'File Storage API',
            description: 'Manage API keys, access tokens, OAuth flows and integrations.',
            status: 'live',
            spec_url: 'https://specs.apideck.com/file-storage.yml',
            api_reference_url: 'https://developers.apideck.com/apis/file-storage/reference',
            postman_collection_id: '1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f',
            categories: ['files', 'file-storage', 'cloud-storage', 'object-storage'],
            resources: [
              {
                id: 'companies',
                name: 'Companies',
                status: 'live',
                excluded_from_coverage: false
              }
            ],
            events: ['crm.contact.updated', 'accounting.invoice.created']
          }
        ],
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {} as any
      const current = await connector.apisAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#apisOne', () => {
    const endpoint = '/connector/apis/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: 'file-storage',
          type: 'platform',
          name: 'File Storage API',
          description: 'Manage API keys, access tokens, OAuth flows and integrations.',
          status: 'live',
          spec_url: 'https://specs.apideck.com/file-storage.yml',
          api_reference_url: 'https://developers.apideck.com/apis/file-storage/reference',
          postman_collection_id: '1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f',
          categories: ['files', 'file-storage', 'cloud-storage', 'object-storage'],
          resources: [
            {
              id: 'companies',
              name: 'Companies',
              status: 'live',
              excluded_from_coverage: false
            }
          ],
          events: ['crm.contact.updated', 'accounting.invoice.created']
        },
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await connector.apisOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectorDocsOne', () => {
    const endpoint = '/connector/connectors/{id}/docs/{doc_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {} as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example',
        docId: 'application_owner+oauth_credentials'
      } as any
      const current = await connector.connectorDocsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectorResourcesOne', () => {
    const endpoint = '/connector/connectors/{id}/resources/{resource_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: 'companies',
          name: 'Companies',
          downstream_id: 'accounts',
          downstream_name: 'Accounts',
          status: 'live',
          pagination_supported: true,
          pagination: {
            mode: 'native',
            paging_support: true,
            limit_support: true
          },
          custom_fields_supported: true,
          supported_operations: ['all', 'one', 'add', 'update', 'delete'],
          downstream_unsupported_operations: ['upload'],
          supported_filters: ['name', 'email'],
          supported_sort_by: ['updated_at', 'created_at', 'name'],
          supported_fields: [
            {
              unified_property: 'owner_id',
              child_properties: [{}]
            }
          ],
          supported_list_fields: [
            {
              unified_property: 'owner_id',
              child_properties: [{}]
            }
          ]
        },
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example',
        resourceId: 'resource_id_example'
      } as any
      const current = await connector.connectorResourcesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectorsAll', () => {
    const endpoint = '/connector/connectors'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: [
          {
            id: 'crm+salesforce',
            name: 'Salesforce',
            status: 'live',
            description: 'A description',
            icon_url:
              'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
            logo_url:
              'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
            website_url: 'https://www.salesforce.com',
            signup_url: 'https://www.salesforce.com/signup',
            partner_signup_url: 'https://www.salesforce.com/partners',
            free_trial_available: true,
            auth_type: 'oauth2',
            auth_only: true,
            blind_mapped: true,
            oauth_grant_type: 'authorization_code',
            oauth_credentials_source: 'integration',
            oauth_scopes: [
              {
                id: 'contacts:all',
                label: 'Read/write on the Contacts resource',
                default_apis: ['crm']
              }
            ],
            custom_scopes: true,
            has_sandbox_credentials: true,
            settings: [
              {
                id: 'pipeline_id',
                label: 'Pipeline',
                type: 'select'
              }
            ],
            service_id: 'close',
            unified_apis: [
              {
                id: 'crm',
                name: 'File Storage API',
                auth_only: true,
                oauth_scopes: [[Object]],
                supported_resources: [[Object]],
                downstream_unsupported_resources: ['companies'],
                supported_events: [[Object]]
              }
            ],
            supported_resources: [
              {
                id: 'companies',
                name: 'Companies',
                status: 'live',
                downstream_id: 'accounts',
                downstream_name: 'Accounts'
              }
            ],
            configurable_resources: ['leads', 'companies'],
            supported_events: [
              {
                event_type: 'employee.created',
                event_source: 'native',
                downstream_event_type: 'person_created',
                resources: ['companies'],
                entity_type: 'employee'
              }
            ],
            webhook_support: {
              mode: 'native',
              subscription_level: 'integration',
              managed_via: 'api',
              virtual_webhooks: {
                request_rate: {
                  rate: 0,
                  size: 0,
                  unit: 'second'
                },
                resources: {
                  property1: [Object],
                  property2: [Object]
                }
              }
            },
            schema_support: {
              supported: true
            },
            docs: [
              {
                id: '12345',
                name: 'connection',
                audience: 'application_owner',
                format: 'markdown',
                url: 'https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection'
              }
            ],
            tls_support: {
              type: 'string',
              description: 'string'
            }
          }
        ],
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {} as any
      const current = await connector.connectorsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectorsOne', () => {
    const endpoint = '/connector/connectors/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        data: {
          id: 'crm+salesforce',
          name: 'Salesforce',
          status: 'live',
          description: 'A description',
          icon_url:
            'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo_url:
            'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          website_url: 'https://www.salesforce.com',
          signup_url: 'https://www.salesforce.com/signup',
          partner_signup_url: 'https://www.salesforce.com/partners',
          free_trial_available: true,
          auth_type: 'oauth2',
          auth_only: true,
          blind_mapped: true,
          oauth_grant_type: 'authorization_code',
          oauth_credentials_source: 'integration',
          oauth_scopes: [
            {
              id: 'contacts:all',
              label: 'Read/write on the Contacts resource',
              default_apis: ['crm']
            }
          ],
          custom_scopes: true,
          has_sandbox_credentials: true,
          settings: [
            {
              id: 'pipeline_id',
              label: 'Pipeline',
              type: 'select'
            }
          ],
          service_id: 'close',
          unified_apis: [
            {
              id: 'crm',
              name: 'File Storage API',
              auth_only: true,
              oauth_scopes: [
                {
                  id: 'contacts:all',
                  label: 'Read/write on the Contacts resource'
                }
              ],
              supported_resources: [
                {
                  id: 'companies',
                  name: 'Companies',
                  status: 'live',
                  downstream_id: 'accounts',
                  downstream_name: 'Accounts'
                }
              ],
              downstream_unsupported_resources: ['companies'],
              supported_events: [
                {
                  event_type: 'employee.created',
                  event_source: 'native',
                  downstream_event_type: 'person_created',
                  resources: [Array],
                  entity_type: 'employee'
                }
              ]
            }
          ],
          supported_resources: [
            {
              id: 'companies',
              name: 'Companies',
              status: 'live',
              downstream_id: 'accounts',
              downstream_name: 'Accounts'
            }
          ],
          configurable_resources: ['leads', 'companies'],
          supported_events: [
            {
              event_type: 'employee.created',
              event_source: 'native',
              downstream_event_type: 'person_created',
              resources: ['companies'],
              entity_type: 'employee'
            }
          ],
          webhook_support: {
            mode: 'native',
            subscription_level: 'integration',
            managed_via: 'api',
            virtual_webhooks: {
              request_rate: {
                rate: 0,
                size: 0,
                unit: 'second'
              },
              resources: {
                property1: {
                  events: [Array]
                },
                property2: {
                  events: [Array]
                }
              }
            }
          },
          schema_support: {
            supported: true
          },
          docs: [
            {
              id: '12345',
              name: 'connection',
              audience: 'application_owner',
              format: 'markdown',
              url: 'https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection'
            }
          ],
          tls_support: {
            type: 'string',
            description: 'string'
          }
        },
        _raw: {},
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { connector } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await connector.connectorsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
