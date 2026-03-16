import { Form, Input, Button } from "antd";

const UserForm = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>

            <Form.Item
                label="Name"
                name="name"
                rules={[
                    { required: true, message: "Bạn chưa nhập tên" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="NameProduct"
                name="nameproduct"

            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Quantity"
                name="quantity"
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Descriptio"
                name="descriptio"

            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: "Bạn chưa nhập email" },
                    { type: "email", message: "Định dạng email không hợp lệ" }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Chưa nhập mật khẩu" }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Confirm Password"
                name="confirm"
                dependencies={["password"]}
                rules={[
                    { required: true, message: "Bạn chưa nhập lại mật khẩu" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Mật khẩu không khớp"));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default UserForm;