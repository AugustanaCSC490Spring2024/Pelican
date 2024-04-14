import firestore from '@react-native-firebase/firestore';

export async function saveUserData(productName, productPrice, productDescription, productImage, sellerID, sellerName) {
  try {
    await firestore()
      .collection('products')
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
