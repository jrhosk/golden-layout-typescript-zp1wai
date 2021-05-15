// Import stylesheets
import "./style.css";
import { GoldenLayout } from "golden-layout";
import { layoutConfig } from "./LayoutConfig";

var gl = new GoldenLayout(/*document.getElementById("golden-layout")*/);
var win;
var clickCount = 0;
gl.on("windowOpened", event => {
  win = event.getWindow();
});
gl.eventHub.on("windowClosed", event => {
  win = null;
});
gl.eventHub.on("count", count => {
  if (win) {
    win.document.querySelector("#holder").innerHTML = count;
  } else {
    document.querySelector("#holder").innerHTML = count;
  }
});

gl.registerComponentFactoryFunction("Test", (container, itemConfig) => {
  //console.log(container)
  let el = document.createElement("h1");
  el.textContent = "This is a test";
  container.element.append(el);

  let btn = document.createElement("button");
  btn.textContent = "Click Me!";
  btn.onclick = () => {
    clickCount++;
    gl.eventHub.emit("count", clickCount);
  };
  container.element.append(btn);
});

gl.registerComponentFactoryFunction("Test 2", (container, itemConfig) => {
  //console.log(container)
  let el = document.createElement("h1");
  el.textContent = "This is another test";
  container.element.append(el);

  let txt = document.createElement("p");
  txt.style.color = "white";
  txt.innerHTML = 'Button clicked <strong id="holder"></strong> times!!';
  container.element.append(txt);
});

gl.loadLayout(layoutConfig);
