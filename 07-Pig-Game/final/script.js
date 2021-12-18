'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);



 /**
     * @private
     */
    _toggleDesktopMode: function () {
      var categoryParent, html;

      $(this.element).off('click mousedown mouseenter mouseleave');

      this._on({

          /**
           * Prevent focus from sticking to links inside menu after clicking
           * them (focus should always stay on UL during navigation).
           */
          'mousedown .ui-menu-item > a': function (event) {
              event.preventDefault();
          },

          /**
           * Prevent focus from sticking to links inside menu after clicking
           * them (focus should always stay on UL during navigation).
           */
          'click .ui-state-disabled > a': function (event) {
              event.preventDefault();
          },

          /**
           * @param {jQuer.Event} event
           */
          'click .ui-menu-item:has(a)': function (event) {
              if ($(event.target).siblings('.submenu').length || $(event.target).parent().siblings('.submenu').length) {
                  event.preventDefault();

                  var target = $(event.target).closest('.ui-menu-item');

                  if (!this.mouseHandled && target.not('.ui-state-disabled').length) {
                      this.select(event);

                      // Open submenu on click
                      if (target.has('.ui-menu').length) {
                          this.expand(event);
                      } else if (!this.element.is(':focus') &&
                          $(this.document[0].activeElement).closest('.ui-menu').length
                      ) {
                          // Redirect focus to the menu
                          this.element.trigger('focus', [true]);

                          // If the active item is on the top level, let it stay active.
                          // Otherwise, blur the active item since it is no longer visible.
                          if (this.active && this.active.parents('.ui-menu').length === 1) { //eslint-disable-line
                              clearTimeout(this.timer);
                          }
                      }
                  }
              }
          },

          /**
           * @param {jQuery.Event} event
           */
          'click .ui-menu-item': function (event) {

              var target = $(event.currentTarget),
                  submenu = this.options.menus,
                  ulElement,
                  ulElementWidth,
                  width,
                  targetPageX,
                  rightBound;

              if (target.has(submenu)) {
                  ulElement = target.find(submenu);
                  ulElementWidth = ulElement.outerWidth(true);
                  width = target.outerWidth() * 2;
                  targetPageX = target.offset().left;
                  rightBound = $(window).width();

                  if (ulElementWidth + width + targetPageX > rightBound) {
                      ulElement.addClass('submenu-reverse');
                  }

                  if (targetPageX - ulElementWidth < 0) {
                      ulElement.removeClass('submenu-reverse');
                  }
              }

              // Remove ui-state-active class from siblings of the newly focused menu item
              // to avoid a jump caused by adjacent elements both having a class with a border
              target.siblings().children('.ui-state-active').removeClass('ui-state-active');
              this.focus(event, target);
          },
          /**
           * @param {jQuery.Event} event
           */
          'mouseleave': function (event) {
              this.collapseAll(event, true);
          },

          /**
           * Mouse leave.
           */
      });

      categoryParent = this.element.find('.all-category');
      html = $('html');

      categoryParent.remove();

      if (html.hasClass('nav-open')) {
          html.removeClass('nav-open');
          setTimeout(function () {
              html.removeClass('nav-before-open');
          }, this.options.hideDelay);
      }
  },