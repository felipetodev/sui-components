/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('atom/popover', () => {
  const Component = AtomPopover
  const setup = setupEnvironment(Component)

  // https://github.com/SUI-Components/sui-components/issues/1546
  it.skip('should render without crashing', () => {
    // Given
    const props = {
      id: 'random-id',
      children: <span>test</span>,
      content: <span>content</span>
    }

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  // https://github.com/SUI-Components/sui-components/issues/1546
  it.skip('should NOT render null', () => {
    // Given
    const props = {
      id: 'random-id',
      children: <span>test</span>,
      content: <span>content</span>
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it.skip('example', () => {
    // Example TO BE DELETED!!!!

    // Given
    // const props = {}

    // When
    // const {getByRole} = setup(props)

    // Then
    // expect(getByRole('button')).to.have.text('HOLA')
    expect(true).to.be.eql(false)
  })
})