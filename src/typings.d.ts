declare const $global: {
  // 打印方法
  log: (msg: any) => void;
  eventsBus: {
    $bus: any;
    $on: (eventName: string, event: () => void) => void;
    $off: (eventName: string) => void;
    $emit: (eventName: string, data: any) => void;
    $has: (eventName: string) => any;
  };
} & any;
