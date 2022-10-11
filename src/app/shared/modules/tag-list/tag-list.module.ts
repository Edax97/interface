import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TagListComponent } from './tag-list/tag-list.component'
import { AngularMaterialModule } from '../angular-material.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [TagListComponent],
    imports: [CommonModule, AngularMaterialModule, RouterModule.forChild([])],
    exports: [TagListComponent],
})
export class TagListModule {}
