import type { BtnConfigTypes } from '@/components/TableCustom/types';
import { PlusOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';

/**
 * 配置顶部header快捷菜单按钮
 */
export const headerTitleConfigArr: BtnConfigTypes = {
  create: {
    text: '新增',
    icon: PlusOutlined,
    type: 'primary',
    style: {
      background: '#1890ff',
      borderColor: '#1890ff',
    },
  },
  import: {
    text: '导入',
    icon: ImportOutlined,
    type: 'primary',
    style: {
      background: '#faad14',
      borderColor: '#faad14',
    },
  },
  export: {
    text: '导出',
    icon: ExportOutlined,
    type: 'primary',
    style: {
      background: '#269884',
      borderColor: '#269884',
    },
  },
  default: {
    text: '按钮', // 按钮显示名称
    icon: PlusOutlined, // 按钮图标
    type: 'primary', // 按钮类型
    auth: () => true, // 显示权限
    style: {
      // 按钮显示样式
      background: '#1890ff',
      borderColor: '#1890ff',
    },
  },
};

/**
 * 配置顶部select选中快捷菜单配置
 */
export const tableAlertOptionRenderConfigArr: BtnConfigTypes = {
  delete: {
    text: '批量删除',
    type: 'link',
    danger: true,
  },
  export: {
    text: '导出',
    type: 'link',
  },
  default: {
    text: '按钮', // 按钮显示名称
    type: 'link',
    auth: () => true, // 显示权限
  },
};

/**
 * 配置row记录快捷菜单配置
 */
export const operationConfigRenderConfigArr: BtnConfigTypes = {
  edit: {
    text: '编辑',
    type: 'link',
  },
  delete: {
    text: '删除',
    type: 'link',
    danger: true,
  },
  download: {
    text: '下载',
    type: 'link',
  },
  default: {
    text: '按钮', // 按钮显示名称
    type: 'link',
    auth: () => true, // 显示权限
  },
};
