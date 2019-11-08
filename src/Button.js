import React from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

const createClipPath = (width, height, corner) => `polygon(0 ${corner}px, ${corner}px 0, ${width - corner}px 0, ${width}px ${corner}px, ${width}px ${height - corner}px, ${width - corner}px ${height}px, ${corner}px ${height}px, 0 ${height - corner}px)`

const useStyles = createUseStyles({
    buttonWrap: {
        backgroundColor: "#444",
        height: props => props.height + 8,
        width: props => props.width + 8,
        border: 'none',
        margin: 8,
        clipPath: props => createClipPath(props.width + 8, props.height + 8, props.corner + 2),
        outline: 'none',
        '&:active': {
            backgroundColor: '#fff'
        }
    },

    button: {
        backgroundColor: "#000",
        height: props => props.height,
        width: props => props.width,
        border: 'none',
        marginTop: 0,
        marginLeft: -2,
        clipPath: props => createClipPath(props.width, props.height, props.corner)
    },
    text: {
        color: '#fff',
        fontSize: '1.5em',
        userSelect: 'none',
        padding: props => props.height * 0.5 - 10,
    }
})

export function Button(props) {
    const styles = useStyles(Object.assign({}, {
        width: 160,
        height: 40,
        corner: 8
    }, props))

    return (
        <div className="App">
            <button className={styles.buttonWrap}>
                <div className={styles.button}>
                    <div className={styles.text}>Button</div>
                </div>
            </button>
        </div>
    );
}