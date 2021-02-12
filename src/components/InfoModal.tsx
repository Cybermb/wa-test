/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import Styles from '../Styles' 
import Button from './Button'
import loading from '../loading.png'

export default function InfoModal(props:any) {
    const info = props.specificInfo
    console.log(info)
    if (props.showModal) return <div css={Styles.modal}>
        <div css={[Styles.text, Styles.modalContent, ]}>
            {props.loading && <img css={Styles.loading} src={loading} alt={"Loading indicator"} />}

            
            <div css={Styles.flexRow}>
                {info.Poster !== "N/A" && <img style={{maxHeight: ""}} src={info.Poster} alt="poster" />}
                <div css={css({
                    padding: "20px"
                })}>
                    {Object.entries(info).map(([key, val]) => {
                        const value:any = val
                        if (key === "Poster"  || val === "N/A") return null
                        if (key === "Ratings") return <div style={{padding: 0}}>
                            <p><b>{key}:</b></p>
                            {value.map((rating:any) => {
                                return <p style={{paddingLeft: "15px"}} ><b>{rating.Source}: </b>{rating.Value}</p>
                            })}
                        </div>
                        
                        return <p><b>{key}: </b>{val}</p>
                    })}
                </div>
            </div>
            <Button text="Close" css={css({
                position: "absolute",
                top: "10px",
                right: "10px",
            })} onClick={() => {
                props.toggleModal((prev:boolean) => !prev)
            }} />
            
        </div>
    </div>
    return null
}