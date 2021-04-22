import React from "react";

export default function Header() {
  return (
    <div class="menubar">
      <div class="menubar-logo">
        <div class="b-logo">
          <img src="./icons/B-logo.svg" width="38.81px" height="33.81px" />
        </div>
        <div class="ookstep-logo">
          <img src="./icons/ookstep.svg" width="153.29px" height="45px" />
        </div>
      </div>
      <div class="menu-buttons-links">
        <a href="">Hem</a>
        <a href="">Böcker</a>
        <a href="">Om oss</a>
        <a href="">Kontakt</a>
      </div>

      <a href="">
        <div class="menu-login-frame">
          <div class="menu-login">Logga in</div>
        </div>
      </a>
      <a href="">
        <div class="menu-try-frame">
          <div class="menu-try">Prova Bookstep</div>
        </div>
      </a>
    </div>
  );
}
