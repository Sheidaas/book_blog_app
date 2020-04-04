import React, { Component } from 'react';

class ErrorHandler extends Component{

    render = () => {
        let errors = Object.keys(this.props.errors).map( (error) => (
                <>
                    <p> {error} : {this.props.errors[error][0]} </p>
                </>
            ));

        return (
          <>
              {errors}
          </>
        );
    }
}

export default ErrorHandler