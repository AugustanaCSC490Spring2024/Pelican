const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('serviceaccountkey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function saveUserData(productName, productPrice, productDescription, productImage, sellerID, sellerName) {
    try {
      await firestore()
        .collection('products') // Specify the collection name
        .add({
          product_name: productName,
          product_price: productPrice,
          product_description: productDescription,
          product_image: productImage,
          seller_id: sellerID,
          seller_name: sellerName,
        });
      console.log('User data saved successfully!');
    } catch (error) {
      console.error('Error saving user data: ', error);
    }
  }
