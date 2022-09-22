declare namespace API {
  type addUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type analysisUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type annulUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type applyAssignmentUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type assignmentUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type authUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type baocunjiaoseqingqiucanshu = {
    /** 业务运营选择数据权限 */
    businessPermissions?: number[];
    /** 客户数据权限（1查看个人归属客户，2查看项目全部客户） */
    customerPermissions?: number;
    /** 角色ID */
    id?: number;
    /** 是否全部移动操作权限 */
    isAllMenuMobilePermission?: boolean;
    /** 是否全部PC操作权限 */
    isAllMenuPermission?: boolean;
    /** 是否所在公司数据权限 */
    isCompanyDataPermission?: boolean;
    /** 是否所在部门数据权限 */
    isDepartmentDataPermission?: boolean;
    /** 是否所在项目数据权限 */
    isProjectDataPermission?: boolean;
    /** 是否选择范围数据权限 */
    isRangeDataPermission?: boolean;
    /** 是否系统管理数据权限 */
    isSystemManagerDataPermission?: boolean;
    /** 移动操作权限 */
    menuMobilePermissions?: number[];
    /** PC操作权限 */
    menuPermissions?: number[];
    /** 角色名称 */
    name: string;
    /** 隐私保护（1查看密文，2查看明文） */
    privacyProtection?: number;
    /** 系统管理选择数据权限 */
    systemPermissions?: number[];
  };

  type batchDeleteHouseUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type batchUpdateAttrUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type batchUpdateDateUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type biangengtaizhangDto = {
    /** 房源建筑面积 */
    buildingArea?: number;
    /** 变更说明 */
    changeRemark?: string;
    /** 客户姓名 */
    customerName?: string;
    /** 当前客户类型 */
    customerType?: string;
    /** 事件类型 */
    eventType?: string;
    /** 生效时间 */
    finishTime?: string;
    /** 户型 */
    frameName?: string;
    /** 事件ID */
    id?: number;
    /** 买受人姓名 */
    orderCustomerName?: string;
    /** 买受人证件号 */
    orderCustomerNumber?: string;
    /** 买受人电话 */
    orderCustomerPhone?: string;
    /** 共有人组 */
    ownerByGroup?: string;
    /** 付款方式 */
    payTypeName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 物业类型 */
    propertyTypeName?: string;
    /** 签约日期 */
    signDate?: string;
    /** 房源签约总价 */
    signTotalPrice?: number;
    /** 标准总价 */
    standardTotalPrice?: number;
    /** 认购日期 */
    subscribeDate?: string;
    /** 房源认购总价 */
    subscribeTotalPrice?: number;
    /** 正合建筑面积 */
    zhBuildingArea?: number;
    /** 正合房号 */
    zhRoomNo?: string;
    /** 正合签约总价 */
    zhSignTotalPrice?: number;
    /** 正合认购总价 */
    zhSubscribeTotalPrice?: number;
  };

  type biangengtaizhangfenyechaxunshaixuan = {
    /** 事件类型 */
    eventTypes?: number[];
    /** (事件)生效日期 */
    finishDate?: timeNameLocalDate[];
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目ID */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 签约日期 */
    signDate?: timeNameLocalDate[];
    /** 认购日期 */
    subscribeDate?: timeNameLocalDate[];
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type bumenbiaoshiti = {
    /** 部门编码 */
    code?: string;
    /** 所属公司ID */
    companyId?: number;
    /** 所属公司名称 */
    companyName?: string;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 钉钉ID */
    dingId?: number;
    /** 部门ID */
    id?: number;
    /** 北森删除状态 */
    isDeleted?: boolean;
    /** 部门名称 */
    name?: string;
    /** 上级组织 */
    parentId?: number;
    /** 负责人 */
    personInCharge?: number;
    /** 北森组织层级全路径 */
    poIdOrgTreePath?: string;
    /** 来源（1同步助手，2系统创建） */
    source?: number;
    /** 状态（0停用；1启用） */
    status?: number;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type caidanbiaoshiti = {
    /** 字段大类（1PC，2移动） */
    broadType?: number;
    /** 子菜单 */
    childMenus?: caidanbiaoshiti[];
    /** 菜单ID */
    id?: number;
    /** 菜单名称 */
    name?: string;
    /** 菜单上级ID */
    parentId?: number;
    /** 菜单排序 */
    sort?: number;
    /** 菜单类型（1菜单，2操作） */
    type?: number;
  };

  type chaxuntiaojian = {
    /** 查询条件key(或者纬度key) */
    key?: string;
    /** 查询条件展示名称(或者纬度展示名称) */
    name?: string;
    /** 查询条件对应的选项值 */
    values?: xuanxiangzhi[];
  };

  type chengjiaokehutaizhang = {
    /** 通讯地址 */
    address?: string;
    /** 建筑面积 */
    buildingArea?: number;
    /** 购房优惠 */
    buyHouseDiscount?: number;
    /** 销售渠道 */
    channel?: string;
    /** 清款日期 */
    clearDate?: string;
    /** 合同编号 */
    contractNumber?: string;
    /** 客户年龄 */
    cusAge?: string;
    /** 客户性别 */
    cusGender?: string;
    /** 客户姓名 */
    cusName?: string;
    /** 买受人证件号 */
    customerNumber?: string;
    /** 开发商房号 */
    devRoomNo?: string;
    /** 预计签约日期 */
    expectSignDate?: string;
    /** 户型 */
    frameName?: string;
    /** 房源状态 */
    houseStatus?: string;
    /** Id值 */
    id?: number;
    /** 首访日期 */
    iniArriveDate?: string;
    /** 首次客户类型 */
    iniCusStatus?: string;
    /** 首电日期 */
    iniPhoneDate?: string;
    /** 套内面积 */
    innerArea?: number;
    /** 婚姻状况 */
    marital?: string;
    /** 老客户房号 */
    oldCustomerRoom?: string;
    /** 老带新优惠 */
    oldWithNewDiscount?: number;
    /** 共有人组 */
    owners?: string;
    /** 付款方式 */
    payType?: string;
    /** 联系电话 */
    phones?: string;
    /** 计划付款组 */
    planPays?: string;
    /** 产品类型 */
    productName?: string;
    /** 物业类型 */
    propertyType?: string;
    /** 户籍情况 */
    register?: string;
    /** 回款组 */
    returnAccounts?: string;
    /** 签约置业顾问 */
    signAgent?: string;
    /** 签约日期 */
    signDate?: string;
    /** 签约套内单价 */
    signInnerUnitPrice?: number;
    /** 签约总价 */
    signTotalPrice?: number;
    /** 签约套面单价 */
    signUnitPrice?: number;
    /** 标准单价 */
    standardPrice?: number;
    /** 标准总价 */
    standardTotalPrice?: number;
    /** 认购职业顾问 */
    subscribeAgent?: string;
    /** 认购日期 */
    subscribeDate?: string;
    /** 认购套内单价 */
    subscribeInnerUnitPrice?: number;
    /** 认购总价 */
    subscribeTotalPrice?: number;
    /** 认购建面单价 */
    subscribeUnitPrice?: number;
    /** 正和房号 */
    zhRoomNo?: string;
  };

  type customerAssignmentLogExportUsingPOSTParams = {
    /** 分配前顾问 */
    approvalAscAgent?: string;
    /** 审批状态 */
    approvalStatus?: number;
    'approvalTime[0].chronology.calendarType'?: string;
    'approvalTime[0].chronology.id'?: string;
    'approvalTime[0].dayOfMonth'?: number;
    'approvalTime[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'approvalTime[0].dayOfYear'?: number;
    'approvalTime[0].era'?: 'BCE' | 'CE';
    'approvalTime[0].leapYear'?: boolean;
    'approvalTime[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'approvalTime[0].monthValue'?: number;
    'approvalTime[0].year'?: number;
    /** CRM审批编号 */
    crmApprovalNo?: string;
    /** 姓名或者电话 */
    nameOrMobile?: string;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目Id */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
  };

  type customerAssignmentLogUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type CustomerAssignParam = {
    /** 置业顾问Id */
    agentIds?: number[];
    /** 客户Id */
    customerIds?: number[];
    /** 项目ID */
    projectId?: number;
  };

  type customerDataImportUsingPOSTParams = {
    /** 项目ID */
    projectId: number;
    /** 登录令牌 */
    token?: any;
  };

  type CustomerInspectListParam = {
    /** 首访日期 */
    cusIniArriveDates?: string;
    /** 梳理状态(0:待梳理,1:已梳理) */
    cusInspectStatus?: number;
    /** 意向级别 */
    cusIntentionPriority?: number[];
    /** 当前客户类型(1:来电,2:来访,3:成交) */
    cusStatus?: number[];
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 置业顾问 */
    serviceAgentIds?: number[];
  };

  type CustomerInspectParam = {
    /** 首访日期 */
    cusIniarriveDates?: timeNameLocalDate[];
    /** 123 */
    cusIniarriveDatesExport?: timeNameLocalDate[];
    /** 梳理人姓名 */
    inspectByName?: string;
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
  };

  type CustomerParam = {
    /** 签约日期 */
    contractDates?: timeNameLocalDate[];
    /** 首访置业顾问 */
    cusIniarriveAgentIds?: number[];
    /** 首访日期 */
    cusIniarriveDates?: timeNameLocalDate[];
    /** 首电置业顾问 */
    cusIniphoneAgentIds?: number[];
    /** 首电日期 */
    cusIniphoneDates?: timeNameLocalDate[];
    /** 房源状态 */
    houseStatus?: number[];
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    /** 认购日期 */
    offerDates?: timeNameLocalDate[];
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 客户类型(0:所有,1:来电，2:来访，3:成交) */
    paramType?: number[];
    /** 电转访(0:否,1:是) */
    phone2Iniarrive?: number;
    /** 项目ID */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 当前置业顾问 */
    serviceAgentIds?: number[];
    /** 页签类型(0:所有,1:来电，2:来访，3:成交) */
    type?: number;
  };

  type customerPhoneOrInArriveDataExportUsingPOSTParams = {
    'contractDates[0].chronology.calendarType'?: string;
    'contractDates[0].chronology.id'?: string;
    'contractDates[0].dayOfMonth'?: number;
    'contractDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'contractDates[0].dayOfYear'?: number;
    'contractDates[0].era'?: 'BCE' | 'CE';
    'contractDates[0].leapYear'?: boolean;
    'contractDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'contractDates[0].monthValue'?: number;
    'contractDates[0].year'?: number;
    /** 首访置业顾问 */
    cusIniarriveAgentIds?: number[];
    'cusIniarriveDates[0].chronology.calendarType'?: string;
    'cusIniarriveDates[0].chronology.id'?: string;
    'cusIniarriveDates[0].dayOfMonth'?: number;
    'cusIniarriveDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniarriveDates[0].dayOfYear'?: number;
    'cusIniarriveDates[0].era'?: 'BCE' | 'CE';
    'cusIniarriveDates[0].leapYear'?: boolean;
    'cusIniarriveDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniarriveDates[0].monthValue'?: number;
    'cusIniarriveDates[0].year'?: number;
    /** 首电置业顾问 */
    cusIniphoneAgentIds?: number[];
    'cusIniphoneDates[0].chronology.calendarType'?: string;
    'cusIniphoneDates[0].chronology.id'?: string;
    'cusIniphoneDates[0].dayOfMonth'?: number;
    'cusIniphoneDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniphoneDates[0].dayOfYear'?: number;
    'cusIniphoneDates[0].era'?: 'BCE' | 'CE';
    'cusIniphoneDates[0].leapYear'?: boolean;
    'cusIniphoneDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniphoneDates[0].monthValue'?: number;
    'cusIniphoneDates[0].year'?: number;
    /** 房源状态 */
    houseStatus?: number[];
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    'offerDates[0].chronology.calendarType'?: string;
    'offerDates[0].chronology.id'?: string;
    'offerDates[0].dayOfMonth'?: number;
    'offerDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'offerDates[0].dayOfYear'?: number;
    'offerDates[0].era'?: 'BCE' | 'CE';
    'offerDates[0].leapYear'?: boolean;
    'offerDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'offerDates[0].monthValue'?: number;
    'offerDates[0].year'?: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 客户类型(0:所有,1:来电，2:来访，3:成交) */
    paramType?: number[];
    /** 电转访(0:否,1:是) */
    phone2Iniarrive?: number;
    /** 项目ID */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 当前置业顾问 */
    serviceAgentIds?: number[];
    /** 登录令牌 */
    token?: any;
    /** 页签类型(0:所有,1:来电，2:来访，3:成交) */
    type: number;
  };

  type customerPhoneOrInArriveUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type customerTradeExportUsingPOSTParams = {
    'contractDates[0].chronology.calendarType'?: string;
    'contractDates[0].chronology.id'?: string;
    'contractDates[0].dayOfMonth'?: number;
    'contractDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'contractDates[0].dayOfYear'?: number;
    'contractDates[0].era'?: 'BCE' | 'CE';
    'contractDates[0].leapYear'?: boolean;
    'contractDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'contractDates[0].monthValue'?: number;
    'contractDates[0].year'?: number;
    /** 首访置业顾问 */
    cusIniarriveAgentIds?: number[];
    'cusIniarriveDates[0].chronology.calendarType'?: string;
    'cusIniarriveDates[0].chronology.id'?: string;
    'cusIniarriveDates[0].dayOfMonth'?: number;
    'cusIniarriveDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniarriveDates[0].dayOfYear'?: number;
    'cusIniarriveDates[0].era'?: 'BCE' | 'CE';
    'cusIniarriveDates[0].leapYear'?: boolean;
    'cusIniarriveDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniarriveDates[0].monthValue'?: number;
    'cusIniarriveDates[0].year'?: number;
    /** 首电置业顾问 */
    cusIniphoneAgentIds?: number[];
    'cusIniphoneDates[0].chronology.calendarType'?: string;
    'cusIniphoneDates[0].chronology.id'?: string;
    'cusIniphoneDates[0].dayOfMonth'?: number;
    'cusIniphoneDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniphoneDates[0].dayOfYear'?: number;
    'cusIniphoneDates[0].era'?: 'BCE' | 'CE';
    'cusIniphoneDates[0].leapYear'?: boolean;
    'cusIniphoneDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniphoneDates[0].monthValue'?: number;
    'cusIniphoneDates[0].year'?: number;
    /** 房源状态 */
    houseStatus?: number[];
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    'offerDates[0].chronology.calendarType'?: string;
    'offerDates[0].chronology.id'?: string;
    'offerDates[0].dayOfMonth'?: number;
    'offerDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'offerDates[0].dayOfYear'?: number;
    'offerDates[0].era'?: 'BCE' | 'CE';
    'offerDates[0].leapYear'?: boolean;
    'offerDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'offerDates[0].monthValue'?: number;
    'offerDates[0].year'?: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 客户类型(0:所有,1:来电，2:来访，3:成交) */
    paramType?: number[];
    /** 电转访(0:否,1:是) */
    phone2Iniarrive?: number;
    /** 项目ID */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 当前置业顾问 */
    serviceAgentIds?: number[];
    /** 登录令牌 */
    token?: any;
    /** 页签类型(0:所有,1:来电，2:来访，3:成交) */
    type: number;
  };

  type customerTradeUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type daifenpeikehuchaxuncanshu = {
    /** 正在审批 */
    approvalStatus?: number;
    /** 当前客户类型 */
    cusStatus?: number[];
    /** 房源状态 */
    houseStatus?: number[];
    /** 客户姓名或者电话 */
    nameOrPhone?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** (当前置业顾问) */
    serviceAgents?: number[];
    /** 顾问是否离职 */
    userStatus?: number;
  };

  type daifenpeikehuxinxizhanshi = {
    /** 正在审批 */
    approvalStatus?: string;
    /** 客户年龄 */
    cusAge?: string;
    /** 首访日期 */
    cusIniArriveDate?: string;
    /** 意向级别 */
    cusIntentionPriority?: string;
    /** 客户姓名 */
    cusName?: string;
    /** 联系电话 */
    cusPhone?: string;
    /** 客户类型 */
    cusStatus?: string;
    /** 客户Id */
    id?: number;
    /** 关联房源汇总 */
    relateHouseSum?: string;
    /** (当前)置业顾问 */
    serviceAgent?: string;
  };

  type daiquerendengluyonghushiti = {
    /** 用户历任项目身份 */
    historyRoleList?: yonghushenfenshiti[];
    /** 用户ID */
    id?: number;
    /** 工号 */
    jobNumber?: string;
    /** 最近一次登录身份 */
    lastIdentity?: string;
    /** 最近一次登录类型（1任职身份，2基础维护，3历史身份） */
    lastIdentityType?: number;
    /** 最近一次授权令牌 */
    lastToken?: string;
    /** 用户管理职责身份 */
    managerRoleList?: yonghushenfenshiti[];
    /** 姓名 */
    name?: string;
    /** 用户任职角色身份 */
    orgRoleList?: yonghushenfenshiti[];
  };

  type deleteBuildingUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type deleteFieldUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type deleteFieldValueUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type deleteHouseUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type deleteUnitUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type denglushenfenquedingqingqiucanshu = {
    /** 身份标识 */
    identity: string;
    /** 身份类型（1任职身份，2基础维护，3历史身份） */
    type: number;
  };

  type detailFieldValueUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type detailUsingPOST1Params = {
    /** 登录令牌 */
    token?: any;
  };

  type detailUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type dimensionUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type dingdanriqipiliangxiugaiqingqiucanshu = {
    /** 项目ID */
    projectId: number;
    /** 修改目标 */
    updateItems: xiugairiqiliuchengewaicanshu[];
  };

  type dingdingpeizhichaxuncanshu = {
    /** 企业编码（zhgf正合股份，gyhl贵阳合略） */
    enterpriseCode: string;
  };

  type dingdingshenpipeizhibianjicanshu = {
    /** 响应方式（1钉钉审批，2免审同意，3免审拒绝） */
    approvalResponse?: number;
    /** 配置ID */
    id?: number;
    /** 维护备注 */
    note?: string;
    /** processCode */
    processCode?: string;
  };

  type dingdingshenpipeizhichaxuncanshu = {
    /** 环境（test测试，prod正式） */
    active?: string;
  };

  type dingdingshenpipeizhishiti = {
    /** 环境（test测试，prod正式） */
    active?: string;
    /** 审批响应（1钉钉审批，2免审同意，3免审拒绝） */
    approvalResponse?: number;
    /** 审批响应值 */
    approvalResponseValue?: string;
    /** 审批类型（1客户分配，2认购，3签约，4更名，5退房，6挞定，7认购换房，8签约换房，9认购其它，10签约其它，11再购） */
    approvalType?: number;
    /** 审批类型值 */
    approvalTypeValue?: string;
    /** 审批大类（1营销，2佣金，3提成） */
    broadType?: number;
    /** 审批大类值 */
    broadTypeValue?: string;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 企业编码（zhgf正合股份，gyhl贵阳合略） */
    enterpriseCode?: string;
    /** 企业ID */
    enterpriseId?: number;
    /** 配置ID */
    id?: number;
    /** 维护备注 */
    note?: string;
    /** 模版编码 */
    processCode?: string;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type dingdingshouquandengluqingqiucanshu = {
    /** 授权码 */
    code: string;
    /** 企业编码 */
    enterpriseCode: string;
  };

  type downloadIdentityUsingPOSTParams = {
    /** 公司ID */
    companyId?: number;
    /** 工号/姓名 */
    jobNumberOrName?: string;
    /** 主任职组织 */
    mainOrgName?: string;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 岗位ID */
    positions?: number[];
    /** 角色ID */
    roles?: number[];
    /** 搜索关键字 */
    searchContent?: string;
    /** 来源（1同步助手，2CRM） */
    source?: number;
    /** 登录令牌 */
    token?: any;
  };

  type downloadMappingUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type downloadProjectUserUsingPOSTParams = {
    /** 项目ID */
    id: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
  };

  type editApprovalConfigUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type editNoteUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type ErrorSum = {
    /** 明细 */
    detail?: string[];
    /** 标题 */
    title?: string;
  };

  type Exceldaorujieguo = {
    /** 错误汇总 */
    errorSum?: ErrorSum[];
    /** 导入日志 */
    log?: string[];
    /** 导入结果 true成功 false失败 */
    result?: boolean;
  };

  type executeAssignUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type exportBottomUsingPOSTParams = {
    /** 房源ID */
    ids: number[];
    /** 登录令牌 */
    token?: any;
  };

  type exportDetailUsingPOSTParams = {
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目Id */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
    /** 任务归属月(yyyyMM) */
    yearsMonth?: string;
  };

  type exportEditTemplateUsingPOSTParams = {
    /** 项目任务ID */
    ids?: number[];
    /** 登录令牌 */
    token?: any;
  };

  type exportExcelUsingPOSTParams = {
    /** 楼栋号 */
    buildingNo?: string;
    /** 楼层 */
    floor?: string;
    /** 户型（基础配置ID） */
    frameIds?: number[];
    /** 组团/期数（基础配置ID） */
    groupIds?: number[];
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 产品类型（基础配置ID） */
    productIds?: number[];
    /** 项目ID */
    projectId: number;
    /** 房间号 */
    roomNo?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 房源状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number[];
    /** 登录令牌 */
    token?: any;
    /** 单元号 */
    unitNo?: string;
  };

  type exportProjectDetailUsingPOSTParams = {
    /** 公司Id */
    companyId: number;
    /** 项目任务ID */
    ids?: number[];
    /** 登录令牌 */
    token?: any;
  };

  type exportReturnUsingPOSTParams = {
    /** 房源ID */
    ids: number[];
    /** 项目ID */
    projectId: number;
    /** 登录令牌 */
    token?: any;
  };

  type exportUsingPOST1Params = {
    /** 业绩归属角色（1首访置业顾问，2认购置业顾问，3认购经理，4签约置业顾问，5签约经理，6回款置业顾问，7回款经理，8清款置业顾问，9交房置业顾问，10佣金开票置业顾问，11佣金开票经理，12佣金回款置业顾问，13佣金回款经理，14业绩归属秘书，15业绩归属运营总，16归属运营部） */
    attributionRoleId?: number;
    /** 业绩归属姓名/工号 */
    attributionUser?: string;
    /** 公司ID */
    companyId: number;
    /** 部门ID */
    departmentIds?: number[];
    /** 订单日期类型（1认购，2签约，3代理费开票日期，4代理费回款日期） */
    orderDateType?: number;
    'orderDate[0].chronology.calendarType'?: string;
    'orderDate[0].chronology.id'?: string;
    'orderDate[0].dayOfMonth'?: number;
    'orderDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'orderDate[0].dayOfYear'?: number;
    'orderDate[0].era'?: 'BCE' | 'CE';
    'orderDate[0].leapYear'?: boolean;
    'orderDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'orderDate[0].monthValue'?: number;
    'orderDate[0].year'?: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目名称 */
    projectName?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type exportUsingPOST2Params = {
    /** 统计大类（1项目业绩，2公司业绩，3集团业绩） */
    broadType: number;
    /** 公司ID */
    companyId?: number;
    /** 周期类型（日day，月month，年year，周week，季quarter） */
    dateType?: string;
    'dates[0].chronology.calendarType'?: string;
    'dates[0].chronology.id'?: string;
    'dates[0].dayOfMonth'?: number;
    'dates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'dates[0].dayOfYear'?: number;
    'dates[0].era'?: 'BCE' | 'CE';
    'dates[0].leapYear'?: boolean;
    'dates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'dates[0].monthValue'?: number;
    'dates[0].year'?: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目状态（1在售，2撤场） */
    projectStatus?: number[];
    /** 物业类型 */
    propertyTypes?: number[];
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
    /** 统计类型：1成交汇总，2付款方式，3物业类型，4销售渠道，5置业顾问，6项目汇总，7部门汇总，8集团汇总 */
    type: number;
  };

  type exportUsingPOST3Params = {
    /** 清款状态（1清款，2未清款） */
    clears?: number[];
    /** 客户姓名 */
    customerName?: string;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 产品类型（基础配置ID） */
    productIds?: number[];
    /** 项目ID */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    'signDate[0].chronology.calendarType'?: string;
    'signDate[0].chronology.id'?: string;
    'signDate[0].dayOfMonth'?: number;
    'signDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'signDate[0].dayOfYear'?: number;
    'signDate[0].era'?: 'BCE' | 'CE';
    'signDate[0].leapYear'?: boolean;
    'signDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'signDate[0].monthValue'?: number;
    'signDate[0].year'?: number;
    /** 房源状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number[];
    'subscribeDate[0].chronology.calendarType'?: string;
    'subscribeDate[0].chronology.id'?: string;
    'subscribeDate[0].dayOfMonth'?: number;
    'subscribeDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'subscribeDate[0].dayOfYear'?: number;
    'subscribeDate[0].era'?: 'BCE' | 'CE';
    'subscribeDate[0].leapYear'?: boolean;
    'subscribeDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'subscribeDate[0].monthValue'?: number;
    'subscribeDate[0].year'?: number;
    /** 登录令牌 */
    token?: any;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type exportUsingPOST4Params = {
    /** 公司Id */
    companyId: number;
    /** 运营部ID列表 */
    departmentIds?: number[];
    /** 任务归属结束月(yyyyMM) */
    endMonth?: string;
    /** 是否撤场 */
    isAnnul?: boolean;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目Id(接口忽略) */
    projectId?: number;
    /** 项目关键字 */
    projectName?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 任务归属开始月(yyyyMM) */
    startMonth?: string;
    /** 登录令牌 */
    token?: any;
  };

  type exportUsingPOSTParams = {
    /** 事件类型 */
    eventTypes?: number[];
    'finishDate[0].chronology.calendarType'?: string;
    'finishDate[0].chronology.id'?: string;
    'finishDate[0].dayOfMonth'?: number;
    'finishDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'finishDate[0].dayOfYear'?: number;
    'finishDate[0].era'?: 'BCE' | 'CE';
    'finishDate[0].leapYear'?: boolean;
    'finishDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'finishDate[0].monthValue'?: number;
    'finishDate[0].year'?: number;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目ID */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    'signDate[0].chronology.calendarType'?: string;
    'signDate[0].chronology.id'?: string;
    'signDate[0].dayOfMonth'?: number;
    'signDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'signDate[0].dayOfYear'?: number;
    'signDate[0].era'?: 'BCE' | 'CE';
    'signDate[0].leapYear'?: boolean;
    'signDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'signDate[0].monthValue'?: number;
    'signDate[0].year'?: number;
    'subscribeDate[0].chronology.calendarType'?: string;
    'subscribeDate[0].chronology.id'?: string;
    'subscribeDate[0].dayOfMonth'?: number;
    'subscribeDate[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'subscribeDate[0].dayOfYear'?: number;
    'subscribeDate[0].era'?: 'BCE' | 'CE';
    'subscribeDate[0].leapYear'?: boolean;
    'subscribeDate[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'subscribeDate[0].monthValue'?: number;
    'subscribeDate[0].year'?: number;
    /** 登录令牌 */
    token?: any;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type fangyuanjichupeizhi = {
    /** 户型 */
    frameFields?: ziduanxuanxiangzhibiaoshiti[];
    /** 组团/期数 */
    groupFields?: ziduanxuanxiangzhibiaoshiti[];
    /** 产品类型 */
    productFields?: ziduanxuanxiangzhibiaoshiti[];
  };

  type fenpeirenwucanshu = {
    /** 置业顾问任务Id */
    ids?: number[];
    /** 锁房任务/元 */
    lockValue?: number;
    /** 签约任务/元 */
    signValue?: number;
    /** 认购任务/元 */
    subscribeValue?: number;
  };

  type fenpeirenwuhuoqushengyuchanzhiDto = {
    /** 锁房任务/元 */
    lockValue?: number;
    /** 签约任务/元 */
    signValue?: number;
    /** 认购任务/元 */
    subscribeValue?: number;
  };

  type fenyexinxishitibiangengtaizhangDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: biangengtaizhangDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitichengjiaokehutaizhang = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: chengjiaokehutaizhang[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitidaifenpeikehuxinxizhanshi = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: daifenpeikehuxinxizhanshi[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitijiaoseliebiaoDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: jiaoseliebiaoDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitikehufenpeijilushuju = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: kehufenpeijilushuju[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitikehushuli = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: kehushuli[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitikehushulijilu = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: kehushulijilu[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitilaidianlaifangshuju = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: laidianlaifangshuju[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitishenpishujuDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: shenpishujuDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishititongburenwujiluDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: tongburenwujiluDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitituanduimingceDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: tuanduimingceDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitixiangmubiaoshiti = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: xiangmubiaoshiti[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitixiangmufangyuanDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: xiangmufangyuanDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitixiangmurenwufenyeshujuDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: xiangmurenwufenyeshujuDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitixiangmutaizhangDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: xiangmutaizhangDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitiyejitaizhangDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: yejitaizhangDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitiyejitongjiDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: yejitongjiDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitiyonghuliebiaoDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: yonghuliebiaoDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type fenyexinxishitizhiyeguwenrenwufenyeshujuDto = {
    /** 是否有下一页 */
    hasNextPage?: boolean;
    /** 分页数据 */
    list?: zhiyeguwenrenwufenyeshujuDto[];
    /** 下一页 */
    nextPage?: number;
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
    /** 汇总数据 */
    summary?: Record<string, any>;
    /** 总条数 */
    total?: number;
  };

  type gangweibiaoDto = {
    /** 岗位ID */
    id?: number;
    /** 是否映射 */
    isMapping?: boolean;
    /** 岗位名称 */
    name?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
  };

  type getAssignmentVolumeUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type getConfigUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type getQueryConditionUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type gongsijiyujingguizebaocuncanshu = {
    /** 公司ID */
    companyId?: number;
    /** 周期（天） */
    cycleValue?: number;
    /** 交易时间确认类型（1沿用旧房源的认购签约日期，2以换房审批日期为认购签约日期） */
    saleDateType?: number;
    /** 保存类型（1回访周期，2认购未签约周期，3签约未回款周期，4交易时间确认类型） */
    warningSaveType?: number;
  };

  type gongyongListxiangyingdingdingshenpipeizhishiti = {
    /** 数据 */
    list?: dingdingshenpipeizhishiti[];
  };

  type gongyongListxiangyingxiangmutaizhangDto = {
    /** 数据 */
    list?: xiangmutaizhangDto[];
  };

  type gongyongListxiangyingyejitaizhanglishiDto = {
    /** 数据 */
    list?: yejitaizhanglishiDto[];
  };

  type identityUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type importBottomUsingPOSTParams = {
    /** 公司ID */
    companyId: number;
    /** 登录令牌 */
    token?: any;
  };

  type importExcelUsingPOST1Params = {
    /** 公司ID */
    companyId: number;
    /** 登录令牌 */
    token?: any;
  };

  type importExcelUsingPOSTParams = {
    /** 项目ID */
    projectId: number;
    /** 登录令牌 */
    token?: any;
  };

  type importReturnUsingPOSTParams = {
    /** 项目ID */
    projectId: number;
    /** 登录令牌 */
    token?: any;
  };

  type inspectListDataExportUsingPOSTParams = {
    'cusIniArriveDates[0].chronology.calendarType'?: string;
    'cusIniArriveDates[0].chronology.id'?: string;
    'cusIniArriveDates[0].dayOfMonth'?: number;
    'cusIniArriveDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniArriveDates[0].dayOfYear'?: number;
    'cusIniArriveDates[0].era'?: 'BCE' | 'CE';
    'cusIniArriveDates[0].leapYear'?: boolean;
    'cusIniArriveDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniArriveDates[0].monthValue'?: number;
    'cusIniArriveDates[0].year'?: number;
    /** 梳理状态(0:待梳理,1:已梳理) */
    cusInspectStatus?: number;
    /** 意向级别 */
    cusIntentionPriority?: number[];
    /** 当前客户类型(1:来电,2:来访,3:成交) */
    cusStatus?: number[];
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目Id */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 置业顾问 */
    serviceAgentIds?: number[];
    /** 登录令牌 */
    token?: any;
  };

  type inspectListUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type inspectLogDataExportUsingPOSTParams = {
    'cusIniarriveDatesExport[0].chronology.calendarType'?: string;
    'cusIniarriveDatesExport[0].chronology.id'?: string;
    'cusIniarriveDatesExport[0].dayOfMonth'?: number;
    'cusIniarriveDatesExport[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniarriveDatesExport[0].dayOfYear'?: number;
    'cusIniarriveDatesExport[0].era'?: 'BCE' | 'CE';
    'cusIniarriveDatesExport[0].leapYear'?: boolean;
    'cusIniarriveDatesExport[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniarriveDatesExport[0].monthValue'?: number;
    'cusIniarriveDatesExport[0].year'?: number;
    'cusIniarriveDates[0].chronology.calendarType'?: string;
    'cusIniarriveDates[0].chronology.id'?: string;
    'cusIniarriveDates[0].dayOfMonth'?: number;
    'cusIniarriveDates[0].dayOfWeek'?:
      | 'FRIDAY'
      | 'MONDAY'
      | 'SATURDAY'
      | 'SUNDAY'
      | 'THURSDAY'
      | 'TUESDAY'
      | 'WEDNESDAY';
    'cusIniarriveDates[0].dayOfYear'?: number;
    'cusIniarriveDates[0].era'?: 'BCE' | 'CE';
    'cusIniarriveDates[0].leapYear'?: boolean;
    'cusIniarriveDates[0].month'?:
      | 'APRIL'
      | 'AUGUST'
      | 'DECEMBER'
      | 'FEBRUARY'
      | 'JANUARY'
      | 'JULY'
      | 'JUNE'
      | 'MARCH'
      | 'MAY'
      | 'NOVEMBER'
      | 'OCTOBER'
      | 'SEPTEMBER';
    'cusIniarriveDates[0].monthValue'?: number;
    'cusIniarriveDates[0].year'?: number;
    /** 梳理人姓名 */
    inspectByName?: string;
    /** 客户名称或者电话 */
    nameOrMobile?: string;
    /** 当前页数 */
    'pageInfo.pageNum'?: number;
    /** 当前条数 */
    'pageInfo.pageSize'?: number;
    /** 排序字段 */
    'pageSort.orderField'?: string;
    /** 排序方式：asc升序，desc降序 */
    'pageSort.orderType'?: string;
    /** 项目Id */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 登录令牌 */
    token?: any;
  };

  type inspectLogUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type inspectUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type isLoginUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type jiaosebiaoshiti = {
    /** 业务运营选择数据权限 */
    businessPermissions?: number[];
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 客户数据权限（1查看个人归属客户，2查看项目全部客户） */
    customerPermissions?: number;
    /** 归属企业 */
    enterpriseId?: number;
    /** 角色ID */
    id?: number;
    /** 是否全部移动端菜单权限 */
    isAllMenuMobilePermission?: boolean;
    /** 是否全部PC端菜单权限 */
    isAllMenuPermission?: boolean;
    /** 是否所在公司数据权限 */
    isCompanyDataPermission?: boolean;
    /** 是否所在部门数据权限 */
    isDepartmentDataPermission?: boolean;
    /** 是否所在项目数据权限 */
    isProjectDataPermission?: boolean;
    /** 是否选择范围数据权限 */
    isRangeDataPermission?: boolean;
    /** 是否系统管理数据权限 */
    isSystemManagerDataPermission?: boolean;
    /** 移动权限菜单 */
    menuMobilePermissions?: number[];
    /** PC权限菜单 */
    menuPermissions?: number[];
    /** 角色名称 */
    name?: string;
    /** 映射岗位 */
    positions?: number[];
    /** 隐私保护（1查看密文，2查看明文） */
    privacyProtection?: number;
    /** 系统管理选择数据权限 */
    systemPermissions?: number[];
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type jiaoseliebiaoDto = {
    /** 角色ID */
    id?: number;
    /** 角色名称 */
    name?: string;
    /** 映射岗位 */
    positionName?: string;
    /** 修改时间 */
    updatedTime?: string;
  };

  type jiaoseliebiaofenyechaxunshaixuan = {
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 岗位ID */
    positions?: number[];
    /** 搜索关键字 */
    searchContent?: string;
  };

  type jiaosexitongguanlishujuquanxianbiaoshiti = {
    /** 公司ID */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 下级部门 */
    departments?: bumenbiaoshiti[];
    /** 自增ID */
    id?: number;
    /** 角色ID */
    roleId?: number;
  };

  type jiaoseyingshegangweiqingqiucanshu = {
    /** 角色ID */
    id: number;
    /** 岗位ID */
    positions?: number[];
  };

  type jichupeizhichaxunqingqiucanshu = {
    /** 字段大类（1房源定义，2客户定义，3成交定义） */
    broadType: number;
    /** 业务ID */
    businessId: number;
    /** 查询层级（2公司级，3项目级） */
    level: number;
  };

  type kehufenpeijiluchaxuncanshu = {
    /** 分配前顾问 */
    approvalAscAgent?: string;
    /** 审批状态 */
    approvalStatus?: number;
    /** 分配时间 */
    approvalTime?: timeNameLocalDate[];
    /** CRM审批编号 */
    crmApprovalNo?: string;
    /** 姓名或者电话 */
    nameOrMobile?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
  };

  type kehufenpeijilushuju = {
    /** 审批状态 */
    approvalStatus?: string;
    /** 分配时间 */
    approvalTime?: string;
    /** 正在审批 */
    approvaling?: string;
    /** 分配人 */
    assignmentByName?: string;
    /** 分配后顾问 */
    assignmentDescAgentName?: string;
    /** 分配前顾问 */
    assignmentSrcAgentName?: string;
    /** CRM审批编号 */
    crmApprovalNo?: number;
    /** 客户Id */
    cusId?: number;
    /** 首访日期 */
    cusIniArriveDate?: string;
    /** 意向等级 */
    cusIntentionPriority?: string;
    /** 客户姓名 */
    cusName?: string;
    /** 联系电话 */
    cusPhone?: string;
    /** 当前客户类型 */
    cusStatus?: string;
    /** 审批结束时间 */
    finishedTime?: string;
    /** id */
    id?: number;
    /** 最近审批人 */
    recentlyApprovalName?: string;
    /** 关联房源汇总 */
    relateHouseSum?: string;
    /** 审批评论 */
    remark?: string;
  };

  type kehufenxibiaogezhanshishuju = {
    /** 纬度名 */
    dimensionName?: string;
    /** Id值 */
    id?: number;
    /** 数量 */
    num?: number;
    /** 占比 */
    ratio?: number;
  };

  type kehufenxichaxuncanshu = {
    /** 查询条件的名称 */
    conditionName?: string;
    conditionType?: number;
    /** 当前客户类型 */
    cusStatus?: number;
    /** 纬度选择 */
    dimensionName?: string;
    dimensionType?: number;
    /** 首访日期 */
    iniArriveDate?: string;
    /** 首电日期 */
    iniPhoneDate?: string;
    /** 意向级别 */
    intentionPriority?: number;
    /** 项目Id */
    projectId?: number;
    /** 认购日期 */
    subscribeDate?: string;
    /** 查询条件的值 */
    values?: number[];
  };

  type kehushuli = {
    /** 来访次数 */
    arriveCount?: number;
    /** 回访次数 */
    contactCount?: number;
    /** 知晓途径(单个基础配置值) */
    cusAdvRoute?: number;
    /** 客户年龄(单个基础配置值) */
    cusAge?: number;
    /** 对比点 */
    cusCandidateFactors?: string;
    /** 对比楼盘 */
    cusCandidateProjects?: string;
    /** 客户白描 */
    cusDescription?: string;
    /** 项目抗性(多个基础配置值) */
    cusDisfavorFactor?: string;
    /** 家庭结构(单个基础配置值) */
    cusFamily?: number;
    /** 项目偏好(多个基础配置值) */
    cusFavorFactor?: string;
    /** 客户性别(字典值) */
    cusGender?: number;
    /** 首访日期 */
    cusIniArriveDate?: string;
    /** 最近梳理意见 */
    cusInspectOpinion?: string;
    /** 梳理状态 */
    cusInspectStatus?: string;
    /** 意向面积(多个基础配置值) */
    cusIntentionArea?: string;
    /** 意向面积 */
    cusIntentionAreaDesc?: string;
    /** 意向楼层 */
    cusIntentionFloor?: string;
    /** 关注户型(多个基础配置值) */
    cusIntentionFrame?: string;
    /** 意向级别(字典值) */
    cusIntentionPriority?: number;
    /** 意向级别 */
    cusIntentionPriorityDesc?: string;
    /** 需求产品类型(单个基础配置值) */
    cusIntentionProduct?: number;
    /** 需求产品类型描述(单个基础配置值) */
    cusIntentionProductDesc?: string;
    /** 关注业务类型(字典值) */
    cusIntentionProperty?: number;
    /** 需求套型(多个基础配置值) */
    cusIntentionRoomSet?: string;
    /** 意向总价(单个基础配置值) */
    cusIntentionTotalPrice?: number;
    /** 最近来访日期 */
    cusLastArriveDate?: string;
    /** 居住区域(单个基础配置值) */
    cusLivingZone?: number;
    /** 客户姓名 */
    cusName?: string;
    /** 联系电话 */
    cusPhone?: string;
    /** 当前客户类型 */
    cusStatus?: string;
    /** 置业动机(单个基础配置值) */
    cusTradePurpose?: number;
    /** 置业次数(字典值) */
    cusTradeTimes?: number;
    /** 工作区域(单个基础配置值) */
    cusWorkZone?: number;
    /** 自定义字段 */
    customFields?: kehuzidingyizhishiti[];
    /** Id值 */
    id?: number;
    /** 置业顾问 */
    serviceAgent?: string;
  };

  type kehushuli0 = {
    /** 客户信息 */
    customer?: kehuxinxibiaoshiti;
    /** 梳理信息 */
    customerInspect?: kehushulibiaoshiti;
  };

  type kehushulibiaoshiti = {
    /** 创建时间 */
    createdTime?: string;
    /** 客户Id */
    cusId?: number;
    /** Id值 */
    id?: number;
    /** 梳理人Id */
    inspectById?: number;
    /** 梳理人姓名 */
    inspectByName?: string;
    /** 梳理意见 */
    inspectDetail?: string;
    /** 项目ID */
    projectId?: number;
  };

  type kehushulijilu = {
    /** 梳理日期 */
    createdTime?: string;
    /** 首访日期 */
    cusIniarriveDate?: string;
    /** 客户姓名 */
    cusName?: string;
    /** 联系电话 */
    cusPhone?: string;
    /** 当前客户类型 */
    cusStatus?: string;
    /** Id值 */
    id?: number;
    /** 梳理人姓名 */
    inspectByName?: string;
    /** 梳理意见 */
    inspectDetail?: string;
  };

  type kehuxinxibiaoshiti = {
    /** 创建人Id */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 知晓途径 */
    cusAdvRoute?: number;
    /** 客户年龄 */
    cusAge?: number;
    /** 对比点 */
    cusCandidateFactors?: string;
    /** 对比楼盘 */
    cusCandidateProjects?: string;
    /** 电话 */
    cusDefaultPhone?: string;
    /** 客户白描 */
    cusDescription?: string;
    /** 项目抗性 */
    cusDisfavorFactor?: string;
    /** 家庭结构 */
    cusFamily?: number;
    /** 项目偏好 */
    cusFavorFactor?: string;
    /** 客户性别 */
    cusGender?: number;
    /** 首访顾问Id */
    cusIniArriveAgentId?: number;
    /** 首访日期 */
    cusIniArriveDate?: string;
    /** 首电顾问Id */
    cusIniPhoneAgentId?: number;
    /** 首电日期 */
    cusIniPhoneDate?: string;
    /** 最近梳理意见 */
    cusInspectOpinion?: string;
    /** 梳理状态(空,0:待梳理,1:已梳理) */
    cusInspectStatus?: number;
    /** 意向面积 */
    cusIntentionArea?: string;
    /** 意向楼层 */
    cusIntentionFloor?: string;
    /** 关注户型 */
    cusIntentionFrame?: string;
    /** 意向级别 */
    cusIntentionPriority?: number;
    /** 需求产品类型 */
    cusIntentionProduct?: number;
    /** 关注物业类型 */
    cusIntentionProperty?: number;
    /** 需求套型 */
    cusIntentionRoomSet?: string;
    /** 意向总价 */
    cusIntentionTotalPrice?: number;
    /** 是否为来访客户 */
    cusIsArrived?: number;
    /** 是否为来电客户 */
    cusIsPhoned?: number;
    /** 是否为成交客户 */
    cusIsTraded?: number;
    /** 最近回访日期 */
    cusLastArriveDate?: string;
    /** 居住区域 */
    cusLivingZone?: number;
    /** 客户姓名 */
    cusName?: string;
    /** 当前客户类型 */
    cusStatus?: string;
    /** 置业动机 */
    cusTradePurpose?: number;
    /** 置业次数 */
    cusTradeTimes?: number;
    /** 工作区域 */
    cusWorkZone?: number;
    /** 自定义字段值 */
    customFields?: kehuzidingyizhishiti[];
    /** D+Id值 */
    dPlusId?: number;
    /** ID值 */
    id?: number;
    /** 首次客户类型状态(来电、来访) */
    iniStatus?: number;
    /** 同步老数据的中间字段(当前服务置业顾问工号) */
    jobNumber?: string;
    /** 最新回访记录ID值 */
    lastCustomerContactId?: number;
    /** 最近梳理意见Id值 */
    lastCustomerInspectId?: number;
    /** 老表的Id值 */
    oldId?: number;
    /** 其他号码 */
    otherPhones?: string[];
    /** 项目Id */
    projectId?: number;
    /** 置业顾问Id */
    serviceAgentId?: number;
    /** 更新人Id */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type kehuzidingyizhishiti = {
    /** 创建时间 */
    createdTime?: string;
    /** 客户Id */
    cusId?: number;
    /** 自定义属性字段名称 */
    customDefineFieldName?: string;
    /** 字典名称Id */
    fieldId?: number;
    /** 字典名称 */
    fieldName?: string;
    /** 字典值类型（1下拉，2日期，3文本，4数字） */
    fieldType?: number;
    /** 字典值 */
    fieldValue?: string;
    /** 字典值Id */
    fieldValueId?: string;
    /** 主键 */
    id?: number;
    /** 是否必填(1：必填，2：选填，3：必填不可改) */
    isRequired?: number;
    /** 当为下拉列表时的下拉值选项(fieldValueId,fieldValue) */
    listValues?: kehuzidingyizhishiti[];
    /** 是否可以多选(0:单选，1：多选) */
    multiply?: number;
    /** 项目Id */
    projectId?: number;
  };

  type laidianlaifangshuju = {
    /** 知晓途径 */
    cusAdvRoute?: string;
    /** 客户年龄 */
    cusAge?: string;
    /** 来访次数 */
    cusArriveCount?: number;
    /** 回访次数 */
    cusContactCount?: number;
    /** 客户白描 */
    cusDescription?: string;
    /** 项目抗性 */
    cusDisfavorFactor?: string;
    /** 家庭结构 */
    cusFamily?: string;
    /** 项目偏好 */
    cusFavorFactor?: string;
    /** 客户性别 */
    cusGender?: string;
    /** 首访置业顾问 */
    cusIniarriveAgent?: string;
    /** 首访日期 */
    cusIniarriveDate?: string;
    /** 首电置业顾问 */
    cusIniphoneAgent?: string;
    /** 首电日期 */
    cusIniphoneDate?: string;
    /** 意向面积 */
    cusIntentionArea?: string;
    /** 意向级别 */
    cusIntentionPriority?: string;
    /** 需求产品类型 */
    cusIntentionProduct?: string;
    /** 关注业务类型 */
    cusIntentionProperty?: string;
    /** 需求套型 */
    cusIntentionRoomset?: string;
    /** 意向总价 */
    cusIntentionTotalprice?: string;
    /** 最近回访日期 */
    cusLastContactDate?: string;
    /** 最近回访记录 */
    cusLastContactDetail?: string;
    /** 最近回访方式 */
    cusLastContactType?: string;
    /** 居住区域 */
    cusLivingZone?: string;
    /** 客户姓名 */
    cusName?: string;
    /** 联系电话 */
    cusPhone?: string;
    /** 当前客户类型 */
    cusStatus?: string;
    /** 置业动机 */
    cusTradePurpose?: string;
    /** 置业次数 */
    cusTradeTimes?: string;
    /** 工作区域 */
    cusWorkZone?: string;
    customField1?: string;
    customField10?: string;
    customField11?: string;
    customField12?: string;
    customField13?: string;
    customField14?: string;
    customField15?: string;
    customField16?: string;
    customField17?: string;
    customField18?: string;
    customField19?: string;
    customField2?: string;
    customField20?: string;
    customField3?: string;
    customField4?: string;
    customField5?: string;
    customField6?: string;
    customField7?: string;
    customField8?: string;
    customField9?: string;
    /** Id值 */
    id?: number;
    /** 首次类型 */
    initStatus?: string;
    /** 认购日期 */
    offerDates?: string;
  };

  type logoutUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type mappingPositionUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type overviewUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type paixushiti = {
    /** 排序字段 */
    orderField?: string;
    /** 排序方式：asc升序，desc降序 */
    orderType?: string;
  };

  type pilianggengxintaizhangxiangqingchaxunqingqiucanshu = {
    /** 房源ID */
    houseIds: number[];
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目ID */
    projectId: number;
    /** 搜索关键字 */
    searchContent?: string;
  };

  type pwdLoginUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type qingqiucanshuint = {
    /** 业务ID */
    id: number;
  };

  type qingqiucanshulong = {
    /** 业务ID */
    id: number;
  };

  type qrLoginUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryAgentUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryAllUsingPOST1Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryAllUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryAnalysisUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryApprovalUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryBatchUpdateDetailUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryBuildingFrameAnalysisUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryByCompanyIdUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryByDepartmentIdUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryByEnterpriseIdUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryByTypeUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryConsultantUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryCustomFieldRelUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryHistoryUsingPOST1Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryHistoryUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryHouseBasicsConfigUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryManagerUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryOfficeUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryStatisticsUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST10Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST11Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST12Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST13Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST14Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST15Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST16Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST1Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST2Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST3Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST4Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST5Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST6Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST7Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST8Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOST9Params = {
    /** 登录令牌 */
    token?: any;
  };

  type queryUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type queryViewUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type removeUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveCompanyRuleUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveFieldUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveFieldValueUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveProjectRuleUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveRequiredConfigUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type saveUsingPOST1Params = {
    /** 登录令牌 */
    token?: any;
  };

  type saveUsingPOST2Params = {
    /** 登录令牌 */
    token?: any;
  };

  type saveUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type shangchuanshouquanqingqiucanshu = {
    /** 类型（1客户分配，2认购，3签约，4更名，5退房，6挞定，7认购换房，8签约换房，9认购其它，10签约其它） */
    type: number;
  };

  type shenpishujuDto = {
    /** 发起人 */
    applyBy?: string;
    /** 审批响应 */
    approvalResponse?: string;
    /** 开始时间 */
    createdTime?: string;
    /** 钉钉审批编号 */
    dingInstanceId?: string;
    /** 结束时间 */
    finishTime?: string;
    /** CRM审批编号 */
    id?: number;
    /** 加密审批编号 */
    instanceId?: string;
    /** 最近一次审批人 */
    lastAuditBy?: string;
    /** 关联项目 */
    projectName?: string;
    /** 审批状态 */
    status?: string;
    /** 审批状态（1新创建，2审批中，3被终止，4通过，5拒绝，6取消） */
    statusId?: number;
    /** 审批类型 */
    type?: string;
    /** 审批类型（1客户分配，2认购，3签约，4更名，5退房，6挞定，7认购换房，8签约换房，9认购其它，10签约其它，11再购） */
    typeId?: number;
    /** 详情页URL */
    url?: string;
  };

  type shenpishujufenyechaxunshaixuan = {
    /** 发起人 */
    applyBy?: string;
    /** 最近审批人 */
    lastAuditBy?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目ID */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 开始时间 */
    startTime?: timeNameLocalDate[];
    /** 审批状态（1新创建，2审批中，3被终止，4通过，5拒绝，6取消） */
    status?: number;
    /** 审批类型 */
    types?: number[];
  };

  type STSwenjianshangchuanshouquanxinxi = {
    /** 临时访问密钥ID */
    accessKeyId?: string;
    /** 临时访问密钥Secret */
    accessKeySecret?: string;
    /** Bucket名称 */
    bucket?: string;
    /** 过期时间 */
    expiration?: string;
    /** 文件ID（用于拼接文件名称，例：fileId_fileName.jpg） */
    fileId?: number;
    /** 文件路径 */
    filePath?: string;
    /** Bucket所在地域 */
    region?: string;
    /** 安全令牌 */
    securityToken?: string;
  };

  type syncUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type tongbujiluliebiaofenyechaxunshaixuan = {
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 搜索关键字 */
    searchContent?: string;
    /** 开始时间 */
    startTime?: timeNameLocalDate[];
    /** 任务状态ID */
    status?: number;
    /** 任务类型ID */
    types?: number[];
  };

  type tongburenwujiluDto = {
    /** 结束时间 */
    endTime?: string;
    /** 错误信息 */
    errorMsg?: string;
    /** 任务ID */
    id?: number;
    /** 开始时间 */
    startTime?: string;
    /** 任务状态 */
    statusValue?: string;
    /** 耗时（分） */
    time?: number;
    /** 任务类型 */
    typeValue?: string;
  };

  type tongjishujuxiangqingDto = {
    /** 建筑面积 */
    buildingArea?: number;
    /** 套数 */
    number?: number;
    /** 标准总价（万） */
    standardTotalPrice?: number;
    /** 状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number;
  };

  type tuanduimingceDto = {
    /** ID */
    id?: number;
    /** 工号 */
    jobNumber?: string;
    /** 用户名称 */
    name?: string;
    /** 岗位名称 */
    positionName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 角色名称 */
    roleName?: string;
    /** 人事状态 */
    statusValue?: string;
    /** 细分类型 */
    subdivideType?: string;
    /** 分类 */
    type?: string;
  };

  type UpdateAssignmentConfigParam = {
    /** 配置Id */
    configId?: number;
    /** 是否开启 */
    isAssignment?: boolean;
  };

  type updateAttrUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type updateConfigAssignmentUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type updateConfigParamUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type UpdateDayConfigParam = {
    /** 配置Id */
    configId?: number;
    /** 分配修改窗口期（天） */
    distributionDay?: number;
    /** 任务修改冻结（天） */
    freezeDay?: number;
  };

  type updateStatusUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type updateUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type verifyCodeUsingGETParams = {
    /** 高度 */
    height: number;
    /** 标识 */
    tag: string;
    /** 登录令牌 */
    token?: any;
    /** 宽度 */
    width: number;
  };

  type waitAssignmentCustomerUsingPOSTParams = {
    /** 登录令牌 */
    token?: any;
  };

  type xiangmubiaoshiti = {
    /** 项目编码 */
    code?: string;
    /** 所属公司ID */
    companyId?: number;
    /** 所属公司名称 */
    companyName?: string;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 所属部门ID */
    departmentId?: number;
    /** 所属部门名称 */
    departmentName?: string;
    /** 钉钉ID */
    dingId?: number;
    /** 项目ID */
    id?: number;
    /** 是否撤场 */
    isAnnul?: boolean;
    /** 北森删除状态 */
    isDeleted?: boolean;
    /** 项目名称 */
    name?: string;
    /** 北森组织层级全路径 */
    poIdOrgTreePath?: string;
    /** 来源（1同步助手，2系统创建） */
    source?: number;
    /** 来源Value */
    sourceValue?: string;
    /** 状态（0停用；1启用） */
    status?: number;
    /** 状态Value */
    statusValue?: string;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type xiangmuchechangqingqiucanshu = {
    /** 项目ID */
    id: number;
    /** 是否撤场 */
    isAnnul: boolean;
  };

  type xiangmudanyuanbiaoshiti = {
    /** 楼栋ID */
    buildingId?: number;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 房源数 */
    houseNum?: number;
    /** 单元ID */
    id?: number;
    /** 项目ID */
    projectId?: number;
    /** 单元号 */
    unitNo?: string;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type xiangmufangyuanbeizhubiaoshiti = {
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 房源ID */
    houseId: number;
    /** 备注ID */
    id?: number;
    /** 备注8 */
    nodeEight?: string;
    /** 备注5 */
    nodeFive?: string;
    /** 备注4 */
    nodeFour?: string;
    /** 备注9 */
    nodeNine?: string;
    /** 备注1 */
    nodeOne?: string;
    /** 备注7 */
    nodeSeven?: string;
    /** 备注6 */
    nodeSix?: string;
    /** 备注10 */
    nodeTen?: string;
    /** 备注3 */
    nodeThree?: string;
    /** 备注2 */
    nodeTwo?: string;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type xiangmufangyuanbiaoshiti = {
    /** 建筑面积（㎡） */
    buildingArea?: number;
    /** 楼栋ID */
    buildingId?: number;
    /** 楼栋号 */
    buildingNo?: string;
    /** 清款日期 */
    clearDate?: string;
    /** 创建人 */
    createdBy?: number;
    /** 创建人工号 */
    createdJobNumber?: string;
    /** 创建时间 */
    createdTime?: string;
    /** D+房源ID */
    dPlusId?: number;
    /** 交房日期 */
    deliveryDate?: string;
    /** 开发商房号 */
    devRoomNo?: string;
    /** 楼层 */
    floor?: string;
    /** 户型（基础配置ID） */
    frameId?: number;
    /** 户型（基础配置名称） */
    frameName?: string;
    /** 组团/期数（基础配置ID） */
    groupId?: number;
    /** 组团/期数（基础配置名称） */
    groupName?: string;
    /** 房源ID */
    id?: number;
    /** 套内面积（㎡） */
    innerArea?: number;
    /** 是否审批中 */
    isApproval?: boolean;
    /** 是否清款 */
    isClear?: boolean;
    /** 联代团队 */
    jointAgencyTeam?: string;
    /** 锁房置业顾问ID */
    lockAgentId?: number;
    /** 锁房置业顾问工号 */
    lockAgentJobNumber?: string;
    /** 锁房日期 */
    lockDate?: string;
    /** 老CRM房源ID */
    oldCrmId?: number;
    /** 产品类型（基础配置ID） */
    productId?: number;
    /** 产品类型（基础配置名称） */
    productName?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 物业类型（1住宅，2办公，3商业，4别墅，5车位） */
    propertyType?: number;
    /** 物业类型名称 */
    propertyTypeName?: string;
    /** 备注 */
    remark?: string;
    /** 房间号 */
    roomNo?: string;
    /** 销控日期 */
    saleCtlDate?: string;
    /** 标准单价（元/㎡） */
    standardPrice?: number;
    /** 标准总价（元） */
    standardTotalPrice?: number;
    /** 状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 单元ID */
    unitId?: number;
    /** 单元号 */
    unitNo?: string;
    /** 更新人 */
    updatedBy?: number;
    /** 更新人工号 */
    updatedJobNumber?: string;
    /** 更新时间 */
    updatedTime?: string;
    /** 显示房号（楼栋-单元-楼层-房间号） */
    viewRoomNo?: string;
    /** 正合房号（组团/期数-物业类型-楼栋-单元-楼层-房间号） */
    zhRoomNo?: string;
  };

  type xiangmufangyuanchaxunqingqiucanshu = {
    /** 楼栋ID */
    buildingId: number;
    /** 组团/期数ID */
    groupId: number;
    /** 项目ID */
    projectId: number;
    /** 单元ID */
    unitId: number;
    /** 显示房号 */
    viewRoomNo?: string;
  };

  type xiangmufangyuanDto = {
    /** 建筑面积 */
    buildingArea?: number;
    /** 楼栋 */
    buildingNo?: string;
    /** 交房日期 */
    deliveryDate?: string;
    /** 开发商房号 */
    devRoomNo?: string;
    /** 楼层 */
    floor?: string;
    /** 户型（基础配置ID） */
    frameId?: number;
    /** 户型 */
    frameName?: string;
    /** 组团/期数（基础配置ID） */
    groupId?: number;
    /** 组团/期数 */
    groupName?: string;
    /** 房源编号 */
    id?: number;
    /** 套内面积 */
    innerArea?: number;
    /** 是否审批中 */
    isApproval?: boolean;
    /** 联代团队 */
    jointAgencyTeam?: string;
    /** 锁房置业顾问 */
    lockAgentJobNumber?: string;
    /** 锁房日期 */
    lockDate?: string;
    /** 产品类型（基础配置ID） */
    productId?: number;
    /** 产品类型 */
    productName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 物业类型（1住宅，2办公，3商业，4别墅，5车位） */
    propertyType?: number;
    /** 物业类型 */
    propertyTypeName?: string;
    /** 房间号 */
    roomNo?: string;
    /** 销控日期 */
    saleCtlDate?: string;
    /** 标准单价 */
    standardPrice?: number;
    /** 标准总价 */
    standardTotalPrice?: number;
    /** 状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number;
    /** 房源状态 */
    statusName?: string;
    /** 单元 */
    unitNo?: string;
    /** 显示房号 */
    viewRoomNo?: string;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type xiangmufangyuanfenxiDto = {
    /** 子统计 */
    childAnalysis?: xiangmufangyuanfenxiDto[];
    /** 销控套数 */
    controlNum?: number;
    /** 房源总面积㎡ */
    houseTotalArea?: number;
    /** 统计id */
    id?: number;
    /** 锁房套数 */
    lockNum?: number;
    /** 维度名称 */
    name?: string;
    /** 上级ID */
    parentId?: number;
    /** 待售套数 */
    saleNum?: number;
    /** 平均签约优惠比例 */
    signAvgDiscountProportion?: number;
    /** 房源签约均价元/㎡ */
    signAvgPrice?: number;
    /** 已认购套数 */
    subscribeNum?: number;
    /** 房源认购总面积㎡ */
    subscribeTotalArea?: number;
    /** 房源认购总价 */
    subscribeTotalPrice?: number;
    /** 总套数 */
    totalNum?: number;
  };

  type xiangmufangyuanfenxishiti = {
    /** 分户型统计 */
    frameList?: xiangmufangyuanfenxiDto[];
    /** 组团/期数统计 */
    groupList?: xiangmufangyuanfenxiDto[];
    /** 项目房源建筑面积㎡ */
    projectBuildingTotalArea?: number;
    /** 分物业统计 */
    propertyList?: xiangmufangyuanfenxiDto[];
    /** 签约均价元/㎡ */
    signAvgPrice?: number;
    /** 平均房源签约总价/元 */
    signAvgTotalPrice?: number;
    /** 已认购房源建筑面积㎡ */
    subscribeBuildingArea?: number;
    /** 认购去化率 */
    subscribeDetoxifyRate?: number;
    /** 已认购房源产值 */
    subscribeOutputValue?: number;
  };

  type xiangmufangyuanliebiaofenyechaxunshaixuan = {
    /** 楼栋号 */
    buildingNo?: string;
    /** 楼层 */
    floor?: string;
    /** 户型（基础配置ID） */
    frameIds?: number[];
    /** 组团/期数（基础配置ID） */
    groupIds?: number[];
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 产品类型（基础配置ID） */
    productIds?: number[];
    /** 项目ID */
    projectId: number;
    /** 房间号 */
    roomNo?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 房源状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number[];
    /** 单元号 */
    unitNo?: string;
  };

  type xiangmufangyuanpiliangxiugaiqingqiucanshu = {
    /** 建筑面积（㎡） */
    buildingArea?: number;
    /** 交房日期 */
    deliveryDate?: string;
    /** 户型 */
    frameId?: number;
    /** 房源ID */
    ids: number[];
    /** 套内面积（㎡） */
    innerArea?: number;
    /** 物业类型（1住宅，2办公，3商业，4别墅，5车位） */
    propertyType?: number;
    /** 标准总价（元） */
    standardTotalPrice?: number;
  };

  type xiangmufangyuanshanchuqingqiucanshu = {
    /** 房源ID */
    ids: number[];
  };

  type xiangmufangyuanshituDto = {
    /** 楼层 */
    floor?: string;
    /** 房源 */
    houses?: xiangmufangyuanbiaoshiti[];
  };

  type xiangmufangyuantongjiDto = {
    /** 主维度（1本单元，2本楼栋，3本分期，4本项目） */
    mainDimension?: number;
    /** 对应统计数据 */
    projectHouseStatisticsDetails?: tongjishujuxiangqingDto[];
  };

  type xiangmufangyuanxiugaiqingqiucanshu = {
    /** 建筑面积（㎡） */
    buildingArea: number;
    /** 交房日期 */
    deliveryDate: string;
    /** 开发商房号 */
    devRoomNo: string;
    /** 户型 */
    frameId: number;
    /** 房源ID */
    id: number;
    /** 套内面积（㎡） */
    innerArea: number;
    /** 物业类型（1住宅，2办公，3商业，4别墅，5车位） */
    propertyType: number;
    /** 标准总价（元） */
    standardTotalPrice: number;
  };

  type xiangmufangyuanxiugaizhuangtaiqingqiucanshu = {
    /** 房源ID */
    id: number;
    /** 联代团队 */
    jointAgencyTeam?: string;
    /** 锁房置业顾问工号 */
    lockAgentJobNumber?: string;
    /** 锁房日期 */
    lockDate?: string;
    /** 销控日期 */
    saleCtlDate?: string;
    /** 状态（1待售，2销控，3锁房） */
    status: number;
  };

  type xiangmujiyujingguizebaocuncanshu = {
    /** 签约未回款周期（天） */
    notRefundCycle?: number;
    /** 认购未签约周期（天） */
    notSignCycle?: number;
    /** 项目ID */
    projectId?: number;
    /** 回访周期（天） */
    visitCycle?: number;
  };

  type xiangmuliebiaofenyechaxunshaixuan = {
    /** 公司ID */
    companyId?: number;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 搜索关键字 */
    searchContent?: string;
  };

  type xiangmuloudongbiaoshiti = {
    /** 楼栋号 */
    buildingNo?: string;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 组团/期数（基础配置ID） */
    groupId?: number;
    /** 楼栋ID */
    id?: number;
    /** 项目ID */
    projectId?: number;
    /** 单元 */
    units?: xiangmudanyuanbiaoshiti[];
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
  };

  type xiangmumingceliebiaofenyechaxunshaixuan = {
    /** 项目ID */
    id?: number;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 搜索关键字 */
    searchContent?: string;
  };

  type xiangmurenwubianjicanshu = {
    /** 项目任务ID */
    id?: number;
    /** 锁房任务 */
    lockValue?: number;
    /** 签约任务 */
    signValue?: number;
    /** 认购任务 */
    subscribeValue?: number;
  };

  type xiangmurenwuchaxuncanshu = {
    /** 公司Id */
    companyId?: number;
    /** 运营部ID列表 */
    departmentIds?: number[];
    /** 任务归属结束月(yyyyMM) */
    endMonth?: string;
    /** 是否撤场 */
    isAnnul?: boolean;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id(接口忽略) */
    projectId?: number;
    /** 项目关键字 */
    projectName?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 任务归属开始月(yyyyMM) */
    startMonth?: string;
  };

  type xiangmurenwufenyeshujuDto = {
    /** 任务创建日期 */
    createdDate?: string;
    /** 运营部 */
    departmentName?: string;
    /** id */
    id?: number;
    /** 是否撤场 */
    isAnnul?: boolean;
    /** 锁房完成率 */
    lockComplete?: string;
    /** 锁房分解率 */
    lockRate?: string;
    /** 锁房任务 */
    lockValue?: number;
    /** 锁房任务团队分配值 */
    lockValueAssignment?: number;
    /** 项目名称 */
    projectName?: string;
    /** 签约完成率 */
    signComplete?: string;
    /** 签约分解率 */
    signRate?: string;
    /** 签约任务 */
    signValue?: number;
    /** 签约任务团队分配值 */
    signValueAssignment?: number;
    /** 认购完成率 */
    subscribeComplete?: string;
    /** 认购分解率 */
    subscribeRate?: string;
    /** 认购任务 */
    subscribeValue?: number;
    /** 认购任务团队分配值 */
    subscribeValueAssignment?: number;
    /** 任务归属月(yyyyMM) */
    yearsMonth?: string;
  };

  type xiangmurenwupeizhiDto = {
    /** 任务配置ID */
    configId?: number;
    /** 分配修改窗口期 */
    distributionDay?: number;
    /** 任务修改冻结天数 */
    freezeDay?: number;
    /** 当月任务开关 */
    isAssignment?: boolean;
  };

  type xiangmutaizhangDto = {
    /** 通讯地址 */
    address?: string;
    /** 公积金金额 */
    afLoanAmount?: number;
    /** 公积金银行 */
    afLoanBankName?: string;
    /** 公积金年限/月 */
    afLoanMonth?: number;
    /** 房源建筑面积㎡ */
    buildingArea?: number;
    /** 楼栋 */
    buildingNo?: string;
    /** 变动标记 */
    changeTag?: string;
    /** 销售渠道 */
    channelName?: string;
    /** 清款置业顾问 */
    clearAgent?: string;
    /** 清款日期 */
    clearDate?: string;
    /** 回款金额汇总/元 */
    completeReturnAmount?: number;
    /** 合同编号 */
    contractNumber?: string;
    /** 知晓途径 */
    cusAdvRouteName?: string;
    /** 客户年龄段 */
    customerAge?: string;
    /** 客户姓名 */
    customerName?: string;
    /** 联系电话 */
    customerPhone?: string;
    /** 客户性别 */
    customerSex?: string;
    /** 交房日期 */
    deliveryDate?: string;
    /** 运营部 */
    departmentName?: string;
    /** 定金金额/元 */
    depositAmount?: number;
    /** 开发商房号 */
    devRoomNo?: string;
    /** 预计签约日期 */
    expectSignDate?: string;
    /** 楼层 */
    floor?: string;
    /** 户型 */
    frameName?: string;
    /** 组团/期数 */
    groupName?: string;
    /** 房源ID */
    id?: number;
    /** 套内面积㎡ */
    innerArea?: number;
    /** 是否客户分配 */
    isAssignment?: boolean;
    /** 是否清款 */
    isClear?: boolean;
    /** 是否修改日期 */
    isModifyDate?: boolean;
    /** 是否修改业绩 */
    isPerformance?: boolean;
    /** 商贷金额 */
    loanAmount?: number;
    /** 商贷银行 */
    loanBankName?: string;
    /** 商贷年限/月 */
    loanMonth?: number;
    /** 婚姻状况 */
    maritalName?: string;
    /** 备注8 */
    nodeEight?: string;
    /** 备注5 */
    nodeFive?: string;
    /** 备注4 */
    nodeFour?: string;
    /** 备注9 */
    nodeNine?: string;
    /** 备注1 */
    nodeOne?: string;
    /** 备注7 */
    nodeSeven?: string;
    /** 备注6 */
    nodeSix?: string;
    /** 备注10 */
    nodeTen?: string;
    /** 备注3 */
    nodeThree?: string;
    /** 备注2 */
    nodeTwo?: string;
    /** 老客户房号 */
    oldCustomerRoom?: string;
    /** 老带新优惠 */
    oldWithNewDiscount?: string;
    /** 买受人姓名 */
    orderCustomerName?: string;
    /** 买受人证件号码 */
    orderCustomerNumber?: string;
    /** 买受人电话 */
    orderCustomerPhone?: string;
    /** 订单ID */
    orderId?: number;
    /** 共有人组 */
    ownerByGroup?: string;
    /** 付款方式 */
    payTypeName?: string;
    /** 付款计划组 */
    planGroup?: string;
    /** 产品类型 */
    productName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 物业类型 */
    propertyTypeName?: string;
    /** 公摊面积㎡ */
    publicArea?: number;
    /** 最近回款置业顾问 */
    returnAgent?: string;
    /** 回款组 */
    returnGroup?: string;
    /** 房间号 */
    roomNo?: string;
    /** 签约置业顾问 */
    signAgent?: string;
    /** 正合签约面积 */
    signArea?: number;
    /** 签约日期 */
    signDate?: string;
    /** 签约优惠比例 */
    signDiscountRatio?: string;
    /** 房源签约总价 */
    signTotalPrice?: number;
    /** 正合签约产值 */
    signValue?: number;
    /** 标准单价元/㎡ */
    standardPrice?: number;
    /** 标准总价/元 */
    standardTotalPrice?: number;
    /** 房源状态 */
    statusName?: string;
    /** 认购置业顾问 */
    subscribeAgent?: string;
    /** 正合认购面积 */
    subscribeArea?: number;
    /** 认购日期 */
    subscribeDate?: string;
    /** 房源认购总价 */
    subscribeTotalPrice?: number;
    /** 正合认购产值 */
    subscribeValue?: number;
    /** 单元 */
    unitNo?: string;
    /** 展示房号 */
    viewRoomNo?: string;
    /** 首访置业顾问 */
    visitAgent?: string;
    /** 首访日期 */
    visitDate?: string;
    /** 未回款金额/元 */
    waitReturnAmount?: number;
    /** 正合建筑面积㎡ */
    zhBuildingArea?: number;
    /** 正合业绩占比 */
    zhPerformanceRatio?: string;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type xiangmutaizhangfenyechaxunshaixuan = {
    /** 清款状态（1清款，2未清款） */
    clears?: number[];
    /** 客户姓名 */
    customerName?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 产品类型（基础配置ID） */
    productIds?: number[];
    /** 项目ID */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 签约日期 */
    signDate?: timeNameLocalDate[];
    /** 房源状态（1待售，2销控，3锁房，4认购，5签约） */
    status?: number[];
    /** 认购日期 */
    subscribeDate?: timeNameLocalDate[];
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type xiangyingshitidaiquerendengluyonghushiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: daiquerendengluyonghushiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiExceldaorujieguo = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: Exceldaorujieguo;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifangyuanjichupeizhi = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fangyuanjichupeizhi;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenpeirenwuhuoqushengyuchanzhiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenpeirenwuhuoqushengyuchanzhiDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitibiangengtaizhangDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitibiangengtaizhangDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitichengjiaokehutaizhang = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitichengjiaokehutaizhang;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitidaifenpeikehuxinxizhanshi = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitidaifenpeikehuxinxizhanshi;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitijiaoseliebiaoDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitijiaoseliebiaoDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitikehufenpeijilushuju = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitikehufenpeijilushuju;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitikehushuli = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitikehushuli;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitikehushulijilu = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitikehushulijilu;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitilaidianlaifangshuju = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitilaidianlaifangshuju;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitishenpishujuDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitishenpishujuDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishititongburenwujiluDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishititongburenwujiluDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitituanduimingceDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitituanduimingceDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitixiangmubiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitixiangmubiaoshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitixiangmufangyuanDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitixiangmufangyuanDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitixiangmurenwufenyeshujuDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitixiangmurenwufenyeshujuDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitixiangmutaizhangDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitixiangmutaizhangDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitiyejitaizhangDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitiyejitaizhangDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitiyejitongjiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitiyejitongjiDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitiyonghuliebiaoDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitiyonghuliebiaoDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitifenyexinxishitizhiyeguwenrenwufenyeshujuDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: fenyexinxishitizhiyeguwenrenwufenyeshujuDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitigongyongListxiangyingdingdingshenpipeizhishiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: gongyongListxiangyingdingdingshenpipeizhishiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitigongyongListxiangyingxiangmutaizhangDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: gongyongListxiangyingxiangmutaizhangDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitigongyongListxiangyingyejitaizhanglishiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: gongyongListxiangyingyejitaizhanglishiDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitijiaosebiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: jiaosebiaoshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListcaidanbiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: caidanbiaoshiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListchaxuntiaojian = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: chaxuntiaojian[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListgangweibiaoDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: gangweibiaoDto[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListkehufenxibiaogezhanshishuju = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: kehufenxibiaogezhanshishuju[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListxiangmubiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmubiaoshiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListxiangmufangyuanfenxiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmufangyuanfenxiDto[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListxiangmufangyuanshituDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmufangyuanshituDto[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListxiangmufangyuantongjiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmufangyuantongjiDto[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListyonghubiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: yonghubiaoshiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListzidianshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: zidianshiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListzidingyiziduanduiyingguanxi = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: zidingyiziduanduiyingguanxi[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListziduanbiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: ziduanbiaoshiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiListzuzhishiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: zuzhishiti[];
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitistring = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiSTSwenjianshangchuanshouquanxinxi = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: STSwenjianshangchuanshouquanxinxi;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitixiangmufangyuanfenxishiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmufangyuanfenxishiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitixiangmurenwupeizhiDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: xiangmurenwupeizhiDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiyonghubiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: yonghubiaoshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiyujingguizebiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: yujingguizebiaoshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitizhiyeguwenrenwuzonglanDto = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: zhiyeguwenrenwuzonglanDto;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitizidianshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: zidianshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiangyingshitiziduanxuanxiangzhibiaoshiti = {
    /** 响应码 */
    code?: number;
    /** 响应结果 */
    data?: ziduanxuanxiangzhibiaoshiti;
    /** 响应消息 */
    message?: string;
  };

  type xiugairiqiliuchengewaicanshu = {
    /** 订单ID */
    orderId: number;
    /** 签约日期 */
    signDate?: string;
    /** 认购日期 */
    subscribeDate: string;
  };

  type xuanxiangzhi = {
    /** 选项值key */
    id?: number;
    /** 选项值名称 */
    name?: string;
  };

  type xuanxiangzhibaocunqingqiucanshu = {
    /** 业务ID */
    businessId: number;
    /** 公司层级编辑（禁用项目ID） */
    disabledProjectIds?: number[];
    /** 字段ID */
    fieldId: number;
    /** 选项值ID */
    id?: number;
    /** 是否以上 */
    isAbove?: boolean;
    /** 项目层级编辑（是否禁用） */
    isDisabled?: boolean;
    /** 是否以下 */
    isUnder?: boolean;
    /** 编辑层级（2公司级，3项目级） */
    level: number;
    /** 选项值最大值 */
    maxValue?: number;
    /** 选项值最小值 */
    minValue?: number;
    /** 选项值名称 */
    name?: string;
  };

  type xuanxiangzhixiangqingchaxunqingqiucanshu = {
    /** 业务ID */
    businessId: number;
    /** 选项值ID */
    id?: number;
    /** 查询层级（2公司级，3项目级） */
    level: number;
  };

  type yejiaoduixiangshiti = {
    /** 当前页数 */
    pageNum?: number;
    /** 当前条数 */
    pageSize?: number;
  };

  type yejitaizhangDto = {
    /** 业绩归属运营部 */
    belongDepartment?: string;
    /** 业绩归属运营总 */
    belongOperation?: string;
    /** 业绩归属秘书 */
    belongSecretary?: string;
    /** 变动标记 */
    changeTag?: string;
    /** 销售渠道 */
    channelName?: string;
    /** 清款置业顾问 */
    clearAgent?: string;
    /** 清款日期 */
    clearDate?: string;
    /** (当前）运营部 */
    departmentName?: string;
    /** 开发商房号 */
    devRoomNo?: string;
    /** 交房置业顾问 */
    handoverAgent?: string;
    /** 房源ID */
    id?: number;
    /** 代理费开票置业顾问 */
    invoiceAgent?: string;
    /** 代理费开票项目经理 */
    invoiceManager?: string;
    /** 是否客户分配 */
    isAssignment?: boolean;
    /** 是否清款 */
    isClear?: boolean;
    /** 是否修改日期 */
    isModifyDate?: boolean;
    /** 是否修改业绩 */
    isPerformance?: boolean;
    /** 订单ID */
    orderId?: number;
    /** 付款方式 */
    payTypeName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 代理费回款置业顾问 */
    returnAgent?: string;
    /** 代理费回款项目经理 */
    returnManager?: string;
    /** 签约置业顾问 */
    signAgent?: string;
    /** 签约日期 */
    signDate?: string;
    /** 签约项目经理 */
    signManager?: string;
    /** 正合签约总价 */
    signTotalPrice?: number;
    /** 认购置业顾问 */
    subscribeAgent?: string;
    /** 认购日期 */
    subscribeDate?: string;
    /** 认购项目经理 */
    subscribeManager?: string;
    /** 正合认购总价 */
    subscribeTotalPrice?: number;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type yejitaizhangfenyechaxunshaixuan = {
    /** 业绩归属角色（1首访置业顾问，2认购置业顾问，3认购经理，4签约置业顾问，5签约经理，6回款置业顾问，7回款经理，8清款置业顾问，9交房置业顾问，10佣金开票置业顾问，11佣金开票经理，12佣金回款置业顾问，13佣金回款经理，14业绩归属秘书，15业绩归属运营总，16归属运营部） */
    attributionRoleId?: number;
    /** 业绩归属姓名/工号 */
    attributionUser?: string;
    /** 公司ID */
    companyId: number;
    /** 部门ID */
    departmentIds?: number[];
    /** 订单日期 */
    orderDate?: timeNameLocalDate[];
    /** 订单日期类型（1认购，2签约，3代理费开票日期，4代理费回款日期） */
    orderDateType?: number;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目名称 */
    projectName?: string;
    /** 搜索关键字 */
    searchContent?: string;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type yejitaizhanglishiDto = {
    /** 调整时间 */
    adjustDateTime?: string;
    /** 业绩归属运营总 */
    belongOperation?: string;
    /** 业绩归属秘书1 */
    belongSecretaryOne?: string;
    /** 业绩归属秘书3 */
    belongSecretaryThree?: string;
    /** 业绩归属秘书2 */
    belongSecretaryTwo?: string;
    /** 清款置业顾问1 */
    clearAgentOne?: string;
    /** 清款置业顾问2 */
    clearAgentTwo?: string;
    /** 历史码 */
    code?: number;
    /** 交房置业顾问1 */
    handoverAgentOne?: string;
    /** 交房置业顾问2 */
    handoverAgentTwo?: string;
    /** 房源ID */
    id?: number;
    /** 代理费开票置业顾问1 */
    invoiceAgentOne?: string;
    /** 代理费开票置业顾问2 */
    invoiceAgentTwo?: string;
    /** 代理费开票项目经理1 */
    invoiceManagerOne?: string;
    /** 代理费开票项目经理2 */
    invoiceManagerTwo?: string;
    /** 订单ID */
    orderId?: number;
    /** 代理费回款置业顾问1 */
    returnAgentOne?: string;
    /** 代理费回款置业顾问2 */
    returnAgentTwo?: string;
    /** 代理费回款项目经理1 */
    returnManagerOne?: string;
    /** 代理费回款项目经理2 */
    returnManagerTwo?: string;
    /** 签约置业顾问1 */
    signAgentOne?: string;
    /** 签约置业顾问2 */
    signAgentTwo?: string;
    /** 签约项目经理1 */
    signManagerOne?: string;
    /** 签约项目经理2 */
    signManagerTwo?: string;
    /** 认购置业顾问1 */
    subscribeAgentOne?: string;
    /** 认购置业顾问2 */
    subscribeAgentTwo?: string;
    /** 认购项目经理1 */
    subscribeManagerOne?: string;
    /** 认购项目经理2 */
    subscribeManagerTwo?: string;
    /** 正合房号 */
    zhRoomNo?: string;
  };

  type yejitongjiDto = {
    /** 来电数量 */
    callNum?: number;
    /** 销控套数 */
    controlNum?: number;
    /** 成交转化率 */
    conversionRate?: number;
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 期间可签约金额/元 */
    halfCanSignAmount?: number;
    /** 期间认购未签约金额/元 */
    halfNotSignAmount?: number;
    /** 房源回款/元 */
    houseReturnAmount?: number;
    /** 统计id */
    id?: number;
    /** 锁房金额/元 */
    lockRoomAmount?: number;
    /** 锁房完成率 */
    lockRoomCompletionRate?: number;
    /** 维度名称 */
    name?: string;
    /** 项目状态 */
    projectStatus?: string;
    /** 正合签约金额/元 */
    signAmount?: number;
    /** 正合签约面积㎡ */
    signArea?: number;
    /** 签约均价元㎡ */
    signAvgPrice?: number;
    /** 签约后退房金额 */
    signCheckOutAmount?: number;
    /** 签约后退房套数 */
    signCheckOutNum?: number;
    /** 签约任务完成率 */
    signCompletionRate?: number;
    /** 签约数量 */
    signNum?: number;
    /** 正合认购金额/元 */
    subscribeAmount?: number;
    /** 正合认购面积㎡ */
    subscribeArea?: number;
    /** 认购任务完成率 */
    subscribeCompletionRate?: number;
    /** 认购数量 */
    subscribeNum?: number;
    /** 累计认购未签约金额/元 */
    sumNotSignAmount?: number;
    /** 来访数量 */
    visitNum?: number;
  };

  type yejitongjifenyechaxunshaixuan = {
    /** 统计大类（1项目业绩，2公司业绩，3集团业绩） */
    broadType: number;
    /** 公司ID */
    companyId?: number;
    /** 周期类型（日day，月month，年year，周week，季quarter） */
    dateType?: string;
    /** 统计周期 */
    dates?: timeNameLocalDate[];
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目ID */
    projectId?: number;
    /** 项目状态（1在售，2撤场） */
    projectStatus?: number[];
    /** 物业类型 */
    propertyTypes?: number[];
    /** 搜索关键字 */
    searchContent?: string;
    /** 统计类型：1成交汇总，2付款方式，3物业类型，4销售渠道，5置业顾问，6项目汇总，7部门汇总，8集团汇总 */
    type?: number;
  };

  type yonghubaocunqingqiucanshu = {
    /** ID */
    id?: number;
    /** 是否可登录 */
    isLogin?: boolean;
    /** 电话 */
    mobile: string;
    /** 任职身份 */
    orgRelIdentityInfos?: yonghuzuzhirenzhiguanlianbiaoshiti[];
    /** 人事状态（1待入职，2试用，3，正式，4调出，5待调入，6退休，8离职，12非正式） */
    status?: number;
  };

  type yonghubiaoshiti = {
    /** 帐号 */
    account?: string;
    /** 最近一次权限改变时间 */
    authChangeTime?: string;
    /** 北森用户ID */
    bsUserId?: number;
    /** 业务运营数据权限 */
    businessPermissions?: zuzhishiti[];
    /** 公司ID */
    companyId?: number;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** D+用户ID */
    dPlusId?: number;
    /** 负责部门数据权限 */
    departmentPermission?: bumenbiaoshiti[];
    /** 钉钉unionID */
    dingUnionId?: string;
    /** 钉钉用户ID */
    dingUserId?: string;
    /** 归属企业 */
    enterpriseId?: number;
    /** 归属企业名称 */
    enterpriseName?: string;
    /** 历任项目身份 */
    historyRelIdentityInfos?: yonghulirenxiangmushenfenshiti[];
    /** 用户ID */
    id?: number;
    /** 是否可登录 */
    isLogin?: boolean;
    /** 工号 */
    jobNumber?: string;
    /** 最近一次登录身份信息 */
    lastIdentity?: yonghushenfenshiti;
    /** 最近一次登录角色名称 */
    lastRoleName?: string;
    /** 最近一次授权令牌 */
    lastToken?: string;
    /** 项目基础维护身份 */
    managerRelIdentityInfos?: yonghuguanlizhizeguanlianbiaoshiti[];
    /** 菜单权限 */
    menuPermissions?: number[];
    /** 电话 */
    mobile?: string;
    /** 姓名 */
    name?: string;
    /** 任职身份 */
    orgRelIdentityInfos?: yonghuzuzhirenzhiguanlianbiaoshiti[];
    /** 密码 */
    password?: string;
    /** 项目ID */
    projectId?: number;
    /** 来源（1北森同步，2系统创建） */
    source?: number;
    /** 人员状态（1待入职，2试用，3，正式，4调出，5待调入，6退休，8离职，12非正式） */
    status?: number;
    /** 系统管理数据权限 */
    systemPermissions?: jiaosexitongguanlishujuquanxianbiaoshiti[];
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
    /** 显示电话姓名 */
    viewMobileName?: string;
    /** 显示姓名 */
    viewName?: string;
  };

  type yonghudengluqingqiucanshu = {
    /** 验证码 */
    code: string;
    /** 企业编码 */
    enterpriseCode: string;
    /** 手机号 */
    mobile: string;
    /** 密码 */
    password: string;
    /** 标识 */
    tag: string;
  };

  type yonghuguanlizhizeguanlianbiaoshiti = {
    /** 公司ID */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 自增ID */
    id?: number;
    /** 身份标识 MD5（user_id + manager_type + org_id + position_id） */
    identity?: string;
    /** 管理类型（1项目经理一，2项目经理二，3项目秘书一，4项目秘书二） */
    managerType?: number;
    /** 管理类型值 */
    managerTypeValue?: string;
    /** 组织ID */
    orgId?: number;
    /** 组织名称 */
    orgName?: string;
    /** 岗位ID */
    positionId?: number;
    /** 岗位名称 */
    positionName?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 映射角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 用户ID */
    userId?: number;
  };

  type yonghuliebiaoDto = {
    /** 公司名称 */
    companyName?: string;
    /** 部门名称 */
    departmentName?: string;
    /** ID */
    id?: number;
    /** 可否登陆 */
    isLogin?: string;
    /** 工号 */
    jobNumber?: string;
    /** 姓名 */
    name?: string;
    /** 任职数 */
    positionNumber?: number;
    /** 项目名称 */
    projectName?: string;
    /** 来源 */
    sourceValue?: string;
    /** 人事状态 */
    statusValue?: string;
  };

  type yonghuliebiaofenyechaxunshaixuan = {
    /** 公司ID */
    companyId?: number;
    /** 工号/姓名 */
    jobNumberOrName?: string;
    /** 主任职组织 */
    mainOrgName?: string;
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 岗位ID */
    positions?: number[];
    /** 角色ID */
    roles?: number[];
    /** 搜索关键字 */
    searchContent?: string;
    /** 来源（1同步助手，2CRM） */
    source?: number;
  };

  type yonghulirenxiangmushenfenshiti = {
    /** 公司ID */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 历任类型（1历任销售） */
    historyType?: number;
    /** 管理类型值 */
    historyTypeValue?: string;
    /** ID */
    id?: number;
    /** 身份标识 MD5（user_id + org_id + position_id） */
    identity?: string;
    /** 组织ID */
    orgId?: number;
    /** 组织名称 */
    orgName?: string;
    /** 岗位ID */
    positionId?: number;
    /** 岗位名称 */
    positionName?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 映射角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 用户ID */
    userId?: number;
  };

  type yonghushenfenshiti = {
    /** 公司ID */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 身份标识 */
    identity?: string;
    /** 组织ID */
    orgId?: number;
    /** 组织名称 */
    orgName?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 用户ID */
    userId?: number;
  };

  type yonghuzuzhirenzhiguanlianbiaoshiti = {
    /** 公司ID */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 自增ID */
    id?: number;
    /** 身份标识 MD5（user_id + service_type + org_id + position_id） */
    identity?: string;
    /** 任职角色是否岗位自动映射 */
    isPositionMapping?: boolean;
    /** 组织ID */
    orgId?: number;
    /** 组织名称 */
    orgName?: string;
    /** 岗位ID */
    positionId?: number;
    /** 岗位名称 */
    positionName?: string;
    /** 项目ID */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 映射角色ID */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 任职类型（1主职，2兼职一，3兼职二） */
    serviceType?: number;
    /** 任职类型值 */
    serviceTypeValue?: string;
    /** 用户ID */
    userId?: number;
  };

  type yujingguizebiaoshiti = {
    /** 公司ID */
    companyId?: number;
    /** 创建人 */
    createdBy?: number;
    /** 创建时间 */
    createdTime?: string;
    /** 配置ID */
    id?: number;
    /** 配置层级（2公司级，3项目级） */
    level?: number;
    /** 签约未回款周期（天） */
    notRefundCycle?: number;
    /** 认购未签约周期（天） */
    notSignCycle?: number;
    /** 上级规则 */
    parentRule?: yujingguizebiaoshiti;
    /** 项目ID */
    projectId?: number;
    /** 交易时间确认类型（1沿用旧房源的认购签约日期，2以换房审批日期为认购签约日期） */
    saleDateType?: number;
    /** 更新人 */
    updatedBy?: number;
    /** 更新时间 */
    updatedTime?: string;
    /** 回访周期（天） */
    visitCycle?: number;
  };

  type yujingguizechaxuncanshu = {
    /** 业务ID */
    businessId?: number;
    /** 配置层级（2公司级，3项目级） */
    level?: number;
  };

  type zhiyeguwenrenwuchaxuncanshu = {
    /** 页脚对象 */
    pageInfo?: yejiaoduixiangshiti;
    /** 排序对象 */
    pageSort?: paixushiti;
    /** 项目Id */
    projectId?: number;
    /** 搜索关键字 */
    searchContent?: string;
    /** 任务归属月(yyyyMM) */
    yearsMonth?: string;
  };

  type zhiyeguwenrenwufenyeshujuDto = {
    /** 置业顾问 */
    consultantName?: string;
    /** 运营部 */
    departmentName?: string;
    /** id */
    id?: number;
    /** 锁房完成率 */
    lockRate?: string;
    /** 锁房目标产值 */
    lockValue?: number;
    /** 项目名称 */
    projectName?: string;
    /** 签约完成率 */
    signRate?: string;
    /** 签约目标产值 */
    signValue?: number;
    /** 认购完成率 */
    subscribeRate?: string;
    /** 认购目标产值 */
    subscribeValue?: number;
    /** 任务归属月(yyyyMM) */
    yearsMonth?: string;
  };

  type zhiyeguwenrenwutianjiarenyuancanshu = {
    /** 工号 */
    jobNumber?: string;
    /** 项目任务ID */
    projectTaskId?: number;
  };

  type zhiyeguwenrenwuyichurenyuancanshu = {
    /** 置业顾问任务Id */
    ids?: number[];
  };

  type zhiyeguwenrenwuzonglanchaxuncanshu = {
    /** 项目Id */
    projectId?: number;
    /** 任务归属月(yyyyMM) */
    yearsMonth?: string;
  };

  type zhiyeguwenrenwuzonglanDto = {
    /** 是否可申请超期修改 */
    canDelay?: boolean;
    /** 是否可维护(添加人员、移除人员、分配任务) */
    canModify?: boolean;
    /** 任务总览 */
    projectTaskPageDto?: xiangmurenwufenyeshujuDto;
  };

  type zidianqingqiucanshu = {
    /** 字典类型 */
    type: string;
  };

  type zidianshiti = {
    /** 字典选项 */
    list?: zidianxuanxiang[];
    /** 字典类型：role角色，position岗位，enterprise企业，source来源，userStatus用户人事状态，houseStatus房源状态，propertyType物业类型，syncTaskStatus任务状态，approvalType审批方式，approvalStatus审批状态，approvalResponse响应方式，customerGender客户性别,tradeTimes置业次数，intentionProperty关注物业类型，intentionPriority意向级别，contactType回访方式，customerType客户类型，inspectStatus梳理状态，orderPayType付款方式，orderReturnType回款类型，changeEvent事件类型，attributionRole业绩归属角色 */
    type?: string;
  };

  type zidianxuanxiang = {
    /** 字典id */
    id?: number;
    /** 字典value */
    value?: string;
  };

  type zidingyiziduanduiyingguanxi = {
    /** 列名 */
    columnName?: string;
    /** 属性字段名 */
    fieldName?: string;
    /** Id */
    id?: number;
  };

  type ziduanbiaoshiti = {
    /** 字段大类（1房源定义，2客户定义，3成交定义） */
    broadType: number;
    /** 业务ID */
    businessId: number;
    /** 字段选项值 */
    fieldValues?: ziduanxuanxiangzhibiaoshiti[];
    /** 字段ID */
    id?: number;
    /** 下拉类型单位（区间单位） */
    intervalUnit?: string;
    /** 下拉类型限制（是否区间） */
    isInterval?: boolean;
    /** 下拉类型限制（是否多选） */
    isMultiple?: boolean;
    /** 字段层级（1系统级，2公司级，3项目级） */
    level: number;
    /** 文本类型最大长度/数字类型最大值 */
    maxValue?: number;
    /** 文本类型最小长度/数字类型最小值 */
    minValue?: number;
    /** 字段名称 */
    name: string;
    /** 字段备注 */
    note?: string;
    /** 通用必填限制（1必填，2选填，3必填不可改） */
    required?: number;
    /** 来源（1内置，2自定义） */
    source?: number;
    /** 来电必填限制（1必填，2选填，3必填不可改） */
    telRequired?: number;
    /** 字段类型（1下拉，2日期，3文本，4数字） */
    type: number;
    /** 来访必填限制（1必填，2选填，3必填不可改） */
    visitRequired?: number;
  };

  type ziduanshifoubitianpeizhibaocunqingqiucanshu = {
    /** 业务ID */
    businessId: number;
    /** 字段ID */
    id: number;
    /** 通用必填限制（1必填，2选填，3必填不可改） */
    required?: number;
    /** 来电必填限制（1必填，2选填，3必填不可改） */
    telRequired?: number;
    /** 来访必填限制（1必填，2选填，3必填不可改） */
    visitRequired?: number;
  };

  type ziduanxuanxiangzhibiaoshiti = {
    /** 楼栋 */
    buildings?: xiangmuloudongbiaoshiti[];
    /** 禁用项目ID */
    disabledProjectIds?: number[];
    /** 字段ID */
    fieldId?: number;
    /** 字段名称 */
    fieldName?: string;
    /** 选项值ID */
    id?: number;
    /** 是否以上（最末选项） */
    isAbove?: boolean;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 是否以下（起始选项） */
    isUnder?: boolean;
    /** 选项值最大值 */
    maxValue?: number;
    /** 选项值最小值 */
    minValue?: number;
    /** 选项值名称 */
    name?: string;
    /** 选项值排序 */
    sort?: number;
    /** 来源（1内置，2自定义） */
    source?: number;
  };

  type zuzhichaxunshaixuan = {
    /** 公司ID */
    companyIds?: number[];
  };

  type zuzhishiti = {
    /** 子组织 */
    childOrganizations?: zuzhishiti[];
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 上级组织 */
    parentId?: number;
    /** 类型：1公司，2部门，3项目 */
    type?: number;
  };
}
