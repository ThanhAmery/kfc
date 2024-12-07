import { Button, Form, Input, Select } from "antd"
import AuthenLayout from "../../components/auth-layout"
import { toast } from "react-toastify";
import api from "../../config/api";


function Register() {

    const handleRegister = async (values) => {
        try{
            await api.post("register", values);
            toast.success("Register successfully!");
        }
        catch (error){
            toast.error(error.response.data);
        }
    };

  return (
    <AuthenLayout>
        <h1>TẠO TÀI KHOẢN</h1>
        <Form
        labelCol={{
            span: 24,
            }}
            onFinish={handleRegister}
            >
            <Form.Item
            label="Phone"
            name="phone"
            rules={[
                {
                    required: true,
                    message: "Please input your phone number!",
                }
            ]}
            >
                <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
                {
                    required: true,
                    message: "Please input your full name!",
                }
            ]}
            >
                <Input placeholder="Họ và tên" />

            </Form.Item>
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: "Please input your email!",
                },
                {
                    type: "email",
                    message: "Please enter a valid email!"
                }
            ]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={
                [
                    {
                        required: true,
                        message: "Please input your password!",
                    },          
                ]
            }
            >
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            {/* <Form.Item
            label="Role"
            name="role"
            rules={
                [
                    {
                        required: true,
                        message: "Please select your role!",
                    }
                ]
            }
            >
                <Select>
                    <Select.Option value="user">User</Select.Option>
                    <Select.Option value="admin">Admin</Select.Option>
                </Select>
            </Form.Item> */}

            <Form.Item>
                <Button type="primary" htmlType="submit">Đăng ký</Button>
            </Form.Item>

        </Form>
    </AuthenLayout>
  )
}

export default Register