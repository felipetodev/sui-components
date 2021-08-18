import PropTypes from 'prop-types'
import {forwardRef, useRef} from 'react'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {PinInputContextProvider} from './PinInputContext'
import {BASE_CLASSNAME, SIZES} from './config.js'

import './PinInput.scss'

const CLASSNAME = BASE_CLASSNAME

const PinInput = forwardRef(
  (
    {
      onChange,
      children,
      isOneTimeCode = true,
      size = SIZES.MEDIUM,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef()
    return (
      <div className={CLASSNAME} ref={innerRef}>
        <PinInputContextProvider
          ref={forwardedRef}
          targetRef={innerRef}
          onChange={onChange}
          size={size}
          isOneTimeCode={isOneTimeCode}
          {...props}
        >
          {children}
        </PinInputContextProvider>
      </div>
    )
  }
)

PinInput.displayName = 'PinInput'
PinInput.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZES)),
  isOneTimeCode: PropTypes.bool,
  mask: PropTypes.string,
}
export default PinInput
