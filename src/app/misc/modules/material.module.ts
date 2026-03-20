import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule as MatButtonModule } from "@angular/material/button";
import { MatTableModule as MatTableModule } from "@angular/material/table";
import { MatPaginatorModule as MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule as MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule as MatInputModule } from '@angular/material/input';
import { MatCheckboxModule as MatCheckboxModule } from '@angular/material/checkbox';
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
