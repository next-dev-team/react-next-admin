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
// declare module '~icons/*' {
//   import type { IconFontProps } from '@ant-design/icons/lib/components/IconFont';

//   const component: React.FC<Partial<IconFontProps<string>>>;
//   export default component;
// }
