// eachProductView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { db } from './firebase';
import { doc, getDoc, db } from "../../data/firebase";
import ShowProducts from './showProducts';

const EachProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, "products", productId);
                const snapshot = await getDoc(productRef);
                if (snapshot.exists) {
                    const productData = snapshot.data();
                    setProduct({
                        ...productData,
                        key: snapshot.id,
                    });
                } else {
                    console.log("No product found!");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className='text-sm font-bold'>
                            <a href='/home'>
                                &lt; Back
                            </a>
                        </li>
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" />
                    </div>

                    <div className="px-4 pb-16 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ms-10">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" style={{marginBottom: '15px'}}>{product.name}</h1>
                            <h3 className='text-xl tracking-tight text-gray-900' style={{marginBottom: '10px'}}>{product.category}</h3>
                        </div>

                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="">{product.description}</h2>
                            <p className="text-3xl tracking-tight text-gray-900">${Number(product.price).toLocaleString()}</p>

                            <form className="mt-10">
                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `/chat?productId=${productId}`;
                                    }}
                                >
                                    Chat with seller
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: '150px'}}></div>
            <ShowProducts />
        </div>
    );
};

export default EachProductView;
