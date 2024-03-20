import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from "./component-overview-by-cli/component-overview-by-cli.component";
import { ComponentOverviewByManually } from './component-overview-by-manually/component-overview-by-manually.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ComponentOverviewByCliComponent, ComponentOverviewByManually]
})
export class AppComponent {
  title = 'demo';
}
