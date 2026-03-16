import { Form, Input, Button, Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const Addform = () => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/categories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Vui lòng nhập Title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
};

export default Addform;