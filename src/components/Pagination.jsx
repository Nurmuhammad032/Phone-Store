import ReactPaginate from "react-paginate";
import phones from "../constants/phones";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";


function Pagination({ itemsPerPage, setCurrentItems }) {
  // We start with an empty list of items.
  // const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(phones.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(phones.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % phones.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<GrPrevious />}
        renderOnZeroPageCount={null}
        activeClassName="active-pagination"
        subContainerClassName="pages pagination"
        containerClassName="pagination"
        breakLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="prev-btn"
        nextClassName="page-item"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="next-btn"
      />
    </>
  );
}

export default Pagination;
