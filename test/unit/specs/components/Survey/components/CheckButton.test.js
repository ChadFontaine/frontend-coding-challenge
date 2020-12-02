import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper
  let label
  const testMethod = jest.fn()

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false,
        id: 'whatever',
        onCheckToggle: testMethod
      }
    })
    label = wrapper.find('label')
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toBe('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(label.classes()).not.toContain('check-button--selected')
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', async () => {
    await wrapper.setProps({ selected: true })
    expect(label.classes()).toContain('check-button--selected')
  })

  it('should attach the dynamic "check-button--disabled" class when then the disabled prop is set to true', async () => {
    await wrapper.setProps({ disabled: true })
    expect(label.classes()).toContain('check-button--disabled')
  })

  it('should call the method with the value when triggered ', async () => {
    const input = wrapper.find('input[type="checkbox"]')
    await input.setChecked()
    expect(wrapper.emitted().handleToggle).toBeTruthy()
    expect(wrapper.emitted().handleToggle).toEqual([['dummy-value']])
  })
})
