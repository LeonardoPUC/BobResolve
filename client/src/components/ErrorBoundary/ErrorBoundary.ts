import React from 'react'

// interface ErrorBoundaryState {
//   error: Error | null;
//   errorInfo: React.ErrorInfo | null;
// }

// class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { error: null, errorInfo: null };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//     });
//   }

//   render() {
//     if (this.state.errorInfo) {
//       return ({this.state.error?.message})
//     }
//     return this.props.children
//   }
// }

// export default ErrorBoundary