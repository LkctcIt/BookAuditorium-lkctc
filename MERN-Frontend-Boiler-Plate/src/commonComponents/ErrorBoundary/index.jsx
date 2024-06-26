import React from "react"
import Error500 from "pages/Error/500"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null, path: "" }
    }

    componentDidUpdate() {
        if (window.location?.pathname !== this.state.path && this.state.error) {
            this.setState({ error: null, errorInfo: null, path: "" })
        }
    }

    componentDidCatch(error, errorInfo) {
        error = {
            error: error,
            errorInfo: errorInfo,
            path: window.location?.pathname,
        }
        this.setState()
        console.error("Error info: ", error)
    }

    render() {
        if (this.state.errorInfo) return <Error500 />
        return this.props.children
    }
}

export default ErrorBoundary
