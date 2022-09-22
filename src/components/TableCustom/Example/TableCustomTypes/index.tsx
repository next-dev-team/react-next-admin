/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  ModalPropsType as ModalPropsTypeApi,
  ModalRenderPropsType as ModalRenderPropsTypeApi,
  BtnConfigType as BtnConfigTypeApi,
  ModalPropsConfigType as ModalPropsConfigTypeApi,
  SubmitOnDoneType as SubmitOnDoneTypeApi,
} from '../../types';

declare type TableCustomTypesApi = {
  /**
   * header设置快捷按钮 查看 BtnConfigType
   *
   */
  headerTitleConfig?: 'Record<string, BtnConfigType>';
  /**
   * 全选快捷配置 查看 BtnConfigType
   */
  selectionConfig?: 'Record<string, BtnConfigType>';

  /**
   *菜单快捷配置 查看 BtnConfigType
   */
  operationConfig?: 'Record<string, BtnConfigType>';
  /**
   * 其他参数查看 TableCustom API 和 更多使用样例
   */
  '...'?: any;
};
export function TableCustomTypes(props: TableCustomTypesApi) {}

export function BtnConfigType(props: BtnConfigTypeApi) {}

export function ModalRenderPropsType(props: ModalRenderPropsTypeApi) {}

export function ModalPropsType(props: ModalPropsTypeApi) {}

export function ModalType(props: {
  /**
   * 下面这些等,具体查看types具体定义
   */
  ModalProps?: 'Form' | 'Delete' | 'Download' | 'PreviewHtml' | 'Import' | 'Confirm' | 'OnClick';
}) {}

export function ModalPropsConfigType(
  props: ModalPropsConfigTypeApi & {
    /**
     * 其他参数 都会透传给调用组件.
     * 比例： <PreviewHtmlModal {...rest} />
     */
    '...'?: any;
  },
) {}

export function SubmitOnDoneType(props: SubmitOnDoneTypeApi) {}
