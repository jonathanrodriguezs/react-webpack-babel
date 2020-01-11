import React, { Component } from "react"

export default class ErrorHandler extends Component {
  state = {
    error: false,
    info: ""
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    if (this.state.info) {
      const { componentStack } = this.state.info
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          <summary>Component crashed. Reloading page.</summary>
          <p>{componentStack}</p>
        </details>
      )
    }
    return this.props.children
  }
}
