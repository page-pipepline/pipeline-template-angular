import { Component } from '@angular/core';
import { PipelineBaseComponent } from '../../base-components/pipeline-base-component';

@Component({
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
export class PipelineGapDemo extends PipelineBaseComponent {
  styleObject: any = {};

  setConfig(val: object) {
    super.setConfig(val);
    this.styleObject = {
      height: this.config.height,
      color: this.config.textColor,
      backgroundColor: this.config.backgroundColor
    };
  }
}
