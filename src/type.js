'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 150,
}) //
  .pause(3000)
  .delete(18) // |
  .type('새로운 기술을 끊임없이 배우고 노력하는') // 새로운 기술을 끊임없이 배우고 성장하는|
  .pause(3000)
  .delete(21)
  .type('효율적이고 안정적인 개발을 추구하는')
  .pause(3000)
  .delete(19)
  .type('팀 협업을 통해 서로 win-win 할 수 있는')
  .pause(3000)
  .delete()
  .go();
