import React, { Component } from 'react';
import Videos from './Video/Videos';
import SearchBar from './Search/SearchBar';
import header from './img/frame.jpg';
import footer from './img/footer.jpg';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: null };
    }

    componentDidMount() {
        fetch('/api/devtask', {
            headers: {
                "accepts": "application/json"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ videos: result })
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    render() {
        return (
            <div className='container'>
                <header>
                    <img src={header} />
                </header>
                <main>
                    <SearchBar />
                    <Videos videos={this.state.videos} />
                </main>
                <footer>
                    <img src={footer} />
                </footer>
            </div>
        );
    }
}

export default App;