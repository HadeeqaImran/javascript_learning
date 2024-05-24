// Stale closure
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
}

// No stale closure
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
}

