import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("list", [
      transition(
        ":enter",
        query("li", [
          style({ opacity: 0, transform: "translateX(-100px" }),
          stagger(-50, animate(400))
        ])
      )
    ])
  ]
})
export class AppComponent implements OnInit {
  public state = "normal";

  ngOnInit() {}
}
