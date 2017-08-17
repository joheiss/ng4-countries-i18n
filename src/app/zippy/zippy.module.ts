import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZippyComponent} from './zippy.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ZippyComponent
    ],
    providers: [],
    exports: [
        ZippyComponent
    ]
})
export class ZippyModule {}
