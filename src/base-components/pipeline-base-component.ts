import { Component, Input } from '@angular/core';

@Component({})
export class PipelineBaseComponent {
  @Input() dataComponentId: string;
  @Input() dataComponentName: string;
  // Angular 的动态化组件是先实例化再传入 props, 并且无法使用 ngOnChanges hook
  // 所以用 _config 来传入 config, 并用 setter 传递给 config
  @Input() set _config (val: any) {
    this.setConfig(val);
  }
  setConfig(val: any) {
    this.config = val;
  }
  config: any = {};
}
