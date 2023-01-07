import React from "react";
import nextId from "react-id-generator";

export interface TableProps {
  caption?: string;
  headers: any[];
  data: any[];
  striped?: boolean;
  bordered?: boolean;
  captionTop?: boolean;
  className?: string;
  firstCellIsHeader?: boolean;
}

const Table = ({
  caption,
  headers,
  data,
  striped = false,
  bordered,
  captionTop,
  className = "",
  firstCellIsHeader,
}: TableProps) => (
  <table
    className={`nsw-table ${striped ? "nsw-table--striped " : " "} ${
      bordered ? "nsw-table--bordered " : " "
    } ${captionTop ? "nsw-table--caption-top " : " "} ${className}`}
  >
    {caption && <TableCaption tableCaption={caption} />}
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableHeader
            title={header.title}
            key={`tableHeader-${nextId()}`}
            width={header.width}
          />
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row, rowIndex) => (
        <TableRow key={`tableRow-${nextId()}`}>
          {headers.map((header, columnIndex) => {
            // check to render first cell in rows as a header or not
            if (columnIndex === 0 && firstCellIsHeader === true) {
              return (
                <TableHeader
                  key={`tableHeader-${nextId()}`}
                  scope="row"
                  title={row[header.key] ? row[header.key] : ""}
                />
              );
            }
            return (
              <TableCell
                key={`tableCell-${nextId()}`}
                data={row[header.key] ? row[header.key] : ""}
                // type={header.type}
                // render={
                //   header.render ? header.render(row[header.key], row) : null
                // }
              />
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  </table>
);

interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * The table body component
 * @param  {string}  className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableBody = ({ children, className = "" }: TableBodyProps) => (
  <tbody className={className}>{children}</tbody>
);

TableBody.defaultProps = {
  className: "",
};

interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * The table head component
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableHead = ({ children, className }: TableHeadProps) => (
  <thead className={className}>{children}</thead>
);

TableHead.defaultProps = {
  className: "",
};

interface TableHeaderProps {
  title: string;
  width?: number;
  className?: string;
  scope?: "row" | "col";
}

/**
 * The table header component
 *
 * @param {string} title            - The title of table header/column
 * @param {string} type             - Type of the header, can be either text or numeric
 *                                    for left or right alignment respectively.
 * @param {string} width            - Width of the header/column in percentage
 * @param {string} scope            - Scope of the header, can be 'row' or 'col'
 * @param {string} className        - An additional class, optional
 */
export const TableHeader = ({
  title,
  width,
  scope = "col",
  className = "",
}: TableHeaderProps) => (
  <th className={className} scope={scope} style={{ width: `${width}%` }}>
    {title}
  </th>
);

interface TableCellProps {
  data?: string;
  className?: string;
}

export const TableCell = ({ data, className = "" }: TableCellProps) => (
  <td className={className}>{data}</td>
);

interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableRow = ({ children, className = "" }: TableRowProps) => (
  <tr className={className}>{children}</tr>
);

interface TableCaptionProps {
  tableCaption?: string;
  captionId?: string;
  className?: string;
}

/**
 * The table caption component
 * @param {string} tableCaption     - The title of the table caption
 * @param {string} captionId        - The id of the caption
 * @param {string} className        - An additional class, optional
 * @param {object} attributeOptions - Default HTML attributes
 *
 */
export const TableCaption = ({
  captionId,
  tableCaption,
  className = "",
}: TableCaptionProps) => (
  <caption className={className}>{tableCaption}</caption>
);

interface TableResponsiveWrapperProps {
  children?: React.ReactNode;
}

/**
 * Table wrapper for responsive tables with horizontal scrolling on smaller devices
 * @param {node} children
 */
export const TableResponsiveWrapper = ({
  children,
}: TableResponsiveWrapperProps) => (
  <div className="nsw-table-responsive" role="region">
    {children}
  </div>
);

export default Table;
