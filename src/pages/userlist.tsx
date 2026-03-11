import { Table, Modal, Button, Input  } from 'antd';
import { useState } from 'react';
export const Userlist = () => {
    const [open, setOpen] = useState(false)
    const data = [
    {
        key: '1',
        id: '1',
        name: 'Tuan ngu',
        email: 'tuan@gmail.com',
        status: 'active'
    },
    {
        key: '2',
        id: '2',
        name: 'Hao Sua',
        email: 'hao@gmail.com',
        status: 'inactive'
    },
];

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) =>
            status === "active" ? (
                <span style={{ color: "green" }}>active</span>
            ) : (
                <span style={{ color: "red" }}>inactive</span>
            ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <>
                <Button type="primary" size="small">Edit</Button>
                <Button danger size="small" style={{ marginLeft: 8 }}>
                    Delete
                </Button>
            </>
        ),
    },
];
    return (
        <div className='w-full'>
            <div className='flex justify-center font-bold text-4xl my-4 text-gray-700'>Danh sách User</div>
            <Button type= "primary" onClick={() => setOpen(true)}> Thêm user</Button>
            <Table dataSource={data} columns={columns} />;
             <Modal
                title="Thêm User"
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => setOpen(false)}
            >
                <Input placeholder="Name" style={{ marginBottom: 10 }} />
                <Input placeholder="Email" style={{ marginBottom: 10 }} />
                <Input placeholder="Role" />
            </Modal>
        </div>
    )
}