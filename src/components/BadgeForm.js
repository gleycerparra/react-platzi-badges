import React from 'react';

class BadgeForm extends React.Component {

    handleClick = e => {
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" />
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>

                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm;