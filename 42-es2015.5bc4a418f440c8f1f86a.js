(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{RVQm:function(s,e){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},XrwQ:function(s,e){s.exports='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div class="alert alert-info">\n  Click on a month view day or a day view hour to select it\n</div>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    (beforeViewRender)="beforeMonthViewRender($event)"\n    (dayClicked)="dayClicked($event.day)"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    (beforeViewRender)="beforeDayViewRender($event.body.hourGrid)"\n    (hourSegmentClicked)="hourSegmentClicked($event.date)"\n  >\n  </mwl-calendar-day-view>\n</div>\n'},YLCN:function(s,e){s.exports="import {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation\n} from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { DayViewHour } from 'calendar-utils';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  // don't do this in your app, its only so the styles get applied globally\n  styles: [\n    `\n      .cal-day-selected,\n      .cal-day-selected:hover {\n        background-color: deeppink !important;\n      }\n    `\n  ],\n  encapsulation: ViewEncapsulation.None\n})\nexport class DemoComponent {\n  view = 'month';\n\n  viewDate: Date = new Date();\n\n  selectedMonthViewDay: CalendarMonthViewDay;\n\n  selectedDayViewDate: Date;\n\n  dayView: DayViewHour[];\n\n  events: CalendarEvent[] = [];\n\n  selectedDays: any = [];\n\n  dayClicked(day: CalendarMonthViewDay): void {\n    this.selectedMonthViewDay = day;\n    const selectedDateTime = this.selectedMonthViewDay.date.getTime();\n    const dateIndex = this.selectedDays.findIndex(\n      selectedDay => selectedDay.date.getTime() === selectedDateTime\n    );\n    if (dateIndex > -1) {\n      delete this.selectedMonthViewDay.cssClass;\n      this.selectedDays.splice(dateIndex, 1);\n    } else {\n      this.selectedDays.push(this.selectedMonthViewDay);\n      day.cssClass = 'cal-day-selected';\n      this.selectedMonthViewDay = day;\n    }\n  }\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(day => {\n      if (\n        this.selectedDays.some(\n          selectedDay => selectedDay.date.getTime() === day.date.getTime()\n        )\n      ) {\n        day.cssClass = 'cal-day-selected';\n      }\n    });\n  }\n\n  hourSegmentClicked(date: Date) {\n    this.selectedDayViewDate = date;\n    this.addSelectedDayViewClass();\n  }\n\n  beforeDayViewRender(dayView: DayViewHour[]) {\n    this.dayView = dayView;\n    this.addSelectedDayViewClass();\n  }\n\n  private addSelectedDayViewClass() {\n    this.dayView.forEach(hourSegment => {\n      hourSegment.segments.forEach(segment => {\n        delete segment.cssClass;\n        if (\n          this.selectedDayViewDate &&\n          segment.date.getTime() === this.selectedDayViewDate.getTime()\n        ) {\n          segment.cssClass = 'cal-day-selected';\n        }\n      });\n    });\n  }\n}\n"},YwKv:function(s,e,n){"use strict";n.r(e),n.d(e,"sources",function(){return a});const a=[{filename:"component.ts",contents:{raw:n("YLCN"),highlighted:n("wh1K")}},{filename:"template.html",contents:{raw:n("XrwQ"),highlighted:n("c2W5")}},{filename:"module.ts",contents:{raw:n("o26w"),highlighted:n("RVQm")}}]},c2W5:function(s,e){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"alert alert-info"</span>&gt;</span>\n  Click on a month view day or a day view hour to select it\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeMonthViewRender($event)"</span>\n    (<span class="hljs-attribute">dayClicked</span>)=<span class="hljs-value">"dayClicked($event.day)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeDayViewRender($event.body.hourGrid)"</span>\n    (<span class="hljs-attribute">hourSegmentClicked</span>)=<span class="hljs-value">"hourSegmentClicked($event.date)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},o26w:function(s,e){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},wh1K:function(s,e){s.exports='<span class="hljs-keyword">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation\n} from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarMonthViewDay } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DayViewHour } from <span class="hljs-string">\'calendar-utils\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n  <span class="hljs-comment">// don\'t do this in your app, its only so the styles get applied globally</span>\n  styles: [\n    `\n      .cal-day-selected,\n      .cal-day-selected:hover {\n        background-color: deeppink !important;\n      }\n    `\n  ],\n  encapsulation: ViewEncapsulation.None\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  selectedMonthViewDay: CalendarMonthViewDay;\n\n  selectedDayViewDate: <span class="hljs-built_in">Date</span>;\n\n  dayView: DayViewHour[];\n\n  events: CalendarEvent[] = [];\n\n  selectedDays: <span class="hljs-built_in">any</span> = [];\n\n  dayClicked(day: CalendarMonthViewDay): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.selectedMonthViewDay = day;\n    <span class="hljs-keyword">const</span> selectedDateTime = <span class="hljs-keyword">this</span>.selectedMonthViewDay.date.getTime();\n    <span class="hljs-keyword">const</span> dateIndex = <span class="hljs-keyword">this</span>.selectedDays.findIndex(\n      selectedDay =&gt; selectedDay.date.getTime() === selectedDateTime\n    );\n    <span class="hljs-keyword">if</span> (dateIndex &gt; -<span class="hljs-number">1</span>) {\n      <span class="hljs-keyword">delete</span> <span class="hljs-keyword">this</span>.selectedMonthViewDay.cssClass;\n      <span class="hljs-keyword">this</span>.selectedDays.splice(dateIndex, <span class="hljs-number">1</span>);\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-keyword">this</span>.selectedDays.push(<span class="hljs-keyword">this</span>.selectedMonthViewDay);\n      day.cssClass = <span class="hljs-string">\'cal-day-selected\'</span>;\n      <span class="hljs-keyword">this</span>.selectedMonthViewDay = day;\n    }\n  }\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): <span class="hljs-built_in">void</span> {\n    body.forEach(day =&gt; {\n      <span class="hljs-keyword">if</span> (\n        <span class="hljs-keyword">this</span>.selectedDays.some(\n          selectedDay =&gt; selectedDay.date.getTime() === day.date.getTime()\n        )\n      ) {\n        day.cssClass = <span class="hljs-string">\'cal-day-selected\'</span>;\n      }\n    });\n  }\n\n  hourSegmentClicked(date: <span class="hljs-built_in">Date</span>) {\n    <span class="hljs-keyword">this</span>.selectedDayViewDate = date;\n    <span class="hljs-keyword">this</span>.addSelectedDayViewClass();\n  }\n\n  beforeDayViewRender(dayView: DayViewHour[]) {\n    <span class="hljs-keyword">this</span>.dayView = dayView;\n    <span class="hljs-keyword">this</span>.addSelectedDayViewClass();\n  }\n\n  <span class="hljs-keyword">private</span> addSelectedDayViewClass() {\n    <span class="hljs-keyword">this</span>.dayView.forEach(hourSegment =&gt; {\n      hourSegment.segments.forEach(segment =&gt; {\n        <span class="hljs-keyword">delete</span> segment.cssClass;\n        <span class="hljs-keyword">if</span> (\n          <span class="hljs-keyword">this</span>.selectedDayViewDate &amp;&amp;\n          segment.date.getTime() === <span class="hljs-keyword">this</span>.selectedDayViewDate.getTime()\n        ) {\n          segment.cssClass = <span class="hljs-string">\'cal-day-selected\'</span>;\n        }\n      });\n    });\n  }\n}\n'}}]);