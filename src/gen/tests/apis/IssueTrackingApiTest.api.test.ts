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

describe('IssueTrackingApi', () => {
  describe('#collectionTagsAll', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tags'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'User Experience',
            custom_mappings: {}
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

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.collectionTagsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketCommentsAdd', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example',
        ticketId: 'ticket_id_example',
        ticketComment: {
          body: 'What internet provider do you use?',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await issueTracking.ticketCommentsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketCommentsAll', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'all',
        data: [
          {
            id: '12345',
            body: 'What internet provider do you use?',
            custom_mappings: {},
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example',
        ticketId: 'ticket_id_example'
      } as any
      const current = await issueTracking.ticketCommentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketCommentsDelete', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments/{id}'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        id: 'id_example',
        collectionId: 'collection_id_example',
        ticketId: 'ticket_id_example'
      } as any
      const current = await issueTracking.ticketCommentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketCommentsOne', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments/{id}'

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
        service: 'sage-hr',
        resource: 'Tickets',
        operation: 'one',
        data: {
          id: '12345',
          body: 'What internet provider do you use?',
          custom_mappings: {},
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        id: 'id_example',
        collectionId: 'collection_id_example',
        ticketId: 'ticket_id_example'
      } as any
      const current = await issueTracking.ticketCommentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketCommentsUpdate', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}/comments/{id}'

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
        service: 'github',
        resource: 'Tickets',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        id: 'id_example',
        collectionId: 'collection_id_example',
        ticketId: 'ticket_id_example',
        ticketComment: {
          body: 'What internet provider do you use?',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await issueTracking.ticketCommentsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketsAdd', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example',
        ticket: {
          parent_id: '12345',
          type: 'Technical',
          subject: 'Technical Support Request',
          description: 'I am facing issues with my internet connection',
          status: 'open',
          priority: 'high',
          assignees: [
            {
              id: '12345'
            }
          ],
          due_date: '2020-09-30T07:43:32.000Z',
          tags: [
            {
              id: '12345'
            }
          ],
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await issueTracking.ticketsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketsAll', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'all',
        data: [
          {
            id: '12345',
            parent_id: '12345',
            collection_id: '12345',
            type: 'Technical',
            subject: 'Technical Support Request',
            description: 'I am facing issues with my internet connection',
            status: 'open',
            priority: 'high',
            assignees: [
              {
                id: '12345',
                username: 'Cocoa'
              }
            ],
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            created_by: '12345',
            due_date: '2020-09-30T07:43:32.000Z',
            completed_at: '2020-09-30T07:43:32.000Z',
            tags: [
              {
                id: '12345',
                name: 'User Experience',
                custom_mappings: {}
              }
            ],
            custom_mappings: {},
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.ticketsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketsDelete', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        ticketId: 'ticket_id_example',
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.ticketsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketsOne', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}'

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
        service: 'sage-hr',
        resource: 'Tickets',
        operation: 'one',
        data: {
          id: '12345',
          parent_id: '12345',
          collection_id: '12345',
          type: 'Technical',
          subject: 'Technical Support Request',
          description: 'I am facing issues with my internet connection',
          status: 'open',
          priority: 'high',
          assignees: [
            {
              id: '12345',
              username: 'Cocoa'
            }
          ],
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          created_by: '12345',
          due_date: '2020-09-30T07:43:32.000Z',
          completed_at: '2020-09-30T07:43:32.000Z',
          tags: [
            {
              id: '12345',
              name: 'User Experience',
              custom_mappings: {}
            }
          ],
          custom_mappings: {},
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        ticketId: 'ticket_id_example',
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.ticketsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ticketsUpdate', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/tickets/{ticket_id}'

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
        service: 'github',
        resource: 'Tickets',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        ticketId: 'ticket_id_example',
        collectionId: 'collection_id_example',
        ticket: {
          parent_id: '12345',
          type: 'Technical',
          subject: 'Technical Support Request',
          description: 'I am facing issues with my internet connection',
          status: 'open',
          priority: 'high',
          assignees: [
            {
              id: '12345'
            }
          ],
          due_date: '2020-09-30T07:43:32.000Z',
          tags: [
            {
              id: '12345'
            }
          ],
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await issueTracking.ticketsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#collectionUsersAll', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/users'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'Elon Musk',
            first_name: 'Elon',
            last_name: 'Musk',
            email: 'elon@musk.com',
            photo_url: 'https://unavatar.io/elon-musk',
            custom_mappings: {},
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
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

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.collectionUsersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#collectionUsersOne', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}/users/{id}'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          email: 'elon@musk.com',
          photo_url: 'https://unavatar.io/elon-musk',
          custom_mappings: {},
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example',
        id: 'id_example'
      } as any
      const current = await issueTracking.collectionUsersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#collectionsAll', () => {
    const endpoint = '/issue-tracking/collections'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'all',
        data: [
          {
            id: '12345',
            parent_id: '12345',
            type: 'Technical',
            name: 'Main IT Issues',
            description: 'IT Issues',
            custom_mappings: {},
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
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

      const { issueTracking } = apideck
      const params = {} as any
      const current = await issueTracking.collectionsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#collectionsOne', () => {
    const endpoint = '/issue-tracking/collections/{collection_id}'

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
        service: 'jira',
        resource: 'Tickets',
        operation: 'one',
        data: {
          id: '12345',
          parent_id: '12345',
          type: 'Technical',
          name: 'Main IT Issues',
          description: 'IT Issues',
          custom_mappings: {},
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { issueTracking } = apideck
      const params = {
        collectionId: 'collection_id_example'
      } as any
      const current = await issueTracking.collectionsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
