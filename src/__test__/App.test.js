import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('Pruebas en <App />', () => {
  test('debe renderizar el componente correctamente', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
