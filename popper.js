const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

const card1 = document.querySelector('#spread1');
const tooltip1 = document.querySelector('#tooltip1');
const card2 = document.querySelector('#spread2');
const tooltip2 = document.querySelector('#tooltip2');
const card3 = document.querySelector('#spread3');
const tooltip3 = document.querySelector('#tooltip3');
const card4 = document.querySelector('#spread4');
const tooltip4 = document.querySelector('#tooltip4');
const card5 = document.querySelector('#spread5');
const tooltip5 = document.querySelector('#tooltip5');


// CARD 1
      let popperInstance1 = null;

      function create() {
        popperInstance1 = Popper.createPopper(card1, tooltip1, {
            placement: "auto",
            modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -30],
              },
            },
          ],
        });
      }

      function destroy() {
        if (popperInstance1) {
          popperInstance1.destroy();
          popperInstance1 = null;
        }
      }

      function show() {
        tooltip1.setAttribute('data-show', '');
        create();
      }

      function hide() {
        tooltip1.removeAttribute('data-show');
        destroy();
      }



      showEvents.forEach(event => {
        card1.addEventListener(event, show);
      });

      hideEvents.forEach(event => {
        card1.addEventListener(event, hide);
      });

// CARD 2
      let popperInstance2 = null;

      function create2() {
        popperInstance2 = Popper.createPopper(card2, tooltip2, {
            placement: "auto",
            modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -30],
              },
            },
          ],
        });
      }

      function destroy2() {
        if (popperInstance2) {
          popperInstance2.destroy();
          popperInstance2 = null;
        }
      }

      function show2() {
        tooltip2.setAttribute('data-show', '');
        create2();
      }

      function hide2() {
        tooltip2.removeAttribute('data-show');
        destroy2();
      }

      showEvents.forEach(event => {
        card2.addEventListener(event, show2);
      });

      hideEvents.forEach(event => {
        card2.addEventListener(event, hide2);
      });

// CARD 3
      let popperInstance3 = null;

      function create3() {
        popperInstance3 = Popper.createPopper(card3, tooltip3, {
            placement: "auto",
            modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -30],
              },
            },
          ],
        });
      }

      function destroy3() {
        if (popperInstance3) {
          popperInstance3.destroy();
          popperInstance3 = null;
        }
      }

      function show3() {
        tooltip3.setAttribute('data-show', '');
        create3();
      }

      function hide3() {
        tooltip3.removeAttribute('data-show');
        destroy3();
      }

      showEvents.forEach(event => {
        card3.addEventListener(event, show3);
      });

      hideEvents.forEach(event => {
        card3.addEventListener(event, hide3);
      });

// CARD 4
      let popperInstance4 = null;

      function create4() {
        popperInstance4 = Popper.createPopper(card4, tooltip4, {
            placement: "auto",
            modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -30],
              },
            },
          ],
        });
      }

      function destroy4() {
        if (popperInstance4) {
          popperInstance4.destroy();
          popperInstance4 = null;
        }
      }

      function show4() {
        tooltip4.setAttribute('data-show', '');
        create4();
      }

      function hide4() {
        tooltip4.removeAttribute('data-show');
        destroy4();
      }

      showEvents.forEach(event => {
        card4.addEventListener(event, show4);
      });

      hideEvents.forEach(event => {
        card4.addEventListener(event, hide4);
      });

// CARD 4
      let popperInstance5 = null;

      function create5() {
        popperInstance5 = Popper.createPopper(card5, tooltip5, {
            placement: "auto",
            modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -30],
              },
            },
          ],
        });
      }

      function destroy5() {
        if (popperInstance5) {
          popperInstance5.destroy();
          popperInstance5 = null;
        }
      }

      function show5() {
        tooltip5.setAttribute('data-show', '');
        create5();
      }

      function hide5() {
        tooltip5.removeAttribute('data-show');
        destroy5();
      }

      showEvents.forEach(event => {
        card5.addEventListener(event, show5);
      });

      hideEvents.forEach(event => {
        card5.addEventListener(event, hide5);
      });