const items = [
  {
    label: '仓库名称',
    name: 'name',
    type: 'input',
  },
  {
    label: '负责人',
    type: 'input',
    name: 'principal',
    placeholder: '请输入',
  },
  {
    label: '仓库分类',
    name: 'type',
    type: 'select',
    placeholder: '请选择',
    options: 'types|storeType',
  },
]
export default items;
