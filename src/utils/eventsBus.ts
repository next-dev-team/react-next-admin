/**
 * 单页面事件处理
 */
const eventsBus = {
  $bus: {},
  $on(eventName: string, event: () => void) {
    this.$addEventListener(eventName, event);
  },
  $off(eventName: string) {
    this.$removeEventListener(eventName);
  },

  $emit(eventName: string, data: any) {
    const events = this.$bus[eventName];
    if (!events) {
      return;
    }
    events.forEach((event: any) => {
      event.event(data);
      if (event.eventType === 'once') {
        this.$removeEventListener(eventName);
      }
    });
  },
  $has(eventName: string) {
    return this.$bus[eventName];
  },
  $addEventListener(eventName: string, event: () => void) {
    // 绑定监听事件
    if (!this.$bus[eventName]) {
      this.$bus[eventName] = [];
    }
    this.$bus[eventName].push({
      eventName,
      event,
    });
  },
  $removeEventListener(eventName: string) {
    if (this.$bus[eventName]) {
      delete this.$bus[eventName];
    }
  },
};
export default eventsBus;
