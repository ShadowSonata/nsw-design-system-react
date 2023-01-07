import React from "react";
import nextId from "react-id-generator";

export interface PaginationProps {
  className?: string;
  paginationItems?: {
    url?: string;
  }[];
  children?: React.ReactNode;
  backLink?: string;
  nextLink?: string;
  active?: number;
}

export const Pagination = ({
  backLink,
  active,
  nextLink,
  paginationItems,
  className,
  children,
}: PaginationProps) => (
  <div className={`nsw-container ${className}`}>
    <nav className="nsw-pagination" aria-label="Pagination">
      <ul>
        <li>
          <a className="nsw-icon-button" href={backLink}>
            <span
              className="material-icons nsw-material-icons"
              aria-hidden="true"
            >
              keyboard_arrow_left
            </span>
            <span className="sr-only">Back</span>
          </a>
        </li>
        {paginationItems
          ? paginationItems.map((paginationItem, i) => (
              <PaginationItem
                url={paginationItem.url}
                page={i + 1}
                key={`pagination-${nextId()}`}
                active={active}
              />
            ))
          : ""}
        {children}
        <li>
          <a href={nextLink} className="nsw-icon-button">
            <span
              className="material-icons nsw-material-icons"
              aria-hidden="true"
            >
              keyboard_arrow_right
            </span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

interface PaginationItemProps {
  page?: number;
  active?: number;
  url?: string;
}

export const PaginationItem = ({ url, page, active }: PaginationItemProps) => (
  <li>
    <a className={active === page ? "active" : ""} href={url}>
      <span>
        <span className="sr-only">Page </span>
        {page}
      </span>
    </a>
  </li>
);

export const PaginationEllipsis = () => (
  <li>
    <span>&hellip;</span>
  </li>
);

export default Pagination;
