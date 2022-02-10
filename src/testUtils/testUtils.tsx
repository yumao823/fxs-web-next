import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

const MOCK_ROUTER: any = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isReady: true,
}

type DefaultParams = Parameters<typeof render>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> }

const renderWithProviders = (ui: RenderUI, { wrapper: optionWrapper, router, ...options }: RenderOptions = {}) => {
  const Wrapper = ({ children }) => {
    return (
      // Mock next/router. @link: https://github.com/vercel/next.js/issues/7479#issuecomment-659859682
      <RouterContext.Provider value={{ ...MOCK_ROUTER, ...router }}>{children}</RouterContext.Provider>
    )
  }

  const wrapper = optionWrapper || Wrapper

  return render(ui, { wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithProviders as render }
