import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AngularMaterialModule } from '../angular-material.module'
import { BannerComponent } from './banner/banner.component'

@NgModule({
    imports: [CommonModule, AngularMaterialModule, RouterModule.forChild([])],
    declarations: [BannerComponent],
    exports: [BannerComponent],
})
export class BannerModule {}
