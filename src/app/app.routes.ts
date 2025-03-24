import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './customer/home/home.component';

export const routes: Routes = [
    {
        path:"customer/home",
        component:HomeComponent
    },
    {
        path:"",
        redirectTo:"customer/home",pathMatch:'full'
    }
];
