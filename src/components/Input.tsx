/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Styles from '../Styles'

export default function Input(props:any) {
    return (
        <input css={Styles.input} {...props}/>
    )
}