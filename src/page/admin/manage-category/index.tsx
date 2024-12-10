import { Form, Input } from "antd";
import ManageTemplate from "../../../components/ManageDashboard";


function ManageCategory() {

    const title = 'Manage Category';
    const columns = [
        {
            title: 'Category ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },    
    ];

    const formItems = (
        <>
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input category name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
            >
                <Input.TextArea />
            </Form.Item>
        </>
    );

  return (
    <div>
        <ManageTemplate
        title={title}
        columns={columns}
        formItems={formItems}
        apiURI="category"
      />
    </div>
  )
}

export default ManageCategory