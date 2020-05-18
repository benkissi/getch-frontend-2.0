import { Tag } from "antd";
export const tableColumns = [
  {
    title: "Interest",
    width: 70,
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Audience",
    width: 80,
    dataIndex: "audience_size",
    key: "audience",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Topic",
    dataIndex: "topic",
    width: 100,
    key: "topic",
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "path",
    width: 60,
    render: (tags) => (
      <span>
        {tags
          ? tags.map((tag, index) => {
              return (
                <div style={{ display: "inline" }} key={index}>
                  <Tag color="magenta">{tag.toUpperCase()}</Tag>
                </div>
              );
            })
          : ""}
      </span>
    ),
  },
  {
    title: "Relevance Score",
    dataIndex: "relevance",
    width: 100,
    key: "relevance",
    sorter: (a, b) => a - b,
  },
  {
    title: "Links",
    dataIndex: "links",
    width: 100,
    key: "links",
    render: (tags) => (
      <span>
        {tags
          ? tags.map((tag, index) => {
              return (
                <a
                  className="links"
                  key={index}
                  href={tag}
                  target="_blank"
                  style={{ display: "inline", cursor: "pointer" }}
                >
                  {tag.includes("facebook") ? (
                    <img src="/images/fbIcon.svg" />
                  ) : (
                    <img src="/images/google.svg" />
                  )}

                  {/* <Tag color="gold">{tag}</Tag> */}
                </a>
              );
            })
          : ""}
      </span>
    ),
  },
];

export const performanceColumns = [
  {
    title: "Interest",
    width: 70,
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "CPC",
    width: 70,
    dataIndex: "cpc",
    key: "cpc",
    sorter: (a, b) => a - b,
  },
  {
    title: "Clicks",
    width: 70,
    dataIndex: "clicks",
    key: "clicks",
    sorter: (a, b) => a - b,
  },
  {
    title: "Spend",
    width: 70,
    dataIndex: "spend",
    key: "spend",
    sorter: (a, b) => a - b,
  },
  {
    title: "Conversions",
    width: 70,
    dataIndex: "convertions",
    key: "convertions",
    sorter: (a, b) => a - b,
  },
];

export const chartData = [
  {
    name: "Nike",
    type: "Spend",
    value: 38,
  },
  {
    name: "Adidas",
    type: "Spend",
    value: 52,
  },
  {
    name: "Shoe",
    type: "Spend",
    value: 61,
  },
  {
    name: "Sandals",
    type: "Spend",
    value: 145,
  },
  {
    name: "Slippers",
    type: "Spend",
    value: 48,
  },
  {
    name: "Shorts",
    type: "Spend",
    value: 38,
  },
];
