// import React, { Component } from "react";

// export default class Pagination extends Component {
//   render() {
//     const { handleNext, handlePrev, page, tR, handlePage , pageSize} = this.props;

//     const buttons = Array.from({ length: Math.ceil(tR / pageSize) }, (_, index) => (
//       <button
//         className={`btn btn-${
//           page === index + 1 ? "secondary" : "light"
//         } rounded-0 border border-2 px-3`}
//         key={index + 1}
//         onClick={() => {
//           handlePage(index + 1);
//         }}
//       >
//         {index + 1}
//       </button>
//     ));

//     return (
//       <>
//         <button className="btn btn-light" disabled={page===1} onClick={handlePrev}>
//           &larr; Previous
//         </button>
//         <div className="container d-flex justify-content-center align-items-center">
//           {buttons}
//         </div>
//         <button className="btn btn-light mx-5" disabled={page===Math.ceil(tR/pageSize)} onClick={handleNext}>
//           Next &rarr;
//         </button>
//       </>
//     );
//   }
// }
import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { handleNext, handlePrev, page, tR, handlePage, pageSize } = this.props;

    const totalPages = Math.ceil(tR / pageSize);
    const visiblePages = Math.min(totalPages, 5); // Maximum of 5 visible buttons

    // Calculate the starting index of the visible buttons based on the current page
    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    // Adjust the endPage if it exceeds the total number of pages
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const buttons = Array.from({ length: visiblePages }, (_, index) => {
      const pageNumber = startPage + index;

      return (
        <button
          className={`btn btn-${
            page === pageNumber ? "secondary" : "light"
          } rounded-0 border border-2 px-3`}
          key={pageNumber}
          onClick={() => {
            handlePage(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      );
    });

    return (
      <>
        <button className="btn btn-light" disabled={page === 1} onClick={handlePrev}>
          &larr; Previous
        </button>
        <div className="container d-flex justify-content-center align-items-center">
          {buttons}
        </div>
        <button
          className="btn btn-light mx-5"
          disabled={page === Math.ceil(tR / pageSize)}
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </>
    );
  }
}
