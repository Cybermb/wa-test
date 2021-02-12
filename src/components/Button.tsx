<<<<<<< HEAD
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Styles from '../Styles'

export default function Button(props:any) {
    return (
        <button css={Styles.button} {...props} >
            {props.text}
        </button>
    )
=======
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Styles from '../Styles'

export default function Button(props:any) {
    return (
        <button css={Styles.button} {...props} >
            {props.text}
        </button>
    )
>>>>>>> eea5b45c90cab6652fed72848d7f67e8f5077ff3
}