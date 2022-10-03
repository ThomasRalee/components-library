import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import Button from './../assets/components/Button.vue'

describe('Button component', () => {
  describe('size classes renders correctly', () => {
    test.concurrent('for default size button', () => {
      const { container } = render(Button)

      expect(
        container.getElementsByClassName('py-2 text-sm h-8 max-h-8').length
      ).toEqual(1)
    })

    test.concurrent('with md prop', () => {
      const { container } = render(Button, { props: { md: true } })

      expect(
        container.getElementsByClassName('py-3 text-base h-10 max-h-10').length
      ).toEqual(1)
    })

    test.concurrent('with lg prop', () => {
      const { container } = render(Button, { props: { lg: true } })

      expect(
        container.getElementsByClassName('py-4 text-base h-12 max-h-12').length
      ).toEqual(1)
    })

    test.concurrent('with xl prop', () => {
      const { container } = render(Button, { props: { xl: true } })

      expect(
        container.getElementsByClassName('py-4 text-xl h-[52px] max-h-[52px]')
          .length
      ).toEqual(1)
    })
  })

  describe('spinner renders correctly', () => {
    test.concurrent('with isLoading prop true', () => {
      const { container } = render(Button, { props: { isLoading: true } })

      expect(container.getElementsByClassName('spinner').length).toEqual(1)
    })

    test.concurrent('with isLoading prop false', () => {
      const { container } = render(Button, { props: { isLoading: false } })

      expect(container.getElementsByClassName('spinner').length).toEqual(0)
    })
  })

  describe('disabled class renders correctly', () => {
    test.concurrent('with disabled prop true', () => {
      const { container } = render(Button, {
        props: { disabled: true }
      })

      expect(
        container.getElementsByClassName(
          'bg-opacity-50 text-opacity-50 cursor-not-allowed'
        ).length
      ).toEqual(1)
    })

    test.concurrent('with disabled prop false', () => {
      const { container } = render(Button, {
        props: { disabled: false }
      })

      expect(
        container.getElementsByClassName(
          'hover:bg-opacity-90 hover:text-opacity-90'
        ).length
      ).toEqual(1)
    })
  })
})
