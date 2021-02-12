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
}