import {useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import {Spin, Table, Image, Button, message} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import axios from "axios";

const f = async () => (await axios.get("http://localhost:3000/stories")).data;
const d = async (id: number | string) => (await axios.delete(`http://localhost:3000/stories/${id}`)).data;
const t = (v: any) => {
  if (!v) return "-";
  const d0 = new Date(v);
  return Number.isNaN(d0.getTime()) ? "-" : `${String(d0.getDate()).padStart(2, "0")}/${String(d0.getMonth() + 1).padStart(2, "0")}/${d0.getFullYear()}`;
};

const Lab5 = () => {
  const qc = useQueryClient();
  const {data = [], isLoading, isError} = useQuery<any[]>({
    queryKey: ["getAllStories"],
    queryFn: f,
    refetchOnWindowFocus: true,
  });

  const m = useMutation<any, Error, number | string>({
    mutationFn: d,
    onSuccess: () => {
      message.success("Xóa truyện thành công");
      qc.invalidateQueries({queryKey: ["getAllStories"]});
    },
    onError: () => message.error("Xóa truyện thất bại"),
  });

  const columns = [
    {title: "ID", dataIndex: "id", key: "id"},
    {title: "Ảnh", dataIndex: "image", key: "image", render: (u: string) => <Image src={u} height={60} alt="img" />},
    {title: "Tiêu đề", dataIndex: "title", key: "title"},
    {title: "Tác giả", dataIndex: "author", key: "author"},
    {title: "Mô tả", dataIndex: "description", key: "description"},
    {title: "Created At", dataIndex: "createdAt", key: "createdAt", render: (v: string | number) => t(v)},
    {title: "Action", key: "action", render: (_: any, r: any) => <Button danger icon={<DeleteOutlined />} onClick={() => m.mutate(r.id)}>Xóa</Button>},
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return <Table columns={columns} dataSource={data} rowKey="id" pagination={{pageSize: 5}} />;
};

export default Lab5; 