import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn());

import {
  Apideck,
  Configuration
} from '../../../';

import {
  DefaultApi
}from '../../';

const basePath = 'https://example.com'

const methodResponse = {
  'All': {
    status: 'OK',
    data: []
  }
}

describe('DefaultApi', () => {

  describe('#logsAll', () => {
    const endpoint = '/webhook/logs'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: [
    {
      id: '1234',
      description: 'This is a webhook. It listens to connection events',
      status: 'enabled',
      url: 'https://example.com/my/webhook/endpoint',
      updated_at: '2020-09-30T07:43:32.000Z',
      created_at: '2020-09-30T07:43:32.000Z',
      events: [
        'vault.connection.created',
        'vault.connection.updated'
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

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {} as any
      const current = await .logsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('#webhooksAdd', () => {
    const endpoint = '/webhook/webhooks'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: {
    id: '1234',
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    updated_at: '2020-09-30T07:43:32.000Z',
    created_at: '2020-09-30T07:43:32.000Z',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {
  webhook: {
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any
      const current = await .webhooksAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('#webhooksAll', () => {
    const endpoint = '/webhook/webhooks'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: [
    {
      id: '1234',
      description: 'This is a webhook. It listens to connection events',
      status: 'enabled',
      url: 'https://example.com/my/webhook/endpoint',
      updated_at: '2020-09-30T07:43:32.000Z',
      created_at: '2020-09-30T07:43:32.000Z',
      events: [
        'vault.connection.created',
        'vault.connection.updated'
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

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {} as any
      const current = await .webhooksAll(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('#webhooksDelete', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: {
    id: '1234',
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    updated_at: '2020-09-30T07:43:32.000Z',
    created_at: '2020-09-30T07:43:32.000Z',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {
  id: 'id_example'
} as any
      const current = await .webhooksDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('#webhooksOne', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: {
    id: '1234',
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    updated_at: '2020-09-30T07:43:32.000Z',
    created_at: '2020-09-30T07:43:32.000Z',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {
  id: 'id_example'
} as any
      const current = await .webhooksOne(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('#webhooksUpdate', () => {
    const endpoint = '/webhook/webhooks/{id}'

    const config = {
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID'
}
    const apideck = new Apideck({...config, basePath: basePath})

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
  status_code: 200,
  status: 'OK',
  data: {
    id: '1234',
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    updated_at: '2020-09-30T07:43:32.000Z',
    created_at: '2020-09-30T07:43:32.000Z',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(mockedResponse))));

      const { _default } = apideck;
      const params = {
  id: 'id_example',
  webhook: {
    description: 'This is a webhook. It listens to connection events',
    status: 'enabled',
    url: 'https://example.com/my/webhook/endpoint',
    events: [
      'vault.connection.created',
      'vault.connection.updated'
    ]
  }
} as any
      const current = await .webhooksUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
