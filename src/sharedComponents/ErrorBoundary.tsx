import React from "react"

type State = { hasError: boolean; message?: string }
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(err: unknown): State {
    return { hasError: true, message: err instanceof Error ? err.message : String(err) }
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("💥 Error atrapado por ErrorBoundary:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section">
          <div className="container text-center">
            <h2 className="section-title">Ups… algo salió mal 😅</h2>
            <p className="text-muted">{this.state.message || "Se produjo un error inesperado."}</p>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
