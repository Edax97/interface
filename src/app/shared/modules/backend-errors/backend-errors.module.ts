import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ValidErrorsComponent } from './components/valid-errors/valid-errors.component'

@NgModule({
    imports: [CommonModule],
    exports: [ValidErrorsComponent],
    declarations: [ValidErrorsComponent],
    providers: [],
})
export class BackendErrorsModule {}
