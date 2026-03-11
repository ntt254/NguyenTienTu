import { Table, Modal, Button, Input  } from 'antd';
import { useState } from 'react';
export const Userlist = () => {
    const [open, setOpen] = useState(false)
    const data = [
        {
            key: '1',
            id: '1',
            name: 'Tuan ngu',
            age: '36',
            major: 'Lap trinh html'
        },
        {
            key: '2',
            id: '2',
            name: 'Hao Sua',
            age: '63',
            major: 'Lap trinh css'
        },
    ];

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Major',
            dataIndex: 'major',
            key: 'major',
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