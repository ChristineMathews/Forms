import React, { useState, useEffect } from 'react';
import './MultiPartForm.css'; // Import the CSS file for styling

const MultiPartForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formValues, setFormValues] = useState(Array(7).fill({}));
  const totalPages = 7;

  useEffect(() => {
    // Scroll to top of the page on each page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleFieldChange = (event, fieldName) => {
    const updatedValues = [...formValues];
    updatedValues[currentPage - 1] = {
      ...updatedValues[currentPage - 1],
      [fieldName]: event.target.value,
    };
    setFormValues(updatedValues);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const isCurrentPageComplete = () => {
    const currentPageFields = Object.keys(formValues[currentPage - 1]);
  
    // Check if all required fields are filled in
    return currentPageFields.every((field) => formValues[currentPage - 1][field]);
  };
  

  const renderFormFields = () => {
    const currentPageFields = Object.keys(formValues[currentPage - 1]);

    return currentPageFields.map((field) => (
      <div key={field}>
        <label htmlFor={field}>{field}:</label>
        <input
          type="text"
          id={field}
          value={formValues[currentPage - 1][field] || ''}
          onChange={(event) => handleFieldChange(event, field)}
        />
      </div>
    ));
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
  
    for (let page = 1; page <= totalPages; page++) {
      const isActive = currentPage === page;
      const isCompleted = Object.keys(formValues[page - 1]).length === 4;
  
      const paginationItemClass = `pagination-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
  
      let contentText;
      if (page === 1) {
        contentText = 'Common Details';
      } else if (page === 2) {
        contentText = 'Construct SC';
      } else if (page === 3) {
        contentText = 'Plan';
      } else if (page === 4) {
        contentText = 'Stimulate';
      } else if (page === 5) {
        contentText = 'Vibrancy';
      } else if (page === 6) {
        contentText = 'Ideate';
      } else if (page === 7) {
        contentText = 'Innovate';
      }
      // Add more conditions for each page
  
      paginationItems.push(
        <div key={page} className="pagination-item-container">
          <button
            className={paginationItemClass}
            onClick={() => setCurrentPage(page)}
          >
            {isCompleted ? <span>&#10004;</span> : page}
          </button>
          <span className="pagination-item-text">{`${contentText}`}</span>
        </div>
      );
    }
  
    return (
      <div className="pagination-container">
        {paginationItems}
      </div>
    );
  };
  
  

  return (
    <div className="multi-part-form">
      <div className="pagination-container">
        {renderPaginationItems()}
      </div>
      <div className="form-container">
        <h2>{`Page ${currentPage} Heading`}</h2>
        {renderFormFields()}
        <div className="button-container">
          {currentPage > 1 && (
            <button className="back-button" onClick={handlePrevPage}>
              Back
            </button>
          )}
          {currentPage < totalPages && (
            <button className="next-button" onClick={handleNextPage} disabled={!isCurrentPageComplete()}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiPartForm;


// import React, { useState, useEffect } from 'react';
// import './MultiPartForm.css'; // Import the CSS file for styling

// const MultiPartForm = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [formValues, setFormValues] = useState(Array(7).fill({}));
//   const totalPages = 7;

//   useEffect(() => {
//     // Scroll to top of the page on each page change
//     window.scrollTo(0, 0);
//   }, [currentPage]);

//   const handleFieldChange = (event, fieldName) => {
//     const updatedValues = [...formValues];
//     updatedValues[currentPage - 1] = {
//       ...updatedValues[currentPage - 1],
//       [fieldName]: event.target.value,
//     };
//     setFormValues(updatedValues);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const isCurrentPageComplete = () => {
//     const currentPageFields = Object.keys(formValues[currentPage - 1]);
//     return (
//       currentPageFields.length === 4 &&
//       currentPageFields.every((field) => formValues[currentPage - 1][field])
//     );
//   };

//   const renderFormFields = () => {
//     const currentPageFields = Object.keys(formValues[currentPage - 1]);

//     return currentPageFields.map((field) => (
//       <div key={field}>
//         <label htmlFor={field}>{field}:</label>
//         <input
//           type="text"
//           id={field}
//           value={formValues[currentPage - 1][field] || ''}
//           onChange={(event) => handleFieldChange(event, field)}
//         />
//       </div>
//     ));
//   };

//   const renderPaginationItems = () => {
//     const paginationItems = [];

//     for (let page = 1; page <= totalPages; page++) {
//       const isActive = currentPage === page;
//       const paginationItemClass = `pagination-item ${isActive ? 'active' : ''}`;

//       paginationItems.push(
//         <button
//           key={page}
//           className={paginationItemClass}
//           onClick={() => setCurrentPage(page)}
//         >
//           {page}
//         </button>
//       );
//     }

//     return paginationItems;
//   };

//   return (
//     <div className="multi-part-form">
//       <div className="pagination-container">{renderPaginationItems()}</div>
//       <div className="form-container">
//         <h2>Page {currentPage}</h2>
//         {renderFormFields()}
//         <button onClick={handleNextPage} disabled={!isCurrentPageComplete()}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MultiPartForm;
