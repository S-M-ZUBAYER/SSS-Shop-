import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import History from '../History/History';
import Review from '../Review/Review';

const Home = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/categories')

            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setCategories(data);
                setLoading(false)
            });

    }, [])

    const url = `http://localhost:5000/newProducts`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const advertiseProducts = products;

    return (
        <div>
            <Banner></Banner>
            {
                advertiseProducts.length > 0 && <Advertise
                    advertiseProducts={advertiseProducts}
                ></Advertise>
            }

            <Review></Review>
            <History></History>

        </div>
    );
};

export default Home;