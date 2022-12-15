import React, { useState } from 'react';

const ErrorBoundry = (props) => {
  const [hasError, setHasError] = useState(false);

  // componentDidCatch(error, info) {
  //   setHasError(false);
  // }

    if (hasError) {
      return <h1>Ooops! Something went wrong!</h1>
    }
    return props.children;
}

export default ErrorBoundry;