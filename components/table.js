import { Table, Pagination} from 'antd';

const InterestTable = props => {
    const rowSelection = {
        selectedRowKeys: props.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            props.onSelection(selectedRowKeys, selectedRows)
        },
        
      };

    return (
        <Table 
        rowSelection={rowSelection}
        columns={props.columns} 
        dataSource={props.dataSource} 
        rowKey="id"
        pagination={{
            showSizeChanger:true
        }}/>
    )
}

export default InterestTable