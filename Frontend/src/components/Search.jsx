

import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const Search = () => {
    const { query: routeQuery } = useParams();
    const [query, setQuery] = useState(routeQuery || "");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            if (query) {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:5000/api/items`, {
                        params: { q: query }
                    });
                    setResults(response.data);
                    setError(null);
                } catch (err) {
                    setError(err.message || 'Error fetching data');
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        };
        fetchItems();
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        params.set('query', query);
        window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
        // Manually trigger the URL change
        setQuery(query);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='px-6 py-20 lg:px-12'>
            <h1 className='py-10 text-3xl font-semibold text-center text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
            <div>
                <form onSubmit={handleSearch} className='relative flex p-4 border rounded bg-slate-300'>
                    <FaSearch className='w-5 h-5 mr-2 text-neutral-300' />
                    <input
                        className='w-full outline-none placeholder:text-[#1b2629] bg-slate-300'
                        name="query"
                        type="search"
                        placeholder="Search for recipe"
                        id="search"
                        value={query}
                        onChange={handleInputChange}
                        required
                    />
                </form>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {results.length > 0 && results.map((item) => (
                    <Card item={item} key={item._id}/>
                ))}
            </ul>
            {results.length === 0 && !loading && !error && <p>No results found.</p>}
        </div>
    );
};

export default Search;


