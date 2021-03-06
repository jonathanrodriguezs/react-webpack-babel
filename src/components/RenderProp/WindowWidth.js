import React from "react"

class WindowWidth extends React.Component {
  state = { width: 0 }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", ({ target }) =>
      this.setState({ width: target.innerWidth })
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize")
  }

  render() {
    return this.props.children(this.state.width)
  }
}

export default WindowWidth
