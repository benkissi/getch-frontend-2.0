import {Tag } from "antd";
export const tableColumns = [
    {
      title: 'Interest',
      width: 70,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Audience',
      width: 80,
      dataIndex: 'audience_size',
      key: 'audience',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      width: 100,
      key: 'topic'
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
      width: 60,
      render: tags => (
        <span>
          {
            tags?tags.map(tag => {
              return (
                <div style={{display: 'inline'}}>
                  <Tag color="magenta" key={tag}>
                  {tag.toUpperCase()}
                  </Tag> 
                </div>
                
              )
            }):''
          }
        </span>
      )
    },
    {
      title: 'Relevance Score',
      dataIndex: 'relevance',
      width: 100,
      key: 'relevance',
      sorter: (a, b) => a.name.length - b.name.length,
    }
  ]