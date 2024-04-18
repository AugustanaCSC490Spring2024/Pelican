import useProducts from "./useProducts";

const ProductView = () => {
    const products = useProducts();
    return (
        <div>
            {products.map((product) => (
                <div key={product.key}>
                    <h2>{product.name}</h2>
                    <p>{product.user}</p>
                    <p>${Number(product.price).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductView;