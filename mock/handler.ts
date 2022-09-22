/* eslint-disable @typescript-eslint/no-unused-vars */
import mockjs from 'mockjs';
import { waitTime } from '../src/utils';
import { responseConfig, responseTableConfig } from '../src/services/config';

/**
 * mockjs 定义
 * https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
export const response = ({
  data,
  mock = true,
  code = responseConfig.success,
  reason = '成功',
}: any) => {
  let newData = [];
  if (mock) {
    newData = mockjs.mock(data);
  } else {
    newData = data;
  }
  return JSON.stringify({
    data: newData,
    [`${responseConfig.code}`]: code,
    [`${responseConfig.message}`]: reason,
  });
};

/**
 *
 * @param req 请求实例
 * @param res 返回实例
 * @param data 数据
 * @param timeout 延迟
 */
export const getObj = async (
  { data, timeout, mock, code = responseConfig.success, reason = '成功' }: any,
  req: any,
  res: any,
) => {
  if (timeout) {
    await waitTime(timeout);
  }

  return res.send(
    response({
      data,
      mock,
      code,
      reason,
    }),
  );
};

/**
 * @param req 请求实例
 * @param res 返回实例
 * @param data 数据
 * @param timeout 延迟
 */
export const getPagination = async (
  { data, timeout = 0, mock = true }: any,
  req: any,
  res: any,
) => {
  const defaultOption: any = {
    [`${responseTableConfig.total}`]: 100,
    [`${responseTableConfig.data}`]: [],
  };

  if (timeout) {
    await waitTime(timeout);
  }

  // let body: any = {};
  // try {
  //   body = req.body;
  //   if (body.page) {
  //     defaultOption.prePage = body.page + 1;
  //     defaultOption.nextPage = body.page + 2;
  //   }
  //   // eslint-disable-next-line no-empty
  // } catch (error) {}

  const newData = mockjs.mock(data);

  defaultOption[responseTableConfig.data] = newData.list;

  return res.send(
    response({
      data: defaultOption,
      mock,
    }),
  );
};
