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

describe('PosApi', () => {
  describe('#itemsAdd', () => {
    const endpoint = '/pos/items'

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
        service: 'square',
        resource: 'Items',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
          tax_ids: ['12345', '67890'],
          absent_at_location_ids: ['12345', '67890'],
          present_at_all_locations: false,
          sku: '11910345',
          code: '11910345',
          categories: [
            {
              id: '12345',
              name: 'Food',
              image_ids: ['12345', '67890']
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
              ordinal: 0,
              pricing_type: 'fixed',
              price_amount: 10,
              price_currency: 'USD',
              image_ids: ['12345', '67890']
            }
          ],
          available: true,
          hidden: true,
          deleted: true
        }
      } as any
      const current = await pos.itemsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#itemsAll', () => {
    const endpoint = '/pos/items'

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
        service: 'square',
        resource: 'Items',
        operation: 'one',
        data: [
          {
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
            tax_ids: ['12345', '67890'],
            absent_at_location_ids: ['12345', '67890'],
            present_at_all_locations: false,
            sku: '11910345',
            code: '11910345',
            categories: [
              {
                id: '12345',
                name: 'Food',
                image_ids: ['12345', '67890']
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
                ordinal: 0,
                pricing_type: 'fixed',
                price_amount: 10,
                price_currency: 'USD',
                image_ids: ['12345', '67890']
              }
            ],
            available: true,
            hidden: true,
            version: '12345',
            deleted: true,
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.itemsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#itemsDelete', () => {
    const endpoint = '/pos/items/{id}'

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
        service: 'square',
        resource: 'Items',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.itemsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#itemsOne', () => {
    const endpoint = '/pos/items/{id}'

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
        service: 'square',
        resource: 'Items',
        operation: 'one',
        data: {
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
          tax_ids: ['12345', '67890'],
          absent_at_location_ids: ['12345', '67890'],
          present_at_all_locations: false,
          sku: '11910345',
          code: '11910345',
          categories: [
            {
              id: '12345',
              name: 'Food',
              image_ids: ['12345', '67890']
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
              ordinal: 0,
              pricing_type: 'fixed',
              price_amount: 10,
              price_currency: 'USD',
              image_ids: ['12345', '67890']
            }
          ],
          available: true,
          hidden: true,
          version: '12345',
          deleted: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.itemsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#itemsUpdate', () => {
    const endpoint = '/pos/items/{id}'

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
        service: 'square',
        resource: 'Items',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
          tax_ids: ['12345', '67890'],
          absent_at_location_ids: ['12345', '67890'],
          present_at_all_locations: false,
          sku: '11910345',
          code: '11910345',
          categories: [
            {
              id: '12345',
              name: 'Food',
              image_ids: ['12345', '67890']
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
              ordinal: 0,
              pricing_type: 'fixed',
              price_amount: 10,
              price_currency: 'USD',
              image_ids: ['12345', '67890']
            }
          ],
          available: true,
          hidden: true,
          deleted: true
        }
      } as any
      const current = await pos.itemsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsAdd', () => {
    const endpoint = '/pos/locations'

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
        service: 'square',
        resource: 'Locations',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
      } as any
      const current = await pos.locationsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsAll', () => {
    const endpoint = '/pos/locations'

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
        service: 'square',
        resource: 'Locations',
        operation: 'one',
        data: [
          {
            id: '12345',
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
            currency: 'USD',
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.locationsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsDelete', () => {
    const endpoint = '/pos/locations/{id}'

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
        service: 'square',
        resource: 'Locations',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.locationsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsOne', () => {
    const endpoint = '/pos/locations/{id}'

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
        service: 'square',
        resource: 'Locations',
        operation: 'one',
        data: {
          id: '12345',
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
          currency: 'USD',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.locationsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsUpdate', () => {
    const endpoint = '/pos/locations/{id}'

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
        service: 'square',
        resource: 'Locations',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
      } as any
      const current = await pos.locationsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#merchantsAdd', () => {
    const endpoint = '/pos/merchants'

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
        service: 'square',
        resource: 'Merchants',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
          language: 'EN',
          currency: 'USD'
        }
      } as any
      const current = await pos.merchantsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#merchantsAll', () => {
    const endpoint = '/pos/merchants'

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
        service: 'square',
        resource: 'Merchants',
        operation: 'one',
        data: [
          {
            id: '12345',
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
            language: 'EN',
            currency: 'USD',
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.merchantsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#merchantsDelete', () => {
    const endpoint = '/pos/merchants/{id}'

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
        service: 'square',
        resource: 'Merchants',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.merchantsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#merchantsOne', () => {
    const endpoint = '/pos/merchants/{id}'

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
        service: 'square',
        resource: 'Merchants',
        operation: 'one',
        data: {
          id: '12345',
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
          language: 'EN',
          currency: 'USD',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.merchantsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#merchantsUpdate', () => {
    const endpoint = '/pos/merchants/{id}'

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
        service: 'square',
        resource: 'Merchants',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
          language: 'EN',
          currency: 'USD'
        }
      } as any
      const current = await pos.merchantsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifierGroupsAdd', () => {
    const endpoint = '/pos/modifier-groups'

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
        service: 'square',
        resource: 'ModifierGroups',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        modifierGroup: {
          name: 'Modifier',
          alternate_name: 'Modifier New',
          minimum_required: 1,
          maximum_allowed: 5,
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
          row_version: '1-12345'
        }
      } as any
      const current = await pos.modifierGroupsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifierGroupsAll', () => {
    const endpoint = '/pos/modifier-groups'

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
        service: 'square',
        resource: 'ModifierGroups',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'Modifier',
            alternate_name: 'Modifier New',
            minimum_required: 1,
            maximum_allowed: 5,
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
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.modifierGroupsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifierGroupsDelete', () => {
    const endpoint = '/pos/modifier-groups/{id}'

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
        service: 'square',
        resource: 'ModifierGroups',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.modifierGroupsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifierGroupsOne', () => {
    const endpoint = '/pos/modifier-groups/{id}'

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
        service: 'square',
        resource: 'ModifierGroups',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Modifier',
          alternate_name: 'Modifier New',
          minimum_required: 1,
          maximum_allowed: 5,
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
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.modifierGroupsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifierGroupsUpdate', () => {
    const endpoint = '/pos/modifier-groups/{id}'

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
        service: 'square',
        resource: 'ModifierGroups',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example',
        modifierGroup: {
          name: 'Modifier',
          alternate_name: 'Modifier New',
          minimum_required: 1,
          maximum_allowed: 5,
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
          row_version: '1-12345'
        }
      } as any
      const current = await pos.modifierGroupsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifiersAdd', () => {
    const endpoint = '/pos/modifiers'

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
        service: 'square',
        resource: 'Modifiers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        modifier: {
          name: 'Modifier',
          alternate_name: 'Modifier New',
          price_amount: 10,
          currency: 'USD',
          modifier_group_id: ['123'],
          available: true
        }
      } as any
      const current = await pos.modifiersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifiersAll', () => {
    const endpoint = '/pos/modifiers'

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
        service: 'square',
        resource: 'Modifiers',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'Modifier',
            alternate_name: 'Modifier New',
            price_amount: 10,
            currency: 'USD',
            modifier_group_id: ['123'],
            available: true,
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.modifiersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifiersDelete', () => {
    const endpoint = '/pos/modifiers/{id}'

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
        service: 'square',
        resource: 'Modifiers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.modifiersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifiersOne', () => {
    const endpoint = '/pos/modifiers/{id}'

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
        service: 'square',
        resource: 'Modifiers',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Modifier',
          alternate_name: 'Modifier New',
          price_amount: 10,
          currency: 'USD',
          modifier_group_id: ['123'],
          available: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.modifiersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#modifiersUpdate', () => {
    const endpoint = '/pos/modifiers/{id}'

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
        service: 'square',
        resource: 'Modifiers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example',
        modifier: {
          name: 'Modifier',
          alternate_name: 'Modifier New',
          price_amount: 10,
          currency: 'USD',
          modifier_group_id: ['123'],
          available: true
        }
      } as any
      const current = await pos.modifiersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#orderTypesAdd', () => {
    const endpoint = '/pos/order-types'

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
        service: 'clover',
        resource: 'OrderTypes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        orderType: {
          name: 'Default order type',
          default: true
        }
      } as any
      const current = await pos.orderTypesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#orderTypesAll', () => {
    const endpoint = '/pos/order-types'

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
        service: 'clover',
        resource: 'OrderTypes',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'Default order type',
            default: true,
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.orderTypesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#orderTypesDelete', () => {
    const endpoint = '/pos/order-types/{id}'

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
        service: 'clover',
        resource: 'OrderTypes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.orderTypesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#orderTypesOne', () => {
    const endpoint = '/pos/order-types/{id}'

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
        service: 'clover',
        resource: 'OrderTypes',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Default order type',
          default: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.orderTypesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#orderTypesUpdate', () => {
    const endpoint = '/pos/order-types/{id}'

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
        service: 'clover',
        resource: 'OrderTypes',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example',
        orderType: {
          name: 'Default order type',
          default: true
        }
      } as any
      const current = await pos.orderTypesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersAdd', () => {
    const endpoint = '/pos/orders'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        order: {
          order_number: '1F',
          order_date: '2022-08-12',
          closed_date: '2022-08-13',
          reference_id: 'my-order-001',
          status: 'open',
          state: 'open',
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
          total_amount: 27.5,
          total_tip: 7,
          total_tax: 2.75,
          total_discount: 3,
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
              type: 'fixed_percentage',
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
                fingerprint:
                  ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
      } as any
      const current = await pos.ordersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersAll', () => {
    const endpoint = '/pos/orders'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: [
          {
            id: '12345',
            order_number: '1F',
            order_date: '2022-08-12',
            closed_date: '2022-08-13',
            reference_id: 'my-order-001',
            status: 'open',
            state: 'open',
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
            total_amount: 27.5,
            total_tip: 7,
            total_tax: 2.75,
            total_discount: 3,
            total_refund: 0,
            total_service_charge: 0,
            refunded: false,
            customers: [
              {
                first_name: 'Elon',
                middle_name: 'D.',
                last_name: 'Musk',
                phone_numbers: [[Object]],
                emails: [[Object]]
              }
            ],
            fulfillments: [
              {
                id: '12345',
                status: 'proposed',
                type: 'shipment',
                pickup_details: {
                  accepted_at: '2020-09-30T07:43:32.000Z',
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
                  curbside_pickup_details: [Object],
                  recipient: [Object]
                },
                shipment_details: {}
              }
            ],
            line_items: [
              {
                id: '12345',
                name: 'New York Strip Steak',
                item: {
                  id: '12345'
                },
                total_tax: 2000,
                total_discount: 3000,
                total_amount: 27500,
                quantity: 1,
                unit_price: 27500.5,
                applied_taxes: [[Object]],
                applied_discounts: [[Object]],
                modifiers: [[Object]]
              }
            ],
            payments: [
              {
                id: '12345',
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
                type: 'auto_gratuity'
              }
            ],
            refunds: [
              {
                id: '12345',
                location_id: '12345',
                amount: 27500,
                currency: 'USD',
                reason: 'The reason for the refund being issued.',
                status: 'pending',
                tender_id: '12345',
                transaction_id: '12345'
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
                id: '12345',
                product_id: '12345',
                name: '10% off',
                type: 'fixed_percentage',
                amount: 27500,
                currency: 'USD',
                scope: 'order'
              }
            ],
            tenders: [
              {
                id: '12345',
                name: '10% off',
                type: 'cash',
                note: 'An optional note associated with the tender at the time of payment.',
                amount: 27500,
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
                  id: '12345',
                  bin: '41111',
                  card_brand: 'visa',
                  card_type: 'credit',
                  prepaid_type: 'prepaid',
                  cardholder_name: 'John Doe',
                  customer_id: '12345',
                  merchant_id: '12345',
                  exp_month: 1,
                  exp_year: 2022,
                  fingerprint:
                    ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
                  last_4: 'The last 4 digits of the card number.',
                  enabled: true,
                  billing_address: [Object],
                  reference_id: 'card-001',
                  version: '230320320320'
                },
                card_status: 'authorized',
                card_entry_method: 'swiped',
                payment_id: '12345',
                location_id: '12345',
                transaction_id: '12345'
              }
            ],
            source: 'api',
            voided: false,
            voided_at: '2020-09-30T07:43:32.000Z',
            version: '230320320320',
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.ordersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersDelete', () => {
    const endpoint = '/pos/orders/{id}'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.ordersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersOne', () => {
    const endpoint = '/pos/orders/{id}'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: {
          id: '12345',
          order_number: '1F',
          order_date: '2022-08-12',
          closed_date: '2022-08-13',
          reference_id: 'my-order-001',
          status: 'open',
          state: 'open',
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
          total_amount: 27.5,
          total_tip: 7,
          total_tax: 2.75,
          total_discount: 3,
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
                accepted_at: '2020-09-30T07:43:32.000Z',
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
              id: '12345',
              name: 'New York Strip Steak',
              item: {
                id: '12345'
              },
              total_tax: 2000,
              total_discount: 3000,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              applied_taxes: [
                {
                  id: '12345',
                  tax_id: 'sales-tax',
                  amount: 27500,
                  currency: 'USD'
                }
              ],
              applied_discounts: [
                {
                  id: '12345',
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
              id: '12345',
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
              type: 'auto_gratuity'
            }
          ],
          refunds: [
            {
              id: '12345',
              location_id: '12345',
              amount: 27500,
              currency: 'USD',
              reason: 'The reason for the refund being issued.',
              status: 'pending',
              tender_id: '12345',
              transaction_id: '12345'
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
              id: '12345',
              product_id: '12345',
              name: '10% off',
              type: 'fixed_percentage',
              amount: 27500,
              currency: 'USD',
              scope: 'order'
            }
          ],
          tenders: [
            {
              id: '12345',
              name: '10% off',
              type: 'cash',
              note: 'An optional note associated with the tender at the time of payment.',
              amount: 27500,
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
                id: '12345',
                bin: '41111',
                card_brand: 'visa',
                card_type: 'credit',
                prepaid_type: 'prepaid',
                cardholder_name: 'John Doe',
                customer_id: '12345',
                merchant_id: '12345',
                exp_month: 1,
                exp_year: 2022,
                fingerprint:
                  ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
              card_entry_method: 'swiped',
              payment_id: '12345',
              location_id: '12345',
              transaction_id: '12345'
            }
          ],
          source: 'api',
          voided: false,
          voided_at: '2020-09-30T07:43:32.000Z',
          version: '230320320320',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.ordersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersPay', () => {
    const endpoint = '/pos/orders/{id}/pay'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example',
        order: {
          order_number: '1F',
          order_date: '2022-08-12',
          closed_date: '2022-08-13',
          reference_id: 'my-order-001',
          status: 'open',
          state: 'open',
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
          total_amount: 27.5,
          total_tip: 7,
          total_tax: 2.75,
          total_discount: 3,
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
              type: 'fixed_percentage',
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
                fingerprint:
                  ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
      } as any
      const current = await pos.ordersPay(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersUpdate', () => {
    const endpoint = '/pos/orders/{id}'

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
        service: 'clover',
        resource: 'Orders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example',
        order: {
          order_number: '1F',
          order_date: '2022-08-12',
          closed_date: '2022-08-13',
          reference_id: 'my-order-001',
          status: 'open',
          state: 'open',
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
          total_amount: 27.5,
          total_tip: 7,
          total_tax: 2.75,
          total_discount: 3,
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
              type: 'fixed_percentage',
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
                fingerprint:
                  ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
      } as any
      const current = await pos.ordersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsAdd', () => {
    const endpoint = '/pos/payments'

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
        service: 'square',
        resource: 'PosPayments',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
              fingerprint:
                ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
              type: 'auto_gratuity'
            }
          ]
        }
      } as any
      const current = await pos.paymentsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsAll', () => {
    const endpoint = '/pos/payments'

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
        service: 'square',
        resource: 'PosPayments',
        operation: 'one',
        data: [
          {
            id: '12345',
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
                id: '12345',
                bin: '41111',
                card_brand: 'visa',
                card_type: 'credit',
                prepaid_type: 'prepaid',
                cardholder_name: 'John Doe',
                customer_id: '12345',
                merchant_id: '12345',
                exp_month: 1,
                exp_year: 2022,
                fingerprint:
                  ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
                type: 'auto_gratuity'
              }
            ],
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.paymentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsDelete', () => {
    const endpoint = '/pos/payments/{id}'

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
        service: 'square',
        resource: 'PosPayments',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.paymentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsOne', () => {
    const endpoint = '/pos/payments/{id}'

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
        service: 'square',
        resource: 'PosPayments',
        operation: 'one',
        data: {
          id: '12345',
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
              id: '12345',
              bin: '41111',
              card_brand: 'visa',
              card_type: 'credit',
              prepaid_type: 'prepaid',
              cardholder_name: 'John Doe',
              customer_id: '12345',
              merchant_id: '12345',
              exp_month: 1,
              exp_year: 2022,
              fingerprint:
                ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
              type: 'auto_gratuity'
            }
          ],
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.paymentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsUpdate', () => {
    const endpoint = '/pos/payments/{id}'

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
        service: 'square',
        resource: 'PosPayments',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
              fingerprint:
                ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
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
              type: 'auto_gratuity'
            }
          ]
        }
      } as any
      const current = await pos.paymentsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#tendersAdd', () => {
    const endpoint = '/pos/tenders'

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
        service: 'clover',
        resource: 'Tenders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
      } as any
      const current = await pos.tendersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#tendersAll', () => {
    const endpoint = '/pos/tenders'

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
        service: 'clover',
        resource: 'Tenders',
        operation: 'one',
        data: [
          {
            id: '12345',
            key: 'com.clover.tender.cash',
            label: 'Cash',
            active: true,
            hidden: true,
            editable: true,
            opens_cash_drawer: true,
            allows_tipping: true,
            updated_by: '12345',
            created_by: '12345',
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

      const { pos } = apideck
      const params = {} as any
      const current = await pos.tendersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#tendersDelete', () => {
    const endpoint = '/pos/tenders/{id}'

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
        service: 'clover',
        resource: 'Tenders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.tendersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#tendersOne', () => {
    const endpoint = '/pos/tenders/{id}'

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
        service: 'clover',
        resource: 'Tenders',
        operation: 'one',
        data: {
          id: '12345',
          key: 'com.clover.tender.cash',
          label: 'Cash',
          active: true,
          hidden: true,
          editable: true,
          opens_cash_drawer: true,
          allows_tipping: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await pos.tendersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#tendersUpdate', () => {
    const endpoint = '/pos/tenders/{id}'

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
        service: 'clover',
        resource: 'Tenders',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { pos } = apideck
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
      } as any
      const current = await pos.tendersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
