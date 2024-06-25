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

describe('EcommerceApi', () => {
  describe('#customersAll', () => {
    const endpoint = '/ecommerce/customers'

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
        service: 'shopify',
        resource: 'customers',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'John Doe',
            first_name: 'John',
            last_name: 'Doe',
            company_name: 'Acme Inc.',
            status: 'active',
            currency: 'USD',
            emails: [
              {
                id: '123',
                email: 'elon@musk.com',
                type: 'primary'
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
                type: 'billing',
                id: '12345',
                line1: 'Main street',
                line2: 'apt #',
                city: 'Anytown',
                state: 'Ohio',
                postal_code: '12345',
                country: 'US'
              }
            ],
            orders: [
              {
                id: '12345',
                total: '199.99',
                status: 'active'
              }
            ],
            custom_mappings: {},
            created_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2020-09-30T07:43:32.000Z'
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

      const { ecommerce } = apideck
      const params = {} as any
      const current = await ecommerce.customersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersOne', () => {
    const endpoint = '/ecommerce/customers/{id}'

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
        service: 'shopify',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345',
          name: 'John Doe',
          first_name: 'John',
          last_name: 'Doe',
          company_name: 'Acme Inc.',
          status: 'active',
          currency: 'USD',
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
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
              type: 'billing',
              id: '12345',
              line1: 'Main street',
              line2: 'apt #',
              city: 'Anytown',
              state: 'Ohio',
              postal_code: '12345',
              country: 'US'
            }
          ],
          orders: [
            {
              id: '12345',
              total: '199.99',
              status: 'active'
            }
          ],
          custom_mappings: {},
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ecommerce } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ecommerce.customersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersAll', () => {
    const endpoint = '/ecommerce/orders'

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
        service: 'shopify',
        resource: 'orders',
        operation: 'all',
        data: [
          {
            id: '12345',
            order_number: '123456789',
            currency: 'USD',
            discounts: [
              {
                code: 'SUMMER20',
                amount: '5.99',
                percentage: '0.1'
              }
            ],
            sub_total: '45.17',
            shipping_cost: '5.17',
            coupon_discount: '5.5',
            total_discount: '5.5',
            total_tax: '5.16',
            total_amount: '50.17',
            refunded_amount: '5.5',
            status: 'active',
            payment_status: 'paid',
            fulfillment_status: 'shipped',
            payment_method: 'credit_card',
            customer: {
              id: '12345',
              name: 'John Doe',
              first_name: 'John',
              last_name: 'Doe',
              company_name: 'Acme Inc.',
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
            },
            billing_address: {
              line1: '123 Main Street',
              line2: 'Apt 1',
              company_name: 'Acme Inc.',
              city: 'New York',
              state: 'NY',
              postal_code: '10001',
              country: 'US'
            },
            shipping_address: {
              line1: '123 Main Street',
              line2: 'Apt 1',
              company_name: 'Acme Inc.',
              city: 'New York',
              state: 'NY',
              postal_code: '10001',
              country: 'US'
            },
            tracking: [
              {
                provider: 'UPS',
                number: '1Z9999999999999999',
                url: 'https://www.ups.com/track?tracknum=1Z9999999999999999',
                updated_at: '2020-09-30T07:43:32.000Z'
              }
            ],
            line_items: [
              {
                id: '12345',
                product_id: 'def456',
                variant_id: 'ghi789',
                sku: 'MBP123-16GB-SILVER-13',
                name: 'Midnight 16inch MacBook Pro',
                description:
                  'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
                options: [[Object]],
                quantity: '2',
                unit_price: '19.99',
                tax_rate: '0.08',
                tax_amount: '1.6',
                is_refunded: false,
                refunded_amount: '0',
                refunded_quantity: '0',
                sub_total: '43.18',
                total_amount: '43.18',
                discounts: [[Object]]
              }
            ],
            note: 'Special instructions for delivery',
            custom_mappings: {},
            created_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2020-09-30T07:43:32.000Z'
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

      const { ecommerce } = apideck
      const params = {} as any
      const current = await ecommerce.ordersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ordersOne', () => {
    const endpoint = '/ecommerce/orders/{id}'

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
        service: 'shopify',
        resource: 'orders',
        operation: 'one',
        data: {
          id: '12345',
          order_number: '123456789',
          currency: 'USD',
          discounts: [
            {
              code: 'SUMMER20',
              amount: '5.99',
              percentage: '0.1'
            }
          ],
          sub_total: '45.17',
          shipping_cost: '5.17',
          coupon_discount: '5.5',
          total_discount: '5.5',
          total_tax: '5.16',
          total_amount: '50.17',
          refunded_amount: '5.5',
          status: 'active',
          payment_status: 'paid',
          fulfillment_status: 'shipped',
          payment_method: 'credit_card',
          customer: {
            id: '12345',
            name: 'John Doe',
            first_name: 'John',
            last_name: 'Doe',
            company_name: 'Acme Inc.',
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
          },
          billing_address: {
            line1: '123 Main Street',
            line2: 'Apt 1',
            company_name: 'Acme Inc.',
            city: 'New York',
            state: 'NY',
            postal_code: '10001',
            country: 'US'
          },
          shipping_address: {
            line1: '123 Main Street',
            line2: 'Apt 1',
            company_name: 'Acme Inc.',
            city: 'New York',
            state: 'NY',
            postal_code: '10001',
            country: 'US'
          },
          tracking: [
            {
              provider: 'UPS',
              number: '1Z9999999999999999',
              url: 'https://www.ups.com/track?tracknum=1Z9999999999999999',
              updated_at: '2020-09-30T07:43:32.000Z'
            }
          ],
          line_items: [
            {
              id: '12345',
              product_id: 'def456',
              variant_id: 'ghi789',
              sku: 'MBP123-16GB-SILVER-13',
              name: 'Midnight 16inch MacBook Pro',
              description:
                'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
              options: [
                {
                  id: 'jkl012',
                  name: 'Color',
                  value: 'Silver'
                }
              ],
              quantity: '2',
              unit_price: '19.99',
              tax_rate: '0.08',
              tax_amount: '1.6',
              is_refunded: false,
              refunded_amount: '0',
              refunded_quantity: '0',
              sub_total: '43.18',
              total_amount: '43.18',
              discounts: [
                {
                  code: 'SUMMER20',
                  amount: '5.99',
                  percentage: '0.1'
                }
              ]
            }
          ],
          note: 'Special instructions for delivery',
          custom_mappings: {},
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ecommerce } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ecommerce.ordersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#productsAll', () => {
    const endpoint = '/ecommerce/products'

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
        service: 'shopify',
        resource: 'products',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'MacBook Pro',
            description:
              'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
            status: 'active',
            price: '1999.99',
            sku: 'MBP123',
            inventory_quantity: '10',
            images: [
              {
                id: '12345',
                url: 'https://example.com/macbook-pro.jpg'
              }
            ],
            weight: '1.25',
            weight_unit: 'lb',
            options: [
              {
                id: '1',
                name: 'Color',
                values: ['Red']
              }
            ],
            variants: [
              {
                id: '1',
                name: 'Midnight 16inch MacBook Pro',
                price: '1999.99',
                sku: 'MBP123-16GB-SILVER-13',
                inventory_quantity: '5',
                weight: '1.25',
                weight_unit: 'lb',
                options: [[Object]],
                images: [[Object]]
              }
            ],
            tags: ['Apple'],
            categories: [
              {
                id: '12345',
                name: 'Laptops'
              }
            ],
            custom_mappings: {},
            created_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2020-09-30T07:43:32.000Z'
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

      const { ecommerce } = apideck
      const params = {} as any
      const current = await ecommerce.productsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#productsOne', () => {
    const endpoint = '/ecommerce/products/{id}'

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
        service: 'shopify',
        resource: 'products',
        operation: 'one',
        data: {
          id: '12345',
          name: 'MacBook Pro',
          description:
            'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
          status: 'active',
          price: '1999.99',
          sku: 'MBP123',
          inventory_quantity: '10',
          images: [
            {
              id: '12345',
              url: 'https://example.com/macbook-pro.jpg'
            }
          ],
          weight: '1.25',
          weight_unit: 'lb',
          options: [
            {
              id: '1',
              name: 'Color',
              values: ['Red']
            }
          ],
          variants: [
            {
              id: '1',
              name: 'Midnight 16inch MacBook Pro',
              price: '1999.99',
              sku: 'MBP123-16GB-SILVER-13',
              inventory_quantity: '5',
              weight: '1.25',
              weight_unit: 'lb',
              options: [
                {
                  id: '1',
                  name: 'Color',
                  value: 'Silver'
                }
              ],
              images: [
                {
                  id: '12345',
                  url: 'https://example.com/macbook-pro.jpg'
                }
              ]
            }
          ],
          tags: ['Apple'],
          categories: [
            {
              id: '12345',
              name: 'Laptops'
            }
          ],
          custom_mappings: {},
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ecommerce } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ecommerce.productsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#storesOne', () => {
    const endpoint = '/ecommerce/store'

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
        service: 'shopify',
        resource: 'stores',
        operation: 'one',
        data: {
          id: '12345',
          name: 'My Store',
          store_url: 'https://mybrand.com/shop',
          admin_url: 'https://mybrand.com/admin',
          custom_mappings: {},
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ecommerce } = apideck
      const params = {} as any
      const current = await ecommerce.storesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})
