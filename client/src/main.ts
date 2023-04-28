import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './pages/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
