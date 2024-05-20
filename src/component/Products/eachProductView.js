import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from '../../data/firebase';
import { doc, getDoc } from "firebase/firestore";
import { StarIcon } from '@heroicons/react/20/solid';
import ShowProducts from '../Products/showProducts.js';
import { serverTimestamp } from '@firebase/firestore';
import { arrayUnion, collection, setDoc, updateDoc } from '@firebase/firestore';
import { useUserStore } from '../../data/userStore';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


//temporary 
const reviews = { href: '#', average: 4, totalCount: 117 }

const EachProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);  
  const navigate = useNavigate(); 

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

  const handleChat = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("You must be logged in to start a chat.");
      navigate('/')
      return;
    } 
 
    console.log('Button clicked');
    const chatRef = collection(db, 'chats');
    const userChatsRef = collection(db, 'userchats');
    
    try {
      const newChatRef = doc(chatRef); 
        await setDoc(newChatRef, {
            createdAt: serverTimestamp(),
            messages: [],
        });

        // Add the new chat to the user's chat list
        await setDoc(doc(userChatsRef, auth.currentUser.uid), {
            chats: arrayUnion({
                chatId: newChatRef.id,
                lastMessage: "",
                receiverId: product.sellerId,
                updatedAt: Date.now(),
            }),
        }, { merge: true });

        // Add the new chat to the seller's chat list
        await setDoc(doc(userChatsRef, product.sellerId), {
            chats: arrayUnion({
                chatId: newChatRef.id,
                lastMessage: "",
                receiverId: auth.currentUser.uid,
                updatedAt: Date.now(),
            }),
        }, { merge: true });

        toast.success("Started chat with seller");
        console.log(newChatRef.id); 
        navigate(`/chat`);
    } catch (error) {
        console.log(error);
        toast.error("Failed to start chat");
    }
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
      

        {/* Image Gallery */}
        <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" />
          </div> 
          
          {/* Product info */}
          <div className="px-4 pb-16 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ms-10">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              <h3 className='text-l tracking-tight text-gray-500' style={{marginBottom: '15px'}}>Sold by @{product.user}</h3>
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
              <div className="mt-10">
                <div> 
                  <button
                      // type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={handleChat}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height: '150px'}}></div>
      <div style={{fontSize: 30, padding: 20, fontWeight: 'bold'}}>Other Products</div>
      <ShowProducts />
    </div> 
  );
}

export default EachProductView;
