import { TweenMax, Power4 } from "gsap"

export function imageHover() {
  TweenMax.to(".cursor__ball--big", 0.2, {
    css: { fill: "#000", mixBlendMode: "normal" },
    ease: Power4.easeIn,
  })
}

export function imageHoverOut() {
  TweenMax.to(".cursor__ball--big", 0.2, {
    css: { fill: "#fff", mixBlendMode: "difference" },
    ease: Power4.easeIn,
  })
}

export function onMouseHover() {
  TweenMax.to(".cursor__ball--big", 0.2, {
    scale: 1.5,
    ease: Power4.easeIn,
  })

  TweenMax.to(".cursor__ball--big circle", 0.2, {
    css: { fill: "#fff" },
    ease: Power4.easeIn,
  })
}

export function onMouseHoverOut() {
  TweenMax.to(".cursor__ball--big", 0.3, {
    scale: 1,
  })

  TweenMax.to(".cursor__ball--big circle", 0.3, {
    css: { fill: "none" },
  })
}
