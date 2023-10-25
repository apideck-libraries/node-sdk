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

describe('VaultApi', () => {
  describe('#connectionSettingsAll', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}/{resource}/config'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
          service_id: 'salesforce',
          name: 'Salesforce',
          tag_line:
            'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
          unified_api: 'crm',
          state: 'authorized',
          integration_state: 'configured',
          auth_type: 'oauth2',
          oauth_grant_type: 'authorization_code',
          status: 'live',
          enabled: true,
          website: 'https://www.salesforce.com',
          icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          authorize_url:
            'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          revoke_url:
            'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          form_fields: [
            {
              id: 'instance_url',
              label: 'Instance url',
              value: 'https://eu28.salesforce.com',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: false
            },
            {
              id: 'api_key',
              label: 'API Key',
              value: '123455677',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: true
            }
          ],
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  target: 'custom_fields',
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
          resource_schema_support: ['leads'],
          resource_settings_support: ['leads'],
          validation_support: true,
          schema_support: true,
          settings_required_for_authorization: ['client_id', 'client_secret'],
          subscriptions: [
            {
              downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
              unify_event_types: ['crm.contact.created'],
              downstream_event_types: ['contacts.CREATED'],
              execute_url:
                'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
              created_at: '2020-10-01T12:00:00.000Z'
            }
          ],
          has_guide: true,
          created_at: 1615563533390,
          custom_mappings: [
            {
              id: 'hris+employees+first_aid_training',
              label: 'First Aid Training',
              description: 'First Aid Training completed after 2019-01-01',
              value: '$.root.training.first_aid',
              key: 'first_aid_training',
              required: false,
              custom_field: true,
              consumer_id: 'test_user_id'
            }
          ],
          updated_at: 1616662325753
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        unifiedApi: 'crm',
        serviceId: 'pipedrive',
        resource: 'leads'
      } as any
      const current = await vault.connectionSettingsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionSettingsUpdate', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}/{resource}/config'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
          service_id: 'salesforce',
          name: 'Salesforce',
          tag_line:
            'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
          unified_api: 'crm',
          state: 'authorized',
          integration_state: 'configured',
          auth_type: 'oauth2',
          oauth_grant_type: 'authorization_code',
          status: 'live',
          enabled: true,
          website: 'https://www.salesforce.com',
          icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          authorize_url:
            'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          revoke_url:
            'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          form_fields: [
            {
              id: 'instance_url',
              label: 'Instance url',
              value: 'https://eu28.salesforce.com',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: false
            },
            {
              id: 'api_key',
              label: 'API Key',
              value: '123455677',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: true
            }
          ],
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  target: 'custom_fields',
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
          resource_schema_support: ['leads'],
          resource_settings_support: ['leads'],
          validation_support: true,
          schema_support: true,
          settings_required_for_authorization: ['client_id', 'client_secret'],
          subscriptions: [
            {
              downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
              unify_event_types: ['crm.contact.created'],
              downstream_event_types: ['contacts.CREATED'],
              execute_url:
                'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
              created_at: '2020-10-01T12:00:00.000Z'
            }
          ],
          has_guide: true,
          created_at: 1615563533390,
          custom_mappings: [
            {
              id: 'hris+employees+first_aid_training',
              label: 'First Aid Training',
              description: 'First Aid Training completed after 2019-01-01',
              value: '$.root.training.first_aid',
              key: 'first_aid_training',
              required: false,
              custom_field: true,
              consumer_id: 'test_user_id'
            }
          ],
          updated_at: 1616662325753
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        serviceId: 'pipedrive',
        unifiedApi: 'crm',
        resource: 'leads',
        connection: {
          enabled: true,
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          custom_mappings: [
            {
              value: '$.root.training.first_aid'
            }
          ]
        }
      } as any
      const current = await vault.connectionSettingsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionsAll', () => {
    const endpoint = '/vault/connections'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
            service_id: 'salesforce',
            name: 'Salesforce',
            tag_line:
              'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
            unified_api: 'crm',
            state: 'authorized',
            integration_state: 'configured',
            auth_type: 'oauth2',
            oauth_grant_type: 'authorization_code',
            status: 'live',
            enabled: true,
            website: 'https://www.salesforce.com',
            icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
            logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
            authorize_url:
              'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
            revoke_url:
              'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
            settings: {
              instance_url: 'https://eu28.salesforce.com',
              api_key: '12345xxxxxx'
            },
            metadata: {
              account: {
                name: 'My Company',
                id: 'c01458a5-7276-41ce-bc19-639906b0450a'
              },
              plan: 'enterprise'
            },
            form_fields: [
              {
                id: 'instance_url',
                label: 'Instance url',
                value: 'https://eu28.salesforce.com',
                placeholder: '',
                mask: false,
                type: 'text',
                required: true,
                disabled: false,
                custom_field: false,
                sensitive: false
              },
              {
                id: 'api_key',
                label: 'API Key',
                value: '123455677',
                placeholder: '',
                mask: false,
                type: 'text',
                required: true,
                disabled: false,
                custom_field: false,
                sensitive: true
              }
            ],
            configuration: [
              {
                resource: 'leads',
                defaults: [[Object]]
              }
            ],
            configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
            resource_schema_support: ['leads'],
            resource_settings_support: ['leads'],
            validation_support: true,
            schema_support: true,
            settings_required_for_authorization: ['client_id', 'client_secret'],
            subscriptions: [
              {
                downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
                unify_event_types: ['crm.contact.created'],
                downstream_event_types: ['contacts.CREATED'],
                execute_url:
                  'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
                created_at: '2020-10-01T12:00:00.000Z'
              }
            ],
            has_guide: true,
            created_at: 1615563533390,
            custom_mappings: [
              {
                id: 'hris+employees+first_aid_training',
                label: 'First Aid Training',
                description: 'First Aid Training completed after 2019-01-01',
                value: '$.root.training.first_aid',
                key: 'first_aid_training',
                required: false,
                custom_field: true,
                consumer_id: 'test_user_id'
              }
            ],
            updated_at: 1616662325753
          }
        ]
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {} as any
      const current = await vault.connectionsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionsDelete', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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

      const { vault } = apideck
      const params = {
        serviceId: 'pipedrive',
        unifiedApi: 'crm'
      } as any
      const current = await vault.connectionsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionsImport', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}/import'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 201,
        status: 'OK',
        data: {
          id: 'crm+salesforce',
          service_id: 'salesforce',
          name: 'Salesforce',
          tag_line:
            'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
          unified_api: 'crm',
          state: 'authorized',
          integration_state: 'configured',
          auth_type: 'oauth2',
          oauth_grant_type: 'authorization_code',
          status: 'live',
          enabled: true,
          website: 'https://www.salesforce.com',
          icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          authorize_url:
            'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          revoke_url:
            'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          form_fields: [
            {
              id: 'instance_url',
              label: 'Instance url',
              value: 'https://eu28.salesforce.com',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: false
            },
            {
              id: 'api_key',
              label: 'API Key',
              value: '123455677',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: true
            }
          ],
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  target: 'custom_fields',
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
          resource_schema_support: ['leads'],
          resource_settings_support: ['leads'],
          validation_support: true,
          schema_support: true,
          settings_required_for_authorization: ['client_id', 'client_secret'],
          subscriptions: [
            {
              downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
              unify_event_types: ['crm.contact.created'],
              downstream_event_types: ['contacts.CREATED'],
              execute_url:
                'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
              created_at: '2020-10-01T12:00:00.000Z'
            }
          ],
          has_guide: true,
          created_at: 1615563533390,
          custom_mappings: [
            {
              id: 'hris+employees+first_aid_training',
              label: 'First Aid Training',
              description: 'First Aid Training completed after 2019-01-01',
              value: '$.root.training.first_aid',
              key: 'first_aid_training',
              required: false,
              custom_field: true,
              consumer_id: 'test_user_id'
            }
          ],
          updated_at: 1616662325753
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        serviceId: 'pipedrive',
        unifiedApi: 'crm',
        connection: {
          credentials: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            refresh_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ'
          },
          settings: {
            instance_url: 'https://eu28.salesforce.com'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          }
        }
      } as any
      const current = await vault.connectionsImport(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionsOne', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
          service_id: 'salesforce',
          name: 'Salesforce',
          tag_line:
            'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
          unified_api: 'crm',
          state: 'authorized',
          integration_state: 'configured',
          auth_type: 'oauth2',
          oauth_grant_type: 'authorization_code',
          status: 'live',
          enabled: true,
          website: 'https://www.salesforce.com',
          icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          authorize_url:
            'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          revoke_url:
            'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          form_fields: [
            {
              id: 'instance_url',
              label: 'Instance url',
              value: 'https://eu28.salesforce.com',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: false
            },
            {
              id: 'api_key',
              label: 'API Key',
              value: '123455677',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: true
            }
          ],
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  target: 'custom_fields',
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
          resource_schema_support: ['leads'],
          resource_settings_support: ['leads'],
          validation_support: true,
          schema_support: true,
          settings_required_for_authorization: ['client_id', 'client_secret'],
          subscriptions: [
            {
              downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
              unify_event_types: ['crm.contact.created'],
              downstream_event_types: ['contacts.CREATED'],
              execute_url:
                'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
              created_at: '2020-10-01T12:00:00.000Z'
            }
          ],
          has_guide: true,
          created_at: 1615563533390,
          custom_mappings: [
            {
              id: 'hris+employees+first_aid_training',
              label: 'First Aid Training',
              description: 'First Aid Training completed after 2019-01-01',
              value: '$.root.training.first_aid',
              key: 'first_aid_training',
              required: false,
              custom_field: true,
              consumer_id: 'test_user_id'
            }
          ],
          updated_at: 1616662325753
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        serviceId: 'pipedrive',
        unifiedApi: 'crm'
      } as any
      const current = await vault.connectionsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#connectionsUpdate', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
          service_id: 'salesforce',
          name: 'Salesforce',
          tag_line:
            'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
          unified_api: 'crm',
          state: 'authorized',
          integration_state: 'configured',
          auth_type: 'oauth2',
          oauth_grant_type: 'authorization_code',
          status: 'live',
          enabled: true,
          website: 'https://www.salesforce.com',
          icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
          logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
          authorize_url:
            'https://unify.apideck.com/vault/authorize/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          revoke_url:
            'https://unify.apideck.com/vault/revoke/salesforce/&lt;application-id&gt;?state=&lt;state&gt;',
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          form_fields: [
            {
              id: 'instance_url',
              label: 'Instance url',
              value: 'https://eu28.salesforce.com',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: false
            },
            {
              id: 'api_key',
              label: 'API Key',
              value: '123455677',
              placeholder: '',
              mask: false,
              type: 'text',
              required: true,
              disabled: false,
              custom_field: false,
              sensitive: true
            }
          ],
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  target: 'custom_fields',
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          configurable_resources: ['opportunities', 'companies', 'contacts', 'leads'],
          resource_schema_support: ['leads'],
          resource_settings_support: ['leads'],
          validation_support: true,
          schema_support: true,
          settings_required_for_authorization: ['client_id', 'client_secret'],
          subscriptions: [
            {
              downstream_id: '5f5f5f5f5f5f5f5f5f5f5f5f',
              unify_event_types: ['crm.contact.created'],
              downstream_event_types: ['contacts.CREATED'],
              execute_url:
                'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
              created_at: '2020-10-01T12:00:00.000Z'
            }
          ],
          has_guide: true,
          created_at: 1615563533390,
          custom_mappings: [
            {
              id: 'hris+employees+first_aid_training',
              label: 'First Aid Training',
              description: 'First Aid Training completed after 2019-01-01',
              value: '$.root.training.first_aid',
              key: 'first_aid_training',
              required: false,
              custom_field: true,
              consumer_id: 'test_user_id'
            }
          ],
          updated_at: 1616662325753
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        serviceId: 'pipedrive',
        unifiedApi: 'crm',
        connection: {
          enabled: true,
          settings: {
            instance_url: 'https://eu28.salesforce.com',
            api_key: '12345xxxxxx'
          },
          metadata: {
            account: {
              name: 'My Company',
              id: 'c01458a5-7276-41ce-bc19-639906b0450a'
            },
            plan: 'enterprise'
          },
          configuration: [
            {
              resource: 'leads',
              defaults: [
                {
                  id: 'ProductInterest',
                  options: [Array],
                  value: 'GC5000 series'
                }
              ]
            }
          ],
          custom_mappings: [
            {
              value: '$.root.training.first_aid'
            }
          ]
        }
      } as any
      const current = await vault.connectionsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumerRequestCountsAll', () => {
    const endpoint = '/vault/consumers/{consumer_id}/stats'

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
          application_id: '1111',
          consumer_id: 'test_user_id',
          start_datetime: '2021-05-01T12:00:00.000Z',
          end_datetime: '2021-05-10T12:00:00.000Z',
          aggregated_request_count: 40,
          request_counts: {
            unify: 100,
            proxy: 10,
            vault: 21
          }
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        consumerId: 'test_user_id',
        startDatetime: '2021-05-01T12:00:00.000Z',
        endDatetime: '2021-05-30T12:00:00.000Z'
      } as any
      const current = await vault.consumerRequestCountsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumersAdd', () => {
    const endpoint = '/vault/consumers'

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
          consumer_id: 'test_consumer_id',
          application_id: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
          metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          },
          connections: [
            {
              id: '1111+test_user_id',
              name: 'Salesforce',
              icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
              logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
              website: 'https://www.salesforce.com',
              tag_line:
                'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
              service_id: 'teamleader',
              unified_api: 'crm',
              consumer_id: 'test_user_id',
              auth_type: 'oauth2',
              enabled: true,
              settings: {
                instance_url: 'https://eu28.salesforce.com'
              },
              metadata: {
                account: {
                  name: 'My Company',
                  id: 'c01458a5-7276-41ce-bc19-639906b0450a'
                },
                plan: 'enterprise'
              },
              created_at: '2020-09-19T12:18:37.071Z',
              updated_at: '2020-09-19T12:18:37.071Z',
              state: 'authorized'
            }
          ],
          services: ['salesforce', 'stripe'],
          aggregated_request_count: 101,
          request_counts: {
            unify: 100,
            proxy: 10,
            vault: 21
          },
          created: '2021-05-07T12:55:42.242Z',
          modified: '2021-05-07T12:55:42.242Z',
          request_count_updated: '2021-05-07T12:55:42.242Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        consumer: {
          consumer_id: 'test_consumer_id',
          metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          }
        }
      } as any
      const current = await vault.consumersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumersAll', () => {
    const endpoint = '/vault/consumers'

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
            consumer_id: 'test_consumer_id',
            application_id: '1111',
            metadata: {
              account_name: 'SpaceX',
              user_name: 'Elon Musk',
              email: 'elon@musk.com',
              image: 'https://www.spacex.com/static/images/share.jpg'
            },
            aggregated_request_count: 101,
            request_counts: {
              unify: 100,
              proxy: 10,
              vault: 21
            },
            created: '2021-05-07T12:55:42.242Z',
            modified: '2021-05-07T12:55:42.242Z',
            request_count_updated: '2021-05-07T12:55:42.242Z',
            services: ['salesforce', 'stripe']
          }
        ],
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

      const { vault } = apideck
      const params = {} as any
      const current = await vault.consumersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumersDelete', () => {
    const endpoint = '/vault/consumers/{consumer_id}'

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
          consumer_id: 'test_consumer_id'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        consumerId: 'test_user_id'
      } as any
      const current = await vault.consumersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumersOne', () => {
    const endpoint = '/vault/consumers/{consumer_id}'

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
          consumer_id: 'test_consumer_id',
          application_id: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
          metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          },
          connections: [
            {
              id: '1111+test_user_id',
              name: 'Salesforce',
              icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
              logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
              website: 'https://www.salesforce.com',
              tag_line:
                'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
              service_id: 'teamleader',
              unified_api: 'crm',
              consumer_id: 'test_user_id',
              auth_type: 'oauth2',
              enabled: true,
              settings: {
                instance_url: 'https://eu28.salesforce.com'
              },
              metadata: {
                account: {
                  name: 'My Company',
                  id: 'c01458a5-7276-41ce-bc19-639906b0450a'
                },
                plan: 'enterprise'
              },
              created_at: '2020-09-19T12:18:37.071Z',
              updated_at: '2020-09-19T12:18:37.071Z',
              state: 'authorized'
            }
          ],
          services: ['salesforce', 'stripe'],
          aggregated_request_count: 101,
          request_counts: {
            unify: 100,
            proxy: 10,
            vault: 21
          },
          created: '2021-05-07T12:55:42.242Z',
          modified: '2021-05-07T12:55:42.242Z',
          request_count_updated: '2021-05-07T12:55:42.242Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        consumerId: 'test_user_id'
      } as any
      const current = await vault.consumersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#consumersUpdate', () => {
    const endpoint = '/vault/consumers/{consumer_id}'

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
          consumer_id: 'test_consumer_id',
          application_id: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
          metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          },
          connections: [
            {
              id: '1111+test_user_id',
              name: 'Salesforce',
              icon: 'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
              logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
              website: 'https://www.salesforce.com',
              tag_line:
                'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
              service_id: 'teamleader',
              unified_api: 'crm',
              consumer_id: 'test_user_id',
              auth_type: 'oauth2',
              enabled: true,
              settings: {
                instance_url: 'https://eu28.salesforce.com'
              },
              metadata: {
                account: {
                  name: 'My Company',
                  id: 'c01458a5-7276-41ce-bc19-639906b0450a'
                },
                plan: 'enterprise'
              },
              created_at: '2020-09-19T12:18:37.071Z',
              updated_at: '2020-09-19T12:18:37.071Z',
              state: 'authorized'
            }
          ],
          services: ['salesforce', 'stripe'],
          aggregated_request_count: 101,
          request_counts: {
            unify: 100,
            proxy: 10,
            vault: 21
          },
          created: '2021-05-07T12:55:42.242Z',
          modified: '2021-05-07T12:55:42.242Z',
          request_count_updated: '2021-05-07T12:55:42.242Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        consumerId: 'test_user_id',
        consumer: {
          metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          }
        }
      } as any
      const current = await vault.consumersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customFieldsAll', () => {
    const endpoint = '/vault/connections/{unified_api}/{service_id}/{resource}/custom-fields'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
            id: '123456',
            name: 'SSN',
            description: 'Employee Level',
            value: '495172776',
            finder: 'string'
          }
        ]
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        unifiedApi: 'crm',
        serviceId: 'pipedrive',
        resource: 'leads'
      } as any
      const current = await vault.customFieldsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#logsAll', () => {
    const endpoint = '/vault/logs'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
            api_style: 'REST',
            base_url: 'unify.apideck.com',
            child_request: false,
            consumer_id: 'test-consumer',
            duration: 2220.379304,
            error_message: 'Refresh token is invalid',
            execution: 2248,
            has_children: false,
            http_method: 'GET',
            id: '0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f',
            latency: '27.620695999999953===',
            operation: {
              id: 'connectionsAll',
              name: 'Get All Connections'
            },
            parent_id: '0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f',
            path: '/vault/connections',
            sandbox: false,
            service: {
              id: 'apideck-vault',
              name: 'Apideck Vault'
            },
            source_ip: '94.227.131.238',
            status_code: 200,
            success: true,
            timestamp: '2021-07-12T14:26:17.420Z',
            unified_api: 'vault'
          }
        ],
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

      const { vault } = apideck
      const params = {} as any
      const current = await vault.logsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sessionsCreate', () => {
    const endpoint = '/vault/sessions'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
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
          session_uri:
            'http://vault.apideck.com/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj',
          session_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { vault } = apideck
      const params = {
        session: {
          consumer_metadata: {
            account_name: 'SpaceX',
            user_name: 'Elon Musk',
            email: 'elon@musk.com',
            image: 'https://www.spacex.com/static/images/share.jpg'
          },
          redirect_uri: 'https://mysaas.com/dashboard',
          settings: {
            unified_apis: ['crm'],
            hide_resource_settings: false,
            sandbox_mode: false,
            isolation_mode: false,
            session_length: '30m',
            show_logs: true,
            show_suggestions: false,
            show_sidebar: true,
            auto_redirect: false,
            hide_guides: false,
            allow_actions: ['delete']
          },
          theme: {
            favicon: 'https://res.cloudinary.com/apideck/icons/intercom',
            logo: 'https://res.cloudinary.com/apideck/icons/intercom',
            primary_color: '#286efa',
            sidepanel_background_color: '#286efa',
            sidepanel_text_color: '#FFFFFF',
            vault_name: 'Intercom',
            privacy_url: 'https://compliance.apideck.com/privacy-policy',
            terms_url: 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e'
          },
          custom_consumer_settings: {
            feature_flag_1: true,
            tax_rates: [
              {
                id: '6',
                label: '6%'
              },
              {
                id: '21',
                label: '21%'
              }
            ]
          }
        }
      } as any
      const current = await vault.sessionsCreate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
