import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, debounceTime, filter, switchMap, distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  results: any;
  searchText: string;
  latestSearch = new Subject<string>();

  constructor(public httpClient: HttpClient) {
    this.results = this.latestSearch.pipe(
      filter(term => !!term),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
        this.httpClient.get(
          `https://api.github.com/search/repositories?q=${term}`
        )
      ),
      map(response => response["items"].map(item => item.name))
    );
  }

  search() {
    this.latestSearch.next(this.searchText);
  }
}
