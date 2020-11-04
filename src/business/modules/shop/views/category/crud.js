export const crudOptions = (vm) => {
  return {
    rowHandle: {
      view: {
        disabled: () => {
          return !vm.hasPermissions('shop:category:edit')
        }
      },
      edit: {
        show: false,
        disabled: () => {
          return !vm.hasPermissions('shop:category:edit')
        }
      },
      lineEdit: {
        show: true,
        disabled: () => {
          return !vm.hasPermissions('shop:category:edit')
        }
      },
      remove: {
        disabled: () => {
          return !vm.hasPermissions('shop:category:del')
        }
      },
      fixed: 'right'
    },
    options: {
      lineEdit: { validation: true },
      height: '100%'
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 100,
        form: {
          disabled: true
        },
        sortable: true
      },
      {
        title: '分类名称',
        key: 'name',
        sortable: true,
        form: {
          rules: [{ required: true, message: '分类名称不能为空' }]
        }
      },
      {
        title: '分类代码',
        key: 'code',
        sortable: true
      },
      {
        title: '分类图标',
        key: 'icon',
        type: 'icon-selector', // 这里改成 icon-selector 类型
        sortable: true
      },
      {
        title: '是否启用',
        key: 'disabled',
        dict: {
          data: [
            { value: true, label: '启用' },
            { value: false, label: '禁用' }
          ]
        },
        type: 'dict-switch', // 这里改成 switch 类型
        sortable: true
      },
      {
        title: '创建时间',
        key: 'createTime',
        type: 'datetime',
        width: 152,
        form: { // 表单配置
          disabled: true // 禁用表单编辑
        },
        sortable: true
      },
      {
        title: '更新时间',
        key: 'updateTime',
        type: 'datetime',
        width: 152,
        form: { // 表单配置
          disabled: true // 禁用表单编辑
        },
        sortable: true
      }
    ]
  }
}
