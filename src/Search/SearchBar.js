import React from 'react'
import '../css/core.scss'
import './SearchBar.scss'

function SearchBar() {
    return (
        <div className="search_container">
            <form className="search" data-search="" action="/search" method="get">
                <div className="row" id="remote">
                    <div className="columns">
                        <span className="twitter-typeahead">
                            <input className="typeahead columns searchbox tt-hint" type="text" readOnly="" autoComplete="off" spellCheck="false" tabIndex="-1" dir="ltr" />
                            <input className="typeahead columns searchbox tt-input" name="q" required="" type="text" placeholder="Search for videos" autoComplete="off" spellCheck="false" dir="auto" />
                            <pre aria-hidden="true">
                            </pre>
                            <div className="tt-menu">
                                <div className="tt-dataset tt-dataset-search-results">
                                </div>
                            </div>
                        </span>
                    </div>
                    <button className="shrink columns searchbox_button" type="submit">
                        <span>
                            Search
                        </span>
                        <i className="fa fa-search">
                        </i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;