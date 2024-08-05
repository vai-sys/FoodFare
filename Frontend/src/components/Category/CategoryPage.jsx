

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
import Card from '../Card';

const CategoryPage = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://foodfare.onrender.com/api/categories/${category}`);
                setItems(response.data);
            } catch (err) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [category]);

    return (
        <div className='px-6 py-20 lg:px-12'>
            <h1 className='py-10 text-3xl font-semibold text-center capitalize text-secondary sm:leading-relaxed'>
                {category}
            </h1>
            <CategoryWrapper />
            {loading && (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            {error && <p className='text-red-500'>{error}</p>}
            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {items && items.map(item => (
                    <Card item={item} key={item._id} />
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;

