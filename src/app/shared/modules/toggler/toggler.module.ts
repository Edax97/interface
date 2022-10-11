import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TogglerComponent } from './toggler/toggler.component'
import { AngularMaterialModule } from '../angular-material.module'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

@NgModule({
    declarations: [TogglerComponent],
    imports: [CommonModule, AngularMaterialModule, RouterModule.forChild([])],
    exports: [TogglerComponent],
})
export class TogglerModule {}
