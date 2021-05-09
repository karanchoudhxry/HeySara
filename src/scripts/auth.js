auth.onAuthStateChanged((user) => {
    if (user) {
      // signed in
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<img src="${user.photoURL}"><div class="userInfo"><h3>${user.displayName}</h3></div>`;
      document.getElementById("whenSignedOut").style.display = "none";
    } else {
      // not signed in
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = "";
      document.getElementById("whenSignedOut").style.display = "block";
    }
  });