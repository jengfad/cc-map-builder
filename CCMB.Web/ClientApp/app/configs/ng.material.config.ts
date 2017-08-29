import { NgModule } from '@angular/core';
import  {   
            MdButtonModule, 
            MdToolbarModule, 
            MdGridListModule,
            MdDialogModule,
            MdInputModule,
            MdSidenavModule,
            MdIconModule,
            MdListModule,
            MdChipsModule,
            MdCardModule
        } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdGridListModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdChipsModule,
        MdCardModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdGridListModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdChipsModule,
        MdCardModule
    ],
})
export class NgMaterialConfig {
}