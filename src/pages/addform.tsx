import { Form, Input, Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const Addform = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const story = {
        title: values.title,
        author: values.author,
        image: values.image,
        description: values.description,
        createdAt: new Date().toISOString(),
      };
      const res = await axios.post("http://localhost:3000/stories", story);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công");
      queryClient.invalidateQueries({ queryKey: ["getAllStories"] });
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

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Vui lòng nhập tác giả" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="image"
        rules={[{ required: true, message: "Vui lòng nhập URL ảnh" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Vui lòng nhập Mô tả" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
};

export default Addform;