import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { PipelineDirective } from './pipeline.directive';
import { PipelineBaseComponent } from '../base-components/pipeline-base-component';
import { PipelineGapDemo } from '../components/pipeline-gap-demo';
import { PipelineHeaderDemo } from '../components/pipeline-header-demo';
import { PipelineInfoDemo } from '../components/pipeline-info-demo';
import { PipelineWeatherDemo } from '../components/pipeline-weather-demo';

import mycomponents from '../config/components.json';

const pipelineComponents =
  typeof window !== 'undefined'
    ? (window as any).INIT_DATA || mycomponents
    : mycomponents;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild(PipelineDirective) pipelineHost: PipelineDirective;
  pipelineComponents = pipelineComponents;
  components = {
    'pipeline-gap-demo': PipelineGapDemo,
    'pipeline-header-demo': PipelineHeaderDemo,
    'pipeline-info-demo': PipelineInfoDemo,
    'pipeline-weather-demo': PipelineWeatherDemo,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let viewContainerRef = this.pipelineHost.viewContainerRef;
    viewContainerRef.clear();

    this.pipelineComponents.forEach(oneComponent => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[oneComponent.name]);
      let componentRef = viewContainerRef.createComponent(componentFactory);
      // 设置组件属性
      (<PipelineBaseComponent>componentRef.instance)._config = oneComponent.data;
      (<PipelineBaseComponent>componentRef.instance).dataComponentId = oneComponent.id;
      (<PipelineBaseComponent>componentRef.instance).dataComponentName = oneComponent.name;
    });
  }
}
