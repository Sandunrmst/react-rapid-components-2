import React, { useState } from "react";
import Pagination from ".";

const ProductPage = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  console.log(dummyData);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="grid gap-2 grid-cols-[repeat(4,1fr)]">
        {currentListOfItems.map((listItem) => (
          <div className="px-2 py-2 bg-green-800" key={listItem.id}>
            {" "}
            {listItem.name}
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductPage;
