/**
 * Created by esthom on 25.10.2016.
 */
import React from 'react';

const ErrorHandler = ({msg}) => (
  <div className={msg==='' ? 'error-hidden' : 'error' }>
    <p>{msg}</p>
  </div>
);

export default ErrorHandler;
