import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { InventoryComponent } from './inventory';
import { AnalyticsComponent } from './analytics';
import { AnnouncementsComponent } from './announcements';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'announcements', component: AnnouncementsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes)