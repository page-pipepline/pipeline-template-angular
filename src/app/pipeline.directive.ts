import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pipeline-host]',
})
export class PipelineDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
