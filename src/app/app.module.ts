import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipelineDirective } from './pipeline.directive';

import { PipelineGapDemo } from '../components/pipeline-gap-demo';
import { PipelineHeaderDemo } from '../components/pipeline-header-demo';
import { PipelineInfoDemo } from '../components/pipeline-info-demo';
import { PipelineWeatherDemo } from '../components/pipeline-weather-demo';


@NgModule({
  declarations: [
    AppComponent,
    PipelineDirective,
    PipelineGapDemo,
    PipelineHeaderDemo,
    PipelineInfoDemo,
    PipelineWeatherDemo,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ 
    PipelineGapDemo,
    PipelineHeaderDemo,
    PipelineInfoDemo,
    PipelineWeatherDemo,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
