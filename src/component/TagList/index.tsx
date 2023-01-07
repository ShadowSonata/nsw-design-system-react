import React from "react";

interface TagProps {
  className?: string;
  link?: string;
  text: string;
  linkComponent?: React.ReactElement<any>;
  href?: string;
}

export const Tag = ({
  link,
  text,
  linkComponent,
  className = "",
}: TagProps) => {
  const LinkComponent = linkComponent;

  return link ? (
    LinkComponent ? (
      React.cloneElement(LinkComponent, {
        className: `nsw-tag ${className}`,
        href: link,
      })
    ) : (
      <a className={`nsw-tag ${className}`} href={link}>
        {text}
      </a>
    )
  ) : (
    <span className={`nsw-tag ${className}`}>{text}</span>
  );
};

export interface TagListProps {
  className?: string;
  tags: TagProps[];
}

const TagList = ({
  tags,
  className = "",
  ...attributeOptions
}: TagListProps) => (
  <div className={`nsw-list nsw-list--8 ${className}`} {...attributeOptions}>
    {tags.map((tag) => (
      <Tag
        key={tag.text}
        linkComponent={tag.linkComponent}
        link={tag.link}
        text={tag.text}
      />
    ))}
  </div>
);

export default TagList;
