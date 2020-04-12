import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                border: this.props.logo.borderThickness + "pt solid " + this.props.logo.borderColor,
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt",
                width: "auto"
            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace