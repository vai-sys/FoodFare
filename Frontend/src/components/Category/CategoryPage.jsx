import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';

const CategoryPage = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);
            setError(null); // Reset error before fetching
            try {
                const response = await axios.get(`http://localhost:5000/api/categories/${category}`);
                setItems(response.data);
            } catch (err) {
                setError(err.message || "Error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData(); // Invoke the fetch function
    }, [category]);

    return (
        <div className='px-6 py-20 lg:px-12'>
            <h1 className='py-10 text-3xl font-semibold text-center capitalize text-secondary sm:leading-relaxed'>
                {category}
            </h1>
            <CategoryWrapper />
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <ul>
                {items && items.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CategoryWrapper from './CategoryWrapper';
// import axios from 'axios';

// const CategoryPage = () => {
//     const { category } = useParams();
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCategoryData = async () => {
//             setLoading(true);
//             setError(null); // Reset error before fetching
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/categories/:${category}`);
//                 setItems(response.data);
//             } catch (err) {
//                 setError(err.message || "Error occurred");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategoryData(); // Invoke the fetch function
//     }, [category]);

//     return (
//         <div className='px-6 py-20 lg:px-12'>
//             <h1 className='py-10 text-3xl font-semibold text-center capitalize text-secondary sm:leading-relaxed'>
//                 {category}
//             </h1>
//             <CategoryWrapper />
//             {loading && <p>Loading...</p>}
//             {error && <p className='text-red-500'>{error}</p>}
//             <ul>
//                 {items && items.map(item => (
//                     <li key={item._id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryPage;
