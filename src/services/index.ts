import { postBody, getQuery, postDownload, postUploadFile } from './handler';

export function getPublicAreaPlate(data: any) {
  return postBody('/api/areaPlate', data);
}
/**
 * 示例:protable list测试
 */
export function getProTable(data: any) {
  return postBody('/api/table/list', data);
}
/**
 * 示例:protable list测试
 */
export function getProTableUserList() {
  return postBody('/api/table/userlist');
}
/**
 * 示例:protable 新增接口
 */
export const proTableAddRow = (params: any) => postBody('/api/protable/proTableAddRow', params);

// 示例: 下载文件
export function proTableDownload(data: any) {
  return postDownload('/api/backups/download', data);
}
/**
 * 示例:protable select测试
 */
export const getSelect = () => getQuery('/api/protable/select');
/**
 * 示例:protable 详情数据
 */
export const proTableDetails = (params: any) => postBody('/api/protable/proTableDetails', params);

/**
 * 示例:protable 删除数据
 */
export const proTableDelete = (params: any) => postBody('/api/protable/proTableDelete', params);

/**
 * 示例:右上角消息
 */
export const getNoticeMessage = () => postBody('/api/public/message');

/**
 * 示例:用户消息中心
 */
export const getDemoNoticeMessage = (params: any) => postBody('/api/user/message', params);

/**
 * 示例:消息阅读详情
 */
export const getDemoNoticeMessageRed = (params: any) => postBody('/api/user/message/read', params);

/**
 * 上传文件
 */
export async function uploadFile(data: any) {
  return postUploadFile('/api/public/upload/file', data);
}

interface loginType {
  // 手机号
  mobile: string;
  // 密码
  password: any;
}

/**
 *
 * 获取图形验证码
 */
export async function captcha(data: any) {
  return postBody('/api/public/captcha', data);
}
/**
 *
 * 登陆
 */
export async function login(data: loginType) {
  return postBody('/api/auth/login', data);
}
/**
 * 获取用户信息
 *
 ** */
export async function isLogin() {
  return postBody('/api/auth/isLogin');
}
/**
 *修改用户信息
 *
 ** */
export async function editUserInfo(data: any) {
  return postBody('/api/public/edit/userinfo', data);
}
/**
 * 获取模型配置文件
 *
 ** */
export async function getModelConfig(data: any) {
  return postBody('/api/config/getModelConfig', data);
}

/**
 * 用户消息中心
 */
export const getUserNoticeMessage = (params: any) => postBody('/api/public/message/mylist', params);
/**
 * 设置消息已读
 */
export const setUserNoticeMessageRead = (params: any) =>
  postBody('/api/public/message/read', params);
/**
 * 清空消息
 */
export const setUserNoticeMessageEmpty = (params: any) =>
  postBody('/api/public/message/empty', params);
