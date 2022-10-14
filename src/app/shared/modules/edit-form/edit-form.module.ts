import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditFormComponent } from './edit-form/edit-form.component'
import { AngularMaterialModule } from '../angular-material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [EditFormComponent],
    imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
    exports: [EditFormComponent],
})
export class EditFormModule {}
