import React, { useEffect, useState } from "react";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
    setTotalPage(data.total / 10);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-700 font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={() => page > 1 && setPage(page - 1)}>◀</button>
        {[...Array(Math.ceil(totalPage))].map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-lg text-white bg-blue-500 ${
              page === index + 1 ? "bg-blue-700" : ""
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => page < totalPage && setPage(page + 1)}>▶</button>
      </div>
    </div>
  );
};

export default Body;
