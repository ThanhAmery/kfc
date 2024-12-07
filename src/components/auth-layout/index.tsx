import { Button, Col, Form, Image, Input, Row } from 'antd'

type AuthenLayoutProps = {
    children: React.ReactNode
};

function AuthenLayout({ children }: AuthenLayoutProps) {
  return (
    <div>
        <Row align={"middle"} gutter={30} >
            <Col span={12}>
                <Image src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=gOq60L" />
            </Col>

            <Col span={12}>
                {children}
            </Col>
        </Row>

    </div>
  )
}

export default AuthenLayout