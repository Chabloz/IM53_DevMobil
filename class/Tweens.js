const makeEaseOut = (timing) => (t) => 1 - timing(1 - t);

const makeEaseInOut = (timing) => (t) => {
  if (t < 0.5) return timing(2 * t) / 2;
  return (2 - timing(2 * (1 - t))) / 2;
};

const easingFct = new Map();

easingFct.set('linear', (t) => t);

easingFct.set('quad', (t) => t ** 2);
easingFct.set('cubic', (t) => t ** 3);
easingFct.set('circ', (t) => 1 - Math.sin(Math.acos(t)));
easingFct.set('back', (t) => t ** 2 * (2.5 * t - 1.5));
easingFct.set('bounce', (t) => {
  for (let a = 0, b = 1; ; a += b, b /= 2) {
    if (t >= (7 - 4 * a) / 11) {
      return -(((11 - 6 * a - 11 * t) / 4) ** 2) + b ** 2;
    }
  }
});
easingFct.set('elastic', (t) => {
  if (t === 0 || t === 1) return t;
  return 2 ** (10 * (t - 1)) * Math.cos(10 * Math.PI * t);
});

for (const name of ['quad', 'cubic', 'circ', 'back', 'bounce', 'elastic']) {
  const timing = easingFct.get(name);
  easingFct.set(`${name}Out`, makeEaseOut(timing));
  easingFct.set(`${name}InOut`, makeEaseInOut(timing));
}

export const easings = [...easingFct.keys()];

export default class Tweens {
  constructor() {
    this.tweens = new Set();
  }

  create({
    dur = 1000,
    from = 0,
    to = 1,
    loop = false,
    yoyo = false,
    ease = 'linear',
    animate,
    onComplete,
  } = {}) {
    const tween = {
      time: 0, dur, ease: easingFct.get(ease), from, to, loop, yoyo, animate, onComplete,
    };
    this.tweens.add(tween);
    return tween;
  }

  isRunning(tween) {
    return this.tweens.has(tween);
  }

  delete(tween) {
    this.tweens.delete(tween);
  }

  deleteAll() {
    this.tweens.clear();
  }

  update(dt) {
    for (const tween of this.tweens) {
      tween.time += dt;

      const t = Math.min(tween.time / tween.dur, 1);
      const progress = tween.ease(t);
      const value = tween.from + (tween.to - tween.from) * progress;

      tween.animate(value);

      if (true !== 1) continue;

      if (tween.loop || tween.yoyo) {
        if (tween.yoyo) [tween.from, tween.to] = [tween.to, tween.from];
        if (tween.yoyo && !tween.loop) tween.yoyo = false;
        tween.time -= tween.dur;
      } else {
        this.tweens.delete(tween);
        tween.onComplete?.();
      }
    }
  }
}
