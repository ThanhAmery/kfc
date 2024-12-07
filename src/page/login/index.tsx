import { Button, Col, Form, Image, Input, Row } from "antd"
import api from "../../config/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthenLayout from "../../components/auth-layout";

function Login() {

    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try{
            await api.post("login", values);
            // chạy xuống đây => account này có tồn tại
            toast.success("Login successfully!");
            navigate("/");
        }
        catch (error){
            toast.error(error.response.data);
            console.log(error.response.data);
        }
    };

    // Nguyên tắc DRY: Don't Repeat Yourself: không lặp lại code

  return (
    <AuthenLayout>
        <h1 >ĐĂNG NHẬP</h1>
        <Form 
        labelCol={{
        span: 24,
        }}
        onFinish={handleLogin}
        >   
            <Form.Item 
            label="Phone"
            name="phone" // name này phải mapping với biến BE
            rules={
            [
            {
                required: true,
                message: "Please input your email!",
            }
            ]}
            >
            <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item 
            label="Password"
            name="password"
            rules={
            [
            {
                required: true,
                message: "Please input your password!",
            }
            ]}
            >
            <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Button 
            type="primary" 
            htmlType="submit" 
            style={{
                    width: "100%",
                    marginBottom: 20,
                }}>
                    Login
            </Button>
                    
            <h2>Hoặc tiếp tục với</h2>
            <Button 
            className="login__google" 
            style={{
                    width: "100%",
                    marginTop: 10,
                }}
                >
                <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    alt=""
                    width={20}
                    />
                    <span>Login with Google</span>
            </Button>

        </Form>
    </AuthenLayout>
  )
}

export default Login