import { Row, Col } from 'antd';

const DashboardLayout = props => {
 return (
     <div>
         <Row>
             <Col span={4}>Col 6</Col>
             <Col span={20}>{props.children}</Col>
         </Row>
     </div>
 )
}

export default DashboardLayout