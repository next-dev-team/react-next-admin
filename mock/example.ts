import { getObj, getPagination } from "./handler";
import { defineMock } from "@umijs/max";

// @ts-ignore
const userinfo = {
  id: 1,
  name: '超级管理员',
  account: 'admin',
  phone: '15308047222',
  mail: '1212',
  status: 1,
  headimg: 'http://www.fly.com/uploads/images/2020-03-14/d4b34a35073aaca1ff251627daa97567.jpeg',
  password: '$2y$10$iixP17LTpl0NoLc.S.Nit.FWiaBD/p3EgNldvjVo3zjxht5nbjTIi',
  remark: '',
  is_admin: 1,
  remember_token: 'csmVmzxVh9edsjvSLHDBvaV4ccyXorOnMn7qHeDWXaYgcgJGtICUKUS4mLYT',
  created_at: null,
  role_name: '超级管理员',
  role_id: 0,
  updated_at: '2020-06-04 11:40:58',
  menus: [
    {
      id: 1,
      name: '权限管理',
      has_subset: 1,
      node: 0,
      icon: 'layui-icon-set-fill',
      level: 1,
      path: null,
      children: [
        {
          id: 2,
          name: '节点管理',
          has_subset: 0,
          node: 0,
          icon: 'layui-icon-component',
          level: 2,
          path: null,
          children: [
            {
              id: 3,
              name: '新增节点',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 4,
              name: '查看节点',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 5,
              name: '编辑节点',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 6,
              name: '删除节点',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
          ],
        },
        {
          id: 7,
          name: '角色管理',
          has_subset: 0,
          node: 0,
          icon: 'layui-icon-username',
          level: 2,
          path: null,
          children: [
            {
              id: 8,
              name: '新增角色',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 9,
              name: '修改角色',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 10,
              name: '删除角色',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 11,
              name: '状态修改',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
          ],
        },
        {
          id: 12,
          name: '账号管理',
          has_subset: 0,
          node: 0,
          icon: 'layui-icon-app',
          level: 2,
          path: null,
          children: [
            {
              id: 13,
              name: '新增账号',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 14,
              name: '编辑账号',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 15,
              name: '删除账号',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
            {
              id: 16,
              name: '状态编辑',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
          ],
        },
        {
          id: 17,
          name: '日志列表',
          has_subset: 0,
          node: 0,
          icon: 'layui-icon-file-b',
          level: 2,
          path: null,
          children: [
            {
              id: 28,
              name: '日志详情',
              has_subset: 0,
              node: 1,
              icon: null,
              level: 3,
              path: null,
              children: [],
            },
          ],
        },
        {
          id: 18,
          name: '备份管理',
          has_subset: 0,
          node: 0,
          icon: 'layui-icon-template-1',
          level: 2,
          path: null,
          children: [
            {
              id: 19,
              name: '备份下载',
              has_subset: 0,
              node: 1,
              icon: '',
              level: 3,
              path: null,
              children: [],
            },
          ],
        },
      ],
    },
  ],
  permission_Ids: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ],
};

const message = {
  message: [
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '曲丽丽 评论了你',
      datetime: '3 年前',
      read: false,
      description: '描述信息描述信息描述信息',
    },
  ],
  notification: [
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '3 年前',
      read: false,
    },
  ],
};

const getMessage = async (req: any, res: any) => {
  let config = {};
  switch (req.body.type) {
    case "notification":
      config = {
        data: {
          "list|10": [
            {
              "id|+1": 1,
              avatar:
                "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
              title: "已通过第三轮面试",
              desc: "你推荐的 曲妮妮 已通过第三轮面试",
              date: "3 年前",
              is_urgent: 2,
              is_urgent_name: "重要",
              read: false,
              content:
                '<p>大神大神大d大神大神大d大神大神大d大神大神大d大神大神大d</p><p></p><p></p><div class="media-wrap image-wrap"><img src="http://www.adminapi.com/uploads/api/files/2021-10-14/ab1f561f86378b43e264e1860f3afc44/WechatIMG20988.jpeg"/></div><p>adasdasdasdasdasd</p><p>大神大神大是啊实打实的</p><ol><li>阿萨德啊实打实大声道</li><li>阿萨德1啊实打实的</li><li>11212sssssasdasdasda</li></ol><p></p>',
            },
          ],
        },
        timeout: 1000,
      };
      break;
    default:
      config = {
        data: {
          "list|10": [
            {
              "id|+1": 1,
              read: false,
              avatar:
                "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
              title: "曲丽丽 评论了你",
              date: "3 年前",
              desc: "描述信息描述信息描述信息",
              is_urgent: 2,
              is_urgent_name: "重要",
              content:
                '<p>大神大神大d大神大神大d大神大神大d大神大神大d大神大神大d</p><p></p><p></p><div class="media-wrap image-wrap"><img src="http://www.adminapi.com/uploads/api/files/2021-10-14/ab1f561f86378b43e264e1860f3afc44/WechatIMG20988.jpeg"/></div><p>adasdasdasdasdasd</p><p>大神大神大是啊实打实的</p><ol><li>阿萨德啊实打实大声道</li><li>阿萨德1啊实打实的</li><li>11212sssssasdasdasda</li></ol><p></p>',
            },
          ],
        },
        timeout: 1000,
      };
      break;
  }

  return await getPagination(config, req, res);
};

const getModel = async (req: any, res: any) => {
  let config = {};
  switch (req.body.model) {
    case "AdminBackups":
      config = {
        data: {
          modelConfig: {
            tableApi: "/api/backups/index",
            downloadApi: "/pro-form.tgz",
            operationConfig: [
              {
                btnType: "download",
                modalType: "Download",
                edit: true,
                api: "downloadApi",
              },
            ],
            search: false,
            pagination: false,
            columns: [
              {
                title: "备份名称",
                dataIndex: "name",
                search: false,
              },
              {
                title: "备份大小",
                dataIndex: "size",
                search: false,
              },
              {
                title: "备份时间",
                dataIndex: "time",
                search: false,
              },
            ],
          },
        },
        timeout: 1000,
      };
      break;
    case "AdminPermission":
      config = {
        data: {
          modelConfig: {
            title: "节点",
            tableApi: "/api/permission/index",
            createApi: "/api/permission/create",
            editApi: "/api/permission/edit",
            delApi: "/api/permission/del",
            headerTitleConfig: [
              {
                btnType: "create",
                modalType: "Form",
                edit: false,
                api: "createApiFn",
              },
            ],
            operationConfig: [
              {
                btnType: "edit",
                modalType: "Form",
                edit: true,
                api: "editApiFn",
              },
              {
                btnType: "delete",
                modalType: "Delete",
                edit: true,
                api: "delApiFn",
              },
            ],
            search: false,
            pagination: false,
            columns: [
              {
                title: "节点名称",
                dataIndex: "name",
                searchType: "like",
                search: false,
                formGroup: 1,
                fieldProps: {
                  maxLength: 20,
                },
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                title: "路由",
                dataIndex: "route_name",
                search: false,
                tableWidth: "80px",
                formGroup: 1,
                fieldProps: {
                  maxLength: 50,
                },
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                title: "排序值",
                dataIndex: "sort",
                valueType: "digit",
                search: false,
                formGroup: 2,
                fieldProps: {
                  maxLength: 2,
                },
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
                initialValue: 99,
              },
              {
                title: "类型",
                dataIndex: "node",
                search: false,
                valueType: "select",
                fieldProps: {
                  options: [
                    {
                      value: -1,
                      label: "公用",
                    },
                    {
                      value: 1,
                      label: "菜单",
                    },
                    {
                      value: 2,
                      label: "按钮",
                    },
                  ],
                },
                formGroup: 2,
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                title: "父级",
                dataIndex: "parent_id",
                search: false,
                valueType: "TreeSelectCustom",
                tip: "不填写默认是第一级",
                fieldProps: {
                  fieldProps: {
                    placeholder: "请选择",
                    treeDefaultExpandAll: true,
                    treeNodeFilterProp: "title",
                    showSearch: true,
                    allowClear: true,
                    treeData: [
                      {
                        id: 1,
                        pId: 0,
                        title: "系统管理",
                        value: 1,
                        children: [
                          {
                            id: 2,
                            pId: 1,
                            title: "节点管理",
                            value: 2,
                            children: [
                              {
                                id: 3,
                                pId: 2,
                                title: "新增节点",
                                value: 3,
                              },
                              {
                                id: 5,
                                pId: 2,
                                title: "编辑节点",
                                value: 5,
                              },
                              {
                                id: 6,
                                pId: 2,
                                title: "删除节点",
                                value: 6,
                              },
                            ],
                          },
                          {
                            id: 7,
                            pId: 1,
                            title: "角色管理",
                            value: 7,
                            children: [
                              {
                                id: 8,
                                pId: 7,
                                title: "新增角色",
                                value: 8,
                              },
                              {
                                id: 9,
                                pId: 7,
                                title: "修改角色",
                                value: 9,
                              },
                              {
                                id: 10,
                                pId: 7,
                                title: "删除角色",
                                value: 10,
                              },
                              {
                                id: 11,
                                pId: 7,
                                title: "状态修改",
                                value: 11,
                              },
                            ],
                          },
                          {
                            id: 12,
                            pId: 1,
                            title: "账号管理",
                            value: 12,
                            children: [
                              {
                                id: 13,
                                pId: 12,
                                title: "新增账号",
                                value: 13,
                              },
                              {
                                id: 14,
                                pId: 12,
                                title: "编辑账号",
                                value: 14,
                              },
                              {
                                id: 15,
                                pId: 12,
                                title: "删除账号",
                                value: 15,
                              },
                              {
                                id: 16,
                                pId: 12,
                                title: "状态编辑",
                                value: 16,
                              },
                            ],
                          },
                          {
                            id: 17,
                            pId: 1,
                            title: "日志列表",
                            value: 17,
                            children: [
                              {
                                id: 28,
                                pId: 17,
                                title: "日志详情",
                                value: 28,
                              },
                            ],
                          },
                          {
                            id: 18,
                            pId: 1,
                            title: "备份管理",
                            value: 18,
                            children: [
                              {
                                id: 19,
                                pId: 18,
                                title: "备份下载",
                                value: 19,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 20,
                        pId: 0,
                        title: "登录",
                        value: 20,
                      },
                      {
                        id: 21,
                        pId: 0,
                        title: "退出登录",
                        value: 21,
                      },
                      {
                        id: 22,
                        pId: 0,
                        title: "登陆状态",
                        value: 22,
                      },
                      {
                        id: 23,
                        pId: 0,
                        title: "验证码",
                        value: 23,
                      },
                      {
                        id: 24,
                        pId: 0,
                        title: "上传图片",
                        value: 24,
                      },
                      {
                        id: 25,
                        pId: 0,
                        title: "上传文件",
                        value: 25,
                      },
                      {
                        id: 26,
                        pId: 0,
                        title: "下载资源",
                        value: 26,
                      },
                    ],
                  },
                },
                hideInTable: true,
                hideInSearch: true,
                formGroup: 3,
              },
              {
                title: "level",
                dataIndex: "level",
                search: false,
                hideInForm: true,
                hideInSearch: true,
                formGroup: 3,
              },
              {
                title: "icon",
                dataIndex: "icon",
                search: false,
                formGroup: 3,
              },
              {
                title: "操作",
                dataIndex: "option",
                valueType: "option",
                width: 120,
              },
            ],
          },
        },
        timeout: 1000,
      };
      break;
    case "AdminLog":
      config = {
        data: {
          modelConfig: {
            tableApi: "/api/log/index",
            detailsApi: "/api/log/details",
            columns: [
              {
                title: "请求接口",
                dataIndex: "route_zh_name",
                searchType: "like",
              },
              {
                title: "请求环境",
                dataIndex: "source",
              },
              {
                title: "请求结果",
                dataIndex: "type",
                valueType: "select",
                fieldProps: {
                  options: [
                    {
                      value: null,
                      label: "全部",
                    },
                    {
                      value: 1,
                      label: "成功",
                    },
                    {
                      value: 2,
                      label: "失败",
                    },
                  ],
                },
              },
              {
                title: "IP地址",
                dataIndex: "ip",
                searchType: "like",
              },
              {
                title: "请求时间",
                dataIndex: "created_at",
                valueType: "dateTime",
                search: "dateTimeRange",
                searchType: "dateTime",
                sorter: true,
              },
              {
                title: "操作人",
                dataIndex: "user_name",
                valueType: "select",
                search: false,
              },
            ],
          },
        },
        timeout: 1000,
      };
      break;
    default:
      break;
  }

  return await getObj(config, req, res);
};

export default defineMock({
  'POST /api/auth/login': getObj.bind(null, {
    data: userinfo,
    timeout: 1000,
  }),
  'POST /api/auth/isLogin': getObj.bind(null, {
    data: userinfo,
  }),
  'POST /api/public/edit/userinfo': getObj.bind(null, {
    data: userinfo,
  }),

  // 通知数据
  'POST /api/public/message': getPagination.bind(null, {
    data: {
      list: message,
    },
    timeout: 1500,
  }),
  // 用户消息数据
  "POST /api/user/message": getMessage.bind(null),

  // 新增数据
  "POST /api/user/message/read": getObj.bind(null, {
    data: {
      id: 1,
      read: false,
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
      title: "曲丽丽 评论了你",
      date: "3 年前",
      desc: "描述信息描述信息描述信息",
      is_urgent_name: "重要",
      content:
        '<p>大神大神大d大神大神大d大神大神大d大神大神大d大神大神大d</p><p></p><p></p><div class="media-wrap image-wrap"><img src="http://www.adminapi.com/uploads/api/files/2021-10-14/ab1f561f86378b43e264e1860f3afc44/WechatIMG20988.jpeg"/></div><p>adasdasdasdasdasd</p><p>大神大神大是啊实打实的</p><ol><li>阿萨德啊实打实大声道</li><li>阿萨德1啊实打实的</li><li>11212sssssasdasdasda</li></ol><p></p>',
    },
    mock: false,
    timeout: 1000,
    // code: -1,
    // reason: '请求错误',
  }),

  "POST /api/table/list": getPagination.bind(null, {
    data: {
      "list|20": [
        {
          "id|+1": 1,
          avatar: "@image('100x100','@color')",
          title: "@ctitle",
          datetime: "@datetime",
          description: "@title",
          "user_id|+1|1-20": 1,
          "status|1-3": 1,
          "type|1-3": 1,
        },
      ],
    },
    timeout: 1000,
  }),

  // list测试
  "POST /api/table/userlist": getObj.bind(null, {
    data: [
      {
        id: 1,
        name: "@name",
      },
      {
        id: 2,
        name: "@name",
      },
      {
        id: 3,
        name: "@name",
      },
      {
        id: 4,
        name: "@name",
      },
      {
        id: 5,
        name: "@name",
      },
      {
        id: 6,
        name: "@name",
      },
      {
        id: 7,
        name: "@name",
      },
      {
        id: 8,
        name: "@name",
      },
      {
        id: 9,
        name: "@name",
      },
      {
        id: 10,
        name: "@name",
      },
      {
        id: 11,
        name: "@name",
      },
      {
        id: 12,
        name: "@name",
      },
      {
        id: 13,
        name: "@name",
      },
      {
        id: 14,
        name: "@name",
      },
      {
        id: 15,
        name: "@name",
      },
      {
        id: 16,
        name: "@name",
      },
      {
        id: 17,
        name: "@name",
      },
      {
        id: 18,
        name: "@name",
      },
      {
        id: 19,
        name: "@name",
      },
      {
        id: 20,
        name: "@name",
      },
    ],
  }),

  // 新增数据
  "POST /api/protable/proTableAddRow": getObj.bind(null, {
    data: {},
    mock: false,
    timeout: 1000,
    // code: -1,
    // reason: '请求错误',
  }),
  // 详情数据
  "POST /api/protable/proTableDetails": getObj.bind(null, {
    data: {
      "id|+1": 1,
      avatar: "@image('100x100','@color')",
      title: "@ctitle",
      datetime: "@datetime",
      description: "@title",
      "user_id|+1|1-20": 1,
      "status|1-3": 1,
      "type|1-3": 1,
    },
    timeout: 1000,
    // code: -1,
    // reason: '请求错误',
  }),
  // 删除
  "POST /api/protable/proTableDelete": getObj.bind(null, {
    data: {},
    timeout: 1000,
    mock: false,
    // code: -1,
    // reason: '删除失败',
  }),

  "POST /api/config/getModelConfig": getModel.bind(null),

  // 日志数据
  "POST /api/log/index": getPagination.bind(null, {
    data: {
      "list|20": [
        {
          created_at: "@datetime",
          "id|+1": 1,
          ip: "127.0.0.1",
          route_name: "",
          route_zh_name: "日志详情",
          source: "admin",
          "user_id|+1|1-20": 1,
          user_name: "超级管理员",
          "type|1-2": 1,
        },
      ],
    },
    timeout: 1000,
  }),
  "POST /api/log/details": getObj.bind(null, {
    data: {
      id: 547,
      user_id: 1,
      user_name: "超级管理员",
      route_name: "",
      route_zh_name: "登陆状态",
      param: "[]",
      ip: "127.0.0.1",
      msg: null,
      type: 1,
      created_at: "2021-09-02 11:54:12",
      updated_at: "2021-09-02 11:54:12",
      source: "admin",
      data: '{"data":{"id":1,"name":"超级管理员","account":"admin","phone":"15308047222","mail":"1212","status":1,"headimg":"http:\\/\\/www.fly.com\\/uploads\\/images\\/2020-03-14\\/d4b34a35073aaca1ff251627daa97567.jpeg","password":"$2y$10$iixP17LTpl0NoLc.S.Nit.FWiaBD\\/p3EgNldvjVo3zjxht5nbjTIi","remark":"","is_admin":1,"remember_token":"csmVmzxVh9edsjvSLHDBvaV4ccyXorOnMn7qHeDWXaYgcgJGtICUKUS4mLYT","created_at":null,"updated_at":"2020-06-04 11:40:58","menus":[{"id":20,"name":"登录","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":21,"name":"退出登录","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":22,"name":"登陆状态","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":23,"name":"验证码","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":24,"name":"上传图片","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":25,"name":"上传文件","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":26,"name":"下载资源","has_subset":0,"node":0,"icon":null,"level":0,"path":null,"children":[]},{"id":1,"name":"权限管理","has_subset":1,"node":0,"icon":"layui-icon-set-fill","level":1,"path":null,"children":[{"id":2,"name":"节点管理","has_subset":0,"node":0,"icon":"layui-icon-component","level":2,"path":null,"children":[{"id":3,"name":"新增节点","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":4,"name":"查看节点","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":5,"name":"编辑节点","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":6,"name":"删除节点","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]}]},{"id":7,"name":"角色管理","has_subset":0,"node":0,"icon":"layui-icon-username","level":2,"path":null,"children":[{"id":8,"name":"新增角色","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":9,"name":"修改角色","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":10,"name":"删除角色","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":11,"name":"状态修改","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]}]},{"id":12,"name":"账号管理","has_subset":0,"node":0,"icon":"layui-icon-app","level":2,"path":null,"children":[{"id":13,"name":"新增账号","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":14,"name":"编辑账号","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":15,"name":"删除账号","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]},{"id":16,"name":"状态编辑","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]}]},{"id":17,"name":"日志列表","has_subset":0,"node":0,"icon":"layui-icon-file-b","level":2,"path":null,"children":[{"id":28,"name":"日志详情","has_subset":0,"node":1,"icon":null,"level":3,"path":null,"children":[]}]},{"id":18,"name":"备份管理","has_subset":0,"node":0,"icon":"layui-icon-template-1","level":2,"path":null,"children":[{"id":19,"name":"备份下载","has_subset":0,"node":1,"icon":"","level":3,"path":null,"children":[]}]}]}]},"msg":"请求成功","code":0}',
    },
    timeout: 1000,
  }),

  // 备份数据
  "POST /api/backups/index": getPagination.bind(null, {
    data: {
      "list|20": [
        {
          time: "@datetime",
          "id|+1": 1,
          name: "db-zxm-20210908.sql",
          size: "3.460101M",
        },
      ],
    },
    timeout: 1000,
  }),
  // 区域数据
  "POST /api/areaPlate": getPagination.bind(null, {
    data: {
      areaPlate: [
        {
          city: "成都",
          id: 860028,
          province: "四川",
          area: "区域",
          plate: "板块",
        },
        {
          city: "绵阳",
          id: 860029,
          area: "区域",
          province: "四川",
          plate: "板块",
        },
      ],
    },
    timeout: 1000,
  }),
});
