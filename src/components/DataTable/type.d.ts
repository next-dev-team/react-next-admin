import {
  FormInstance,
  ParamsType,
  ProColumns,
  ProTable,
  ProTableProps,
  RequestData,
  BetaSchemaForm,
  ProDescriptionsProps,
} from "@ant-design/pro-components";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import React, { ReactNode } from "react";

export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);

export namespace IDataTable {
  type ToolBarProps<TData> = {
    onAddClick?: (v?: TData) => void;
  };

  type CrudType = "view" | "edit" | "table" | "add";

  export type State<TEditData = unknown> = {
    openCrudModal?: boolean;
    openReport?: boolean;
    dataSource?: TEditData[];
    loadingEditSubmit?: boolean;
    loadingEdit?: boolean;
    loadingDelete?: boolean;
    loadingAdd?: boolean;
    crudType: CrudType;
    row?: Partial<TEditData>;
    filter?: Partial<TEditData>;
    exportType?: 'pdf' | 'csv' | 'xslx' | undefined
  };

  export type PageProps<
    TData extends Record<any, any>,
    TDataList,
    TEditData = Record<any, any>,
    TDetail = any
  > = {
    state: State<TData>;
    crudProps: {
      form: FormInstance<TEditData>;
      deleteUrl?: (row: TEditData) => string;
      detailUrl?: string;
      exportProps?: {
        hideFilter?: boolean;
        filename?: string;
        exportResponseData?: (
          res?: AxiosResponse<TDataList, any>
        ) => RequestData<any>;
      };
      detailProp?: {
        detailTitle?: string | ReactNode;
        desProps?: ProDescriptionsProps;
        viewConfigs?: (
          row: TEditData,
          params: ParamsType & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          }
        ) => Partial<AxiosResponse<TDataList, any>["config"]>;
      };
      listUrl?: string;
      actionsRender?: any[];
      actionColProps?: ProColumns<TData, "text">;
      resDetailFieldKey?: string[];
      resListFiledKey?: string[];
      listTotal?: number;
      listProps?: {
        listResponse?: (
          res?: AxiosResponse<TDataList, any>
        ) => RequestData<any>;
        listConfigs?: (
          params: ParamsType & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort?: Record<string, SortOrder>,
          filter?: Record<string, (string | number)[]>
        ) => Partial<AxiosResponse<TDataList, any>["config"]>;
      };

      detailResponse?: (res?: AxiosResponse<TDetail, any>) => Partial<TDetail>;
      /**
       * use for unique ID
       */
      crudId?: string;
      onModeChange?: (state: State<TData>) => void;
      addEditProps?: {
        /**
         * edit modal title
         */
        editTitle?: string | ReactNode;
         /**
         * add title
         */
        title?: string | ReactNode;
        addConfigs?: (
          values: TEditData
        ) => Partial<AxiosResponse<TDataList, any>["config"]>;
        editConfigs?: (
          row: TEditData,
          values?: TEditData
        ) => Partial<AxiosResponse<TDataList, any>["config"]>;
        editResponse?: (res?: AxiosResponse<TEditData, any>) => any;
        uiProps?: Partial<
          React.ComponentProps<typeof BetaSchemaForm<TEditData, "ModalForm">>
        >;
      };
    };
    toolBarProps?: ToolBarProps<TData>;
    axios: import("axios").AxiosStatic | import("axios").AxiosInstance;
    columnsOptions?: ProColumns<TData, "text">;
  } & React.ComponentProps<typeof ProTable<TData>>;

  export type CustomColumns<TData, Key extends keyof TData> = ProColumns<
    TData,
    Key
  > & {
    hideInReport?: boolean;
  };

  interface Link {
    previous?: any;
    current: string;
    next: string;
  }

  interface Pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: Link;
  }

  interface Meta {
    pagination: Pagination;
  }

  interface Data {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }

  interface RootObject {
    meta: Meta;
    data: Data[];
  }
  interface EditObject {
    meta: Meta;
    data: Data;
  }
}
