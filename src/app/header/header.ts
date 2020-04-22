import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"]
})
export class HeaderComponent implements OnInit {
  title = "CodeSandbox";

  ngOnInit() {}

  showMenu(one) {
    // console.log(one.classList.contain("anima-class"));
    one.classList.toggle("anima-class2");
    // one.style.display='block';
  }
}
