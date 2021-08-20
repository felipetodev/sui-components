import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Box, Code} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'
import Button from '@s-ui/documentation-library/lib/components/Button/Button'

const ArticlePassword = ({className}) => {
  const [code, setCode] = useState('')
  const [isPassword, setIsPassword] = useState(false)

  const onChangeCodeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Password</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <Box
        outline
        style={{
          maxWidth: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button onClick={() => setIsPassword(!isPassword)}>Change</Button>
        <PinInput
          isPassword={isPassword}
          onChangeHandler={onChangeCodeHandler}
          defaultValue={code}
        />
      </Box>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input
        fields by the default true bolean prop <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticlePassword.propTypes = {
  className: PropTypes.string
}

export default ArticlePassword
