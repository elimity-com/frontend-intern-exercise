import { MainModule } from "./main.module";
import { platformBrowser } from "@angular/platform-browser";

platformBrowser().bootstrapModule(MainModule).catch(handleError);

function handleError(error: unknown) {
  console.error(error);
}
