'use client';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => {
        return pageNumbers.map((number) => {
            if (number === 1 || number === totalPages || (number >= currentPage - 2 && number <= currentPage + 2)) {
                return (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={`px-4 py-2 mx-1 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {number}
                    </button>
                );
            } else if (number === currentPage - 3 || number === currentPage + 3) {
                return <span key={number}>...</span>;
            }
            return null;
        });
    };

    return (
        <div className="flex justify-center mt-4">
            {renderPageNumbers()}
        </div>
    );
};

export default Pagination;
