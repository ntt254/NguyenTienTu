import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Spin,DatePicker } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditStory() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories/1");
            return res.data;
        },
        queryKey: ["story"],
    });

    useEffect(() => {
        if (data) {
            console.log(data);
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const mutation = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.put(`http://localhost:3000/stories/1`, values);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
            navigate("/lab5");
        },
    });
    const onFinish = (values: any) =>{
        mutation.mutate(values);
    };
    if (isLoading) return <Spin />;
   return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Tên truyện">
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Tác giả">
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Ảnh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>

      {/* <Form.Item name="createdAt" label="Ngày tạo">
        <DatePicker />
      </Form.Item> */}

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Cập nhật
      </Button>
    </Form>
  );
};
export default EditStory;