const display = (data) => {
    console.log(data);
    document.getElementById("count").innerHTML = data;
  };
  
  const delay = (milliseconds, i) => {
    setTimeout(() => display(i), milliseconds);
  };
  
  (function (i) {
    delay(1000 * (10 - i), i);
    (function (i) {
      delay(1000 * (10 - i), i);
      (function (i) {
        delay(1000 * (10 - i), i);
        (function (i) {
          delay(1000 * (10 - i), i);
          (function (i) {
            delay(1000 * (10 - i), i);
            (function (i) {
              delay(1000 * (10 - i), i);
              (function (i) {
                delay(1000 * (10 - i), i);
                (function (i) {
                  delay(1000 * (10 - i), i);
                  (function (i) {
                    delay(1000 * (10 - i), i);
                    (function (i) {
                      delay(1000 * (10 - i), i);
                      (function (i) {
                        delay(1000 * (10 - i), i);
                        (function (i) {
                          delay(1000 * 10, i);
                        })("Happy Independence day");
                      })(--i);
                    })(--i);
                  })(--i);
                })(--i);
              })(--i);
            })(--i);
          })(--i);
        })(--i);
      })(--i);
    })(--i);
  })(10);