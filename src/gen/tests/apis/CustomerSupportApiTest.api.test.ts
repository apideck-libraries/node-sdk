import fetch from 'node-fetch'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('CustomerSupportApi', () => {
  describe('#customersAdd', () => {
    const endpoint = '/customer-support/customers'

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
        service: 'kustomer',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { customerSupport } = apideck
      const params = {
        customer: {
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
          status: 'active'
        }
      } as any
      const current = await customerSupport.customersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersAll', () => {
    const endpoint = '/customer-support/customers'

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
        service: 'kustomer',
        resource: 'customers',
        operation: 'one',
        data: [
          {
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
            status: 'active',
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

      const { customerSupport } = apideck
      const params = {} as any
      const current = await customerSupport.customersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersDelete', () => {
    const endpoint = '/customer-support/customers/{id}'

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
        service: 'kustomer',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { customerSupport } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await customerSupport.customersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersOne', () => {
    const endpoint = '/customer-support/customers/{id}'

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
        service: 'kustomer',
        resource: 'customers',
        operation: 'one',
        data: {
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
          status: 'active',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { customerSupport } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await customerSupport.customersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersUpdate', () => {
    const endpoint = '/customer-support/customers/{id}'

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
        service: 'kustomer',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { customerSupport } = apideck
      const params = {
        id: 'id_example',
        customer: {
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
          status: 'active'
        }
      } as any
      const current = await customerSupport.customersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
