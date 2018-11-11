import React from 'react';

export class User extends React.Component {
    name = this.props.name;
    render() {
        return (
            <p>Name: {this.name}</p>
        )
    }
}

User.propTypes = {
    name: React.propTypes.int
}