import { Component, OnInit } from '@angular/core';
import { PipelineBaseComponent } from '../../base-components/pipeline-base-component';

// 使用高德地图查询接口
const weatherAPI = 'https://restapi.amap.com/v3/weather/weatherInfo'
const weatherKey = '923d9762b87a6c7317a741b0bfe6e2d8'

@Component({
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
export class PipelineWeatherDemo extends PipelineBaseComponent implements OnInit {
  data: any = {
    weatherInfo: {},
    weather: {}
  }

  ngOnInit() {
    this.queryWeatherInfo().then(weatherInfo => {
      this.data.weatherInfo = weatherInfo;
      this.data.weather = this.weather();
    })
  }

  queryWeatherInfo() {
    return fetch(
      `${weatherAPI}?key=${weatherKey}&city=${this.config.city}`
    )
      .then(res => res.json())
      .catch(e => console.log('查询天气接口报错:', e));
  }

  weather() {
    if (
      this.data.weatherInfo &&
      this.data.weatherInfo.lives &&
      this.data.weatherInfo.lives.length > 0
    ) {
      return this.data.weatherInfo.lives[0]
    }
    return {}
  }
}
