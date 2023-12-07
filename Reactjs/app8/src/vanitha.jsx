import React, { Component } from 'react';

class GoogleSearchBar extends Component {
    state = {
        query: '',
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // redirect to google search results
        window.location.href = https://www.google.com/search?q=${this.state.query};
    };

    onInputChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    render() {
        return (
            <div className="google-search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Search Google or type a URL"
                        value={this.state.query}
                        onChange={this.onInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default GoogleSearchBar;