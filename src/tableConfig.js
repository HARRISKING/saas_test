const columns = [
  {
    title: '仓库编号',
    dataIndex: 'code'
  },
  {
    title: '仓库名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '所属企业',
    dataIndex: 'account_name',
    key: 'account_name'
  },
  {
    title: '仓库分类',
    dataIndex: 'type_msg',
    key: 'type_msg',
  },
  {
    title: '地址',
    dataIndex: 'address_with_prefix',
    key: 'address_with_prefix'
  },
  {
    title: '负责人',
    dataIndex: 'principal',
    key: 'principal'
  },
  {
    title: '负责人电话',
    dataIndex: 'principal_phone',
    key: 'principal_phone'
  },
];

export default columns;
