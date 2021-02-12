/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react'




const Styles = {
    background: css({
        fontFamily: "'IBM Plex Sans Condensed', sans-serif",
        backgroundColor: "#222",
        height: "100vh",
        overflow: "auto",
    }),
    wrapper: css({
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "800px",
        textAlign: "center",
        // overflowY: "hidden",
    }),
    divider: css({
        color: "#fff",
        width: "95%",
        height: "0",
        border: "none",
        borderTop: "1px solid #46aaee"
    }),
    title: css({
        color: "#fff"
    }),
    text: css({
        color: "#eee",
        margin: "auto 0"
    }),
    link: css({
        color: "#46aaee",
        ":hover": {
            color: "#46ffee"
        }
    }),
    flexRow: css({
        display: "flex",
        textAlign: "left",
        justifyContent: "center",
    }),
    input: css({
        backgroundColor: "#222",
        border: "1px solid #46aaee",
        color: "#eee",
        fontSize: "15px",
        padding: "7px",
        height: "15px",
        margin: "auto 10px",
        ":hover": {
            cursor: "text",
            borderColor: "#eeffee",
        },
    }),
    select: css({
        height: "100%",
        padding: "5px",
        marginLeft: "0",
    }),
    button: css({
        backgroundColor: "transparent",
        border: "2px solid #46aaee",
        borderRadius: "50px",
        padding: "7px",
        fontSize: "15px",
        color: "#46aaee",
        ":disabled": {
            borderColor: "#444",
            color: "#444",
        },
        ":hover": {
            cursor: "pointer",
            borderColor: "#eeffee",
            color: "#eeffee",
        },
    }),
    resultTable: css({
        borderCollapse: "collapse",
        "tr, td, th": {
            border: "none",
            borderBottom: "1px solid #1f2c35",
            borderCollapse: "collapse",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "#ffffff01"
            }
        },
    }),
    tableHeader: css({
        fontSize: "18px",
        "th": {
            padding: "7px 0"
        },
    }),
    tableRow: css({
        color: "#eee",
        fontSize: "25px"
    }),
    tablePoster: css({
        padding: "0",
        "img": {
            width: "120px",
            margin: "0",
            padding: "0",
            verticalAlign: "middle"
        }
    }),
    modal: css({
        position: "absolute",
        backgroundColor: "#000000cc",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        right: "0",
        overflow: "auto"
    }),
    modalContent: css({
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
        "img": {
            height: "100%",
            margin: "20px 0",
            position: "sticky",
            top: "20px"
        },
        "div div": {
            padding: "20px",
        }
    }),
    loading: css`
        @keyframes spin {
            from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}
        }
        animation: spin 1.5s linear infinite;
        width: 75px;
        margin: 15px auto;
    `,

}

export default Styles