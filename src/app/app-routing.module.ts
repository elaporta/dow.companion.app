import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
    { path: 'crossroads', loadChildren: () => import('./pages/crossroads/crossroads.module').then( m => m.CrossroadsPageModule) },
	{ path: 'rules', loadChildren: () => import('./pages/rules/rules.module').then( m => m.RulesPageModule) },
	{ path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule) },
	{ path: 'about', loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule) },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
