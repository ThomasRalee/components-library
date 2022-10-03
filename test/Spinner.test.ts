import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import Spinner from './../assets/components/Spinner.vue'

describe('Spinner component', () => {
  describe('size classes renders correctly', () => {
    test.concurrent('for default size button', () => {
      const { container } = render(Spinner)

      expect(
        container.getElementsByClassName('w-6 h-6 border-4').length
      ).toEqual(1)
    })

    test.concurrent('with md prop', () => {
      const { container } = render(Spinner, { props: { sm: true } })

      expect(
        container.getElementsByClassName('w-4 h-4 border-4').length
      ).toEqual(1)
    })

    test.concurrent('with lg prop', () => {
      const { container } = render(Spinner, { props: { lg: true } })

      expect(
        container.getElementsByClassName('w-8 h-8 border-[6px]').length
      ).toEqual(1)
    })

    test.concurrent('with xl prop', () => {
      const { container } = render(Spinner, { props: { xl: true } })

      expect(
        container.getElementsByClassName('w-12 h-12 border-8').length
      ).toEqual(1)
    })
  })
})
