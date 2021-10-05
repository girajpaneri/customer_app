import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login-signup/login-signup.module').then(m => m.LoginSignupPageModule)
	},
	{
		path: 'validate-otp',
		loadChildren: () => import('./pages/validate-otp/validate-otp.module').then(m => m.ValidateOtpPageModule)
	}, {
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
