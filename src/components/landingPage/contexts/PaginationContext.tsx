import React, { createContext, useState, useContext } from "react";

interface PaginationContextData {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  setTotalPages: (total: number) => void;
}

const PaginationContext = createContext<PaginationContextData | undefined>(
  undefined
);

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};

export const PaginationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        setTotalPages,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
