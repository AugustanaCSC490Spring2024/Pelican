import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../data/firebase';
import { doc, getDoc } from "firebase/firestore";
import { StarIcon } from '@heroicons/react/20/solid'

//temporary 
const reviews = { href: '#', average: 4, totalCount: 117 }

const EachProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); 

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
          })
          console.log("Product data:", productData);
          return productData;
        } else {
          console.log("No product found!");
          return null;
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
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
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
      

        {/* Image Gallery */}
        <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" />
          </div> 
          
          {/* Product info */}
          <div className="px-4 pb-16 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ms-10">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" style={{marginBottom: '15px'}}>{product.name}</h1>
              <h3 className='text-xl tracking-tight text-gray-900' style={{marginBottom: '10px'}}>{product.category}</h3>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="">{product.description}</h2>
              <p className="text-3xl tracking-tight text-gray-900">${Number(product.price).toLocaleString()}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
            
              {/* Button */}
              <form className="mt-10">
                <div> 
                <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                  Chat with seller
                </button>
                <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center rounded-md border border-blue-600 bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                  Add to Favorite List
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
    // <div>
    // <h2>{product.name}</h2>
    // <img src={product.image} alt={product.name} />
    // <p>{product.description}</p>
    // </div>
  );
}

export default EachProductView;
