import { Component } from '@angular/core';
import { PipelineBaseComponent } from '../../base-components/pipeline-base-component';

@Component({
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
export class PipelineInfoDemo extends PipelineBaseComponent {
  constructor() {
    super();
  }
}
