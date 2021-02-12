/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import Styles from '../Styles'

export default function APIkey(props:any) {
    return (
        <input css={Styles.input} {...props}/>
    )
}