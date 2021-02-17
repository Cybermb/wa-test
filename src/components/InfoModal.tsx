/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Styles from '../Styles' 
import Button from './Button'
import loadingPNG from '../loading.png'
import { useDispatch, useSelector } from 'react-redux'

const InfoModal = () => {
    const modalInfoID = useSelector((state:any) => state.modalInfoID)
    const specificInfo = useSelector((state:any) => state.specificInfo)
    const info = specificInfo[modalInfoID]
    const showModal = useSelector((state:any) => state.showModal)
    const loading = useSelector((state:any) => state.loading)
    const dispatch = useDispatch()
    if (showModal) return <div css={Styles.modal}>
        <div css={[Styles.text, Styles.modalContent, ]}>
            {loading && <img css={Styles.loading} src={loadingPNG} alt={"Loading indicator"} />}
            {info && <div css={Styles.flexRow}>
                {info.Poster && info.Poster !== ("N/A") && <img style={{maxHeight: ""}} src={info.Poster} alt="poster" />}
                <div css={css({
                    padding: "20px"
                })}>
                    {Object.entries(info).map(([key, val]) => {
                        const value:any = val
                        if (key === "Poster"  || val === "N/A") return null
                        if (key === "Ratings") return <div key={key} style={{padding: 0}}>
                            <p><b>{key}:</b></p>
                            {value.map((rating:any, index:number) => {
                                return <p key={index} style={{paddingLeft: "15px"}} ><b>{rating.Source}: </b>{rating.Value}</p>
                            })}
                        </div>
                        
                        return <p key={key}><b>{key}: </b>{val}</p>
                    })}
                </div>
            </div>}
            <Button text="Close" css={css({
                position: "absolute",
                top: "10px",
                right: "10px",
            })} onClick={() => {
                dispatch({type: "toggleModal"})
            }} />
            
        </div>
    </div>
    return null
}

export default InfoModal