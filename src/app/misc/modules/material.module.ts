import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSortModule } from "@angular/material/sort";

const features: any[] = [MatToolbarModule,MatSidenavModule,MatIconModule,
    MatDividerModule, MatButtonModule, MatTableModule, MatPaginatorModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, 
    MatNativeDateModule, MatSortModule, MatPaginatorModule];

@NgModule({
    imports: [features],
    exports: [features]
})
export class MaterialModule {}
